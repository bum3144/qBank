package qbank.vo;

import java.io.Serializable;

public class UserVo implements Serializable{
  private static final long serialVersionUID = 1L;

  int 		uno;
  String	uclass;
  String	uid;
  String 	upass;
  String 	uname;
  String 	uemail;
  
  
public int getUno() {
	return uno;
}
public UserVo setUno(int uno) {
	this.uno = uno;
	return this;
}
public String getUclass() {
	return uclass;
}
public UserVo setUclass(String uclass) {
	this.uclass = uclass;
	return this;
}
public String getUid() {
	return uid;
}
public UserVo setUid(String uid) {
	this.uid = uid;
	return this;
}
public String getUpass() {
	return upass;
}
public UserVo setUpass(String upass) {
	this.upass = upass;
	return this;
}
public String getUname() {
	return uname;
}
public UserVo setUname(String uname) {
	this.uname = uname;
	return this;
}
public String getUemail() {
	return uemail;
}
public UserVo setUemail(String uemail) {
	this.uemail = uemail;
	return this;
}  
  
}
















