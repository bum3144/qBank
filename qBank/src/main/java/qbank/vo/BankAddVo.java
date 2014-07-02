package qbank.vo;

public class BankAddVo {
	private int 			qno;				//문제번호
	private String 			qcode;				//문제코드
	private String			typeSelector;		//문제유형
	private String 			level;  			//난이도
	private String 	 		qedituse;			//에디터사용유무
	private String 	 		questVal;			//문제명	
	private boolean 		textCheck;			//지문 입력 체크	
	private String 	 		textDisplay;		//문제 지문	
	private boolean 		comentCheck;		//문제 해설 체크
	private String 	 		comentDisplay;		//문제 해설
	private boolean		sourceCheck;		//문제 출처 체크
	private String			sourceDisplay;		//문제 출처
	private String			quseyn;				//사용 유무
	private String			qwriter;			//작성자
	private String 	 		qdate;				//작성일
	private int 	 		cCode;				//카테고리 번호
	
	public BankAddVo() {
		this.qedituse = "N";
		this.textCheck = false;
		this.comentCheck = false;
		this.sourceCheck = false;
		this.quseyn = "Y";
	}
	
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
	public String getTypeSelector() {
		return typeSelector;
	}
	public BankAddVo setTypeSelector(String typeSelector) {
		this.typeSelector = typeSelector;
		return this;
	}
	public String getLevel() {
		return level;
	}
	public BankAddVo setLevel(String level) {
		this.level = level;
		return this;
	}
	public String getQedituse() {
		return qedituse;
	}
	public BankAddVo setQedituse(String qedituse) {
		this.qedituse = qedituse;
		return this;
	}
	public String getQuestVal() {
		return questVal;
	}
	public BankAddVo setQuestVal(String questVal) {
		this.questVal = questVal;
		return this;
	}
	public boolean isTextCheck() {
		return textCheck;
	}
	public BankAddVo setTextCheck(boolean textCheck) {
		this.textCheck = textCheck;
		return this;
	}
	public String getTextDisplay() {
		return textDisplay;
	}
	public BankAddVo setTextDisplay(String textDisplay) {
		this.textDisplay = textDisplay;
		return this;
	}
	public boolean isComentCheck() {
		return comentCheck;
	}
	public BankAddVo setComentCheck(boolean comentCheck) {
		this.comentCheck = comentCheck;
		return this;
	}
	public String getComentDisplay() {
		return comentDisplay;
	}
	public BankAddVo setComentDisplay(String comentDisplay) {
		this.comentDisplay = comentDisplay;
		return this;
	}
	public boolean isSourceCheck() {
		return sourceCheck;
	}
	public BankAddVo setSourceCheck(boolean sourceCheck) {
		this.sourceCheck = sourceCheck;
		return this;
	}
	public String getSourceDisplay() {
		return sourceDisplay;
	}
	public BankAddVo setSourceDisplay(String sourceDisplay) {
		this.sourceDisplay = sourceDisplay;
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
	public int getcCode() {
		return cCode;
	}
	public BankAddVo setcCode(int cCode) {
		this.cCode = cCode;
		return this;
	}
	@Override
	public String toString() {
		return "BankAddVo [qno=" + qno + ", qcode=" + qcode + ", typeSelector="
				+ typeSelector + ", level=" + level + ", qedituse=" + qedituse
				+ ", questVal=" + questVal + ", textCheck=" + textCheck
				+ ", textDisplay=" + textDisplay + ", comentCheck="
				+ comentCheck + ", comentDisplay=" + comentDisplay
				+ ", sourceCheck=" + sourceCheck + ", sourceDisplay="
				+ sourceDisplay + ", quseyn=" + quseyn + ", qwriter=" + qwriter
				+ ", qdate=" + qdate + ", cCode=" + cCode + "]";
	}
	
	
	
	
}
