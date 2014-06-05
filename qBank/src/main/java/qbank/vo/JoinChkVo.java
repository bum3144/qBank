package qbank.vo;

import java.io.Serializable;

public class JoinChkVo implements Serializable{
  private static final long serialVersionUID = 1L;

  int 		uno;
  String 	uid;
  
  
	public int getUno() {
		return uno;
	}
	public JoinChkVo setUno(int uno) {
		this.uno = uno;
		return this;
	}
	public String getUid() {
		return uid;
	}
	public JoinChkVo setUid(String uid) {
		this.uid = uid;
		return this;
	}
  
}
















