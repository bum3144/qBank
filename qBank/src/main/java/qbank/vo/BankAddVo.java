package qbank.vo;

public class BankAddVo {
	private int 			qno;		//문제번호
	private String 			qcode;		//문제코드
	private String			qtype;		//문제유형
	private String 			qlevel;  	//난이도
	private String 	 		qedituse;	//에디터사용유무
	private String 	 		qname;		//문제명	
	private boolean 		textCheck;	//지문 입력 체크	
	private String 	 		qtext;		//문제 지문
	private boolean 		commentCheck;	//문제 해설 체크
	private String 	 		qcomment;	//문제 해설
	private boolean		sourceCheck;	//문제 출처 체크
	private String			qsource;	//문제 출처
	private String			quseyn;		//사용 유무
	private String			qwriter;	//작성자
	private String 	 		qdate;		//작성일
	private int 	 		ccode;		//카테고리 번호
	
	
	public int getQno() {
		return qno;
	}
	public BankAddVo setQno(int qno) {
		this.qno = qno;
		return this;
	}
	public String getQcode() {
		return qcode;
	}
	public BankAddVo setQcode(String qcode) {
		this.qcode = qcode;
		return this;
	}
	public String getQtype() {
		return qtype;
	}
	public BankAddVo setQtype(String qtype) {
		this.qtype = qtype;
		return this;
	}
	public String getQlevel() {
		return qlevel;
	}
	public BankAddVo setQlevel(String qlevel) {
		this.qlevel = qlevel;
		return this;
	}
	public String getQedituse() {
		return qedituse;
	}
	public BankAddVo setQedituse(String qedituse) {
		this.qedituse = qedituse;
		return this;
	}
	public String getQname() {
		return qname;
	}
	public BankAddVo setQname(String qname) {
		this.qname = qname;
		return this;
	}
	public boolean getTextCheck() {
		return textCheck;
	}
	public BankAddVo setTextCheck(boolean textCheck) {
		this.textCheck = textCheck;
		return this;
	}
	public String getQtext() {
		return qtext;
	}
	public BankAddVo setQtext(String qtext) {
		this.qtext = qtext;
		return this;
	}
	public boolean getCommentCheck() {
		return commentCheck;
	}
	public BankAddVo setCommentCheck(boolean commentCheck) {
		this.commentCheck = commentCheck;
		return this;
	}
	public boolean getSourceCheck() {
		return sourceCheck;
	}
	public BankAddVo setSourceCheck(boolean sourceCheck) {
		this.sourceCheck = sourceCheck;
		return this;
	}
	public String getQcomment() {
		return qcomment;
	}
	public BankAddVo setQcomment(String qcomment) {
		this.qcomment = qcomment;
		return this;
	}
	public String getQsource() {
		return qsource;
	}
	public BankAddVo setQsource(String qsource) {
		this.qsource = qsource;
		return this;
	}
	public String getQuseyn() {
		return quseyn;
	}
	public BankAddVo setQuseyn(String quseyn) {
		this.quseyn = quseyn;
		return this;
	}
	public String getQwriter() {
		return qwriter;
	}
	public BankAddVo setQwriter(String qwriter) {
		this.qwriter = qwriter;
		return this;
	}
	public String getQdate() {
		return qdate;
	}
	public BankAddVo setQdate(String qdate) {
		this.qdate = qdate;
		return this;
	}
	public int getCcode() {
		return ccode;
	}
	public BankAddVo setCcode(int ccode) {
		this.ccode = ccode;
		return this;
	}
	@Override
	public String toString() {
		return "BankAddVo [qno=" + qno + ", qcode=" + qcode + ", qtype="
				+ qtype + ", qlevel=" + qlevel + ", qedituse=" + qedituse
				+ ", qname=" + qname + ", textCheck=" + textCheck + ", qtext="
				+ qtext + ", commentCheck=" + commentCheck + ", qcomment="
				+ qcomment + ", sourceCheck=" + sourceCheck + ", qsource="
				+ qsource + ", quseyn=" + quseyn + ", qwriter=" + qwriter
				+ ", qdate=" + qdate + ", ccode=" + ccode + "]";
	}


	
	
}
