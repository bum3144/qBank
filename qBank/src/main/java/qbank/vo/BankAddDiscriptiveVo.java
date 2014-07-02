package qbank.vo;


public class BankAddDiscriptiveVo {
	private int 			qno;		//문제번호
	private String 	 		answerText;	//서술형 답
	
	public int getQno() {
		return qno;
	}
	public BankAddDiscriptiveVo setQno(int qno) {
		this.qno = qno;
		return this;
	}
	public String getAnswerText() {
		return answerText;
	}
	public BankAddDiscriptiveVo setAnswerText(String answerText) {
		this.answerText = answerText;
		return this;
	}
	
	@Override
	public String toString() {
		return "BankAddDiscriptiveVo [qno=" + qno + ", answerText=" + answerText
				+ "]";
	}
	
	
	
}
