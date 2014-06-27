package qbank.vo;


/* setter/getter 적용 <= 캡슐화
 * 
 */
public class BankAddVo {
	private int 			qno;	
	private String 			qcode;		
	private String			qtype;
	private String 			qlevel;  
	private String 	 		qedituse;
	private String 	 		qname;
	private String 	 		qtext;
	private String 	 		qcomment;
	private String			qsource;
	private String			quseyn;
	private String			qwriter;
	private String 	 		qdate;
	private int 	 		ccode;
	
	private int 	 		ono;
	private String 	 		oname;
	private String 	 		oanswer;
	
	private String 	 		danswer;
	
	private int 	 		fno;
	private String 	 		ftype;
	private String 	 		fpath;
	
	
	
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
	public String getQtext() {
		return qtext;
	}
	public BankAddVo setQtext(String qtext) {
		this.qtext = qtext;
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
	public int getOno() {
		return ono;
	}
	public BankAddVo setOno(int ono) {
		this.ono = ono;
		return this;
	}
	public String getOname() {
		return oname;
	}
	public BankAddVo setOname(String oname) {
		this.oname = oname;
		return this;
	}
	public String getOanswer() {
		return oanswer;
	}
	public BankAddVo setOanswer(String oanswer) {
		this.oanswer = oanswer;
		return this;
	}
	public String getDanswer() {
		return danswer;
	}
	public BankAddVo setDanswer(String danswer) {
		this.danswer = danswer;
		return this;
	}
	public int getFno() {
		return fno;
	}
	public BankAddVo setFno(int fno) {
		this.fno = fno;
		return this;
	}
	public String getFtype() {
		return ftype;
	}
	public BankAddVo setFtype(String ftype) {
		this.ftype = ftype;
		return this;
	}
	public String getFpath() {
		return fpath;
	}
	public BankAddVo setFpath(String fpath) {
		this.fpath = fpath;
		return this;
	}

	
	
}
