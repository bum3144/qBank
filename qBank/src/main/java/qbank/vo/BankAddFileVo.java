package qbank.vo;


public class BankAddFileVo {
	private int 			qno;			//문제번호
	private int 	 		fno;			//파일번호
	private boolean 		imageCheck;		//이미지 파일 체크
	private boolean 		mediaCheck;		//미디어 파일 체크
	private String 	 		ftype;			//파일타입(확장자)
	private String 	 		fpath;			//파일경로
	
	
	public int getQno() {
		return qno;
	}
	public BankAddFileVo setQno(int qno) {
		this.qno = qno;
		return this;
	}
	public int getFno() {
		return fno;
	}
	public BankAddFileVo setFno(int fno) {
		this.fno = fno;
		return this;
	}
	public boolean isImageCheck() {
		return imageCheck;
	}
	public BankAddFileVo setImageCheck(boolean imageCheck) {
		this.imageCheck = imageCheck;
		return this;
	}
	public boolean isMediaCheck() {
		return mediaCheck;
	}
	public BankAddFileVo setMediaCheck(boolean mediaCheck) {
		this.mediaCheck = mediaCheck;
		return this;
	}
	public String getFtype() {
		return ftype;
	}
	public BankAddFileVo setFtype(String ftype) {
		this.ftype = ftype;
		return this;
	}
	public String getFpath() {
		return fpath;
	}
	public BankAddFileVo setFpath(String fpath) {
		this.fpath = fpath;
		return this;
	}
	@Override
	public String toString() {
		return "BankAddFileVo [qno=" + qno + ", fno=" + fno + ", imageCheck="
				+ imageCheck + ", mediaCheck=" + mediaCheck + ", ftype="
				+ ftype + ", fpath=" + fpath + "]";
	}


	
	
	
}
