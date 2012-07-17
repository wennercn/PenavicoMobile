<%@ WebService Language="C#"  Class="Admin" %>
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Xml;
using System.Xml.Linq;
using System.IO;
using System.Data;
using PENAVICO;

/// <summary>
///Admin 客户信息操作
/// </summary>
[WebService(Namespace = "http://www.wztnet.com")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
public class Admin : System.Web.Services.WebService{
    public Admin(){
	}    


    [WebMethod(EnableSession = true, Description = "获取客户列表")]
    public XmlElement CheckSession(){
		string url = "http://tbm.penavicotj.com/penavico/ws/admin.asmx" ;
		string[] args = new string[2] ;
		XmlElement result = (XmlElement)WebServiceHelper.InvokeWebService(url ,"CheckSession" , null) ;
		return result;
	}


//检测登录
    [WebMethod(EnableSession = true, Description = "获取客户列表")]
    public XmlElement CheckLogin(String u_name , String u_pass){
		string url = "http://tbm.penavicotj.com/penavico/ws/admin.asmx" ;
		string[] args = new string[2] ;
		args[0] = u_name;
		args[1] = u_pass;
		XmlElement result = (XmlElement)WebServiceHelper.InvokeWebService(url ,"CheckLogin" , args) ;
		return result;
    } 

//退出登录
    [WebMethod(EnableSession = true, Description = "退出登录")]
    public XmlDataDocument Logout()
    {
        XmlDataDocument bd = new XmlDataDocument();
		HttpContext.Current.Session["session"] = "";
		HttpContext.Current.Session["Member_Id"] = "";
		HttpContext.Current.Session["Member_Code"] = "";
		HttpContext.Current.Session["Member_Name"] = "";
		HttpContext.Current.Session["Member_Loc"] = "";
		HttpContext.Current.Session["Member_Duty"] ="";

		bd = Page.GetResponseXml("succ", "退出成功", "<data></data>", "退出成功", "", "");
		return bd;
    }	
//修改密码
    [WebMethod(EnableSession = true, Description = "退出登录")]
    public XmlDataDocument UpdatePassword(string opass , string npass , string vpass){
        XmlDataDocument bd = new XmlDataDocument();
		ATLDATALib.IDBDataAtl rs;
		string emp_id = HttpContext.Current.Session["Member_Id"].ToString();

		rs = Tpp.RPC.EmployeeControl.Employee.Load("emp_id" , emp_id);
		if (!rs.IsOK()){
            bd = Page.GetResponseXml("unsucc", "操作失败!" + rs.GetErrorinfo());
			return bd;
		}
		String password = rs.GetStringTName("password");
		if (password != opass){
            bd = Page.GetResponseXml("unsucc", "操作失败!输入的原密码不正确!");
			return bd;
		}
		
		rs = Tpp.RPC.EmployeeControl.Employee.Update("password" , npass , "emp_id", emp_id);
        if (rs.IsOK()){
			bd = Page.GetResponseXml("succ");
        }else{
            bd = Page.GetResponseXml("unsucc", "操作失败!" + rs.GetErrorinfo());
        }
        return bd;
	
	}

}