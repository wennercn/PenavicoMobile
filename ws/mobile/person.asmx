<%@ WebService Language="C#"  Class="Person" %>
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using System.Xml;
using System.IO;
using System.Data;
using PENAVICO;

/// <summary>
///Person 个人信息
/// </summary>
[WebService(Namespace = "http://www.wztnet.com")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
public class Person : System.Web.Services.WebService{
    public Person(){
	}

//获取任务列表
    [WebMethod(EnableSession = true, Description = "获取任务列表")]
    public XmlElement GetTasks(){
		string url = "http://tbm.penavicotj.com/penavico/ws/person.asmx" ;
		XmlElement result = (XmlElement)WebServiceHelper.InvokeWebService(url ,"GetTasks" , null) ;
		return result;
    }
}
	

	
