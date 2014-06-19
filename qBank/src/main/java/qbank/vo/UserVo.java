package qbank.vo;

import java.io.Serializable;

public class UserVo implements Serializable{
  private static final long serialVersionUID = 1L;

  int 		uno;
  String	uclass;
  String	uid;
  String 	upass;
  String 	uname;
  String  usex;
  String  ubirth;
  String 	uemail;
  String  utel;
  String  ucell;
  String  uzipcode;
  String  uaddr1;
  String  uaddr2;
  String  uphotopath;
  
  
	public String getUphotopath() {
		return uphotopath;
	}
	public void setUphotopath(String uphotopath) {
		this.uphotopath = uphotopath;
	}
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
	public String getUsex() {
		return usex;
	}
	public UserVo setUsex(String usex) {
		this.usex = usex;
		return this;
	}
	public String getUbirth() {
		return ubirth;
	}
	public UserVo setUbirth(String ubirth) {
		this.ubirth = ubirth;
		return this;
	}
	public String getUemail() {
		return uemail;
	}
	public UserVo setUemail(String uemail) {
		this.uemail = uemail;
		return this;
	}
	public String getUtel() {
		return utel;
	}
	public UserVo setUtel(String utel) {
		this.utel = utel;
		return this;
	}
	public String getUcell() {
		return ucell;
	}
	public UserVo setUcell(String ucell) {
		this.ucell = ucell;
		return this;
	}
	public String getUzipcode() {
		return uzipcode;
	}
	public UserVo setUzipcode(String uzipcode) {
		this.uzipcode = uzipcode;
		return this;
	}
	public String getUaddr1() {
		return uaddr1;
	}
	public UserVo setUaddr1(String uaddr1) {
		this.uaddr1 = uaddr1;
		return this;
	}
	public String getUaddr2() {
		return uaddr2;
	}
	public UserVo setUaddr2(String uaddr2) {
		this.uaddr2 = uaddr2;
		return this;
	}

  
  
}
















