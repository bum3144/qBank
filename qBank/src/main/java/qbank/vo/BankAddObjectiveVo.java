package qbank.vo;

import java.util.Arrays;


public class BankAddObjectiveVo {

	private int 			qno;			//문제번호
	private int 	 		ono;			//객관식 보기 번호
	private int 	 		exSelector;		//객관식 보기 수량
	private String[] 	 	exText;			//객관식 보기명(한번에5개까지)
	private String 		 	exText1;		//객관식 보기1
	private String 	 		exText2;		//객관식 보기2
	private String 	 		exText3;		//객관식 보기3
	private String 	 		exText4;		//객관식 보기4
	private String 	 		exText5;		//객관식 보기5
	private String 	 		bokidap;		//객관식 답
	
	
	public int getQno() {
		return qno;
	}
	public BankAddObjectiveVo setQno(int qno) {
		this.qno = qno;
		return this;
	}
	public int getOno() {
		return ono;
	}
	public BankAddObjectiveVo setOno(int ono) {
		this.ono = ono;
		return this;
	}
	public int getExSelector() {
		return exSelector;
	}
	public BankAddObjectiveVo setExSelector(int exSelector) {
		this.exSelector = exSelector;
		return this;
	}
	public String[] getExText() {
		return exText;
	}
	public BankAddObjectiveVo setExText(String[] exText) {
		this.exText = exText;
		return this;
	}
	public String getExText1() {
		return exText1;
	}
	public BankAddObjectiveVo setExText1(String exText1) {
		this.exText1 = exText1;
		return this;
	}
	public String getExText2() {
		return exText2;
	}
	public BankAddObjectiveVo setExText2(String exText2) {
		this.exText2 = exText2;
		return this;
	}
	public String getExText3() {
		return exText3;
	}
	public BankAddObjectiveVo setExText3(String exText3) {
		this.exText3 = exText3;
		return this;
	}
	public String getExText4() {
		return exText4;
	}
	public BankAddObjectiveVo setExText4(String exText4) {
		this.exText4 = exText4;
		return this;
	}
	public String getExText5() {
		return exText5;
	}
	public BankAddObjectiveVo setExText5(String exText5) {
		this.exText5 = exText5;
		return this;
	}
	public String getBokidap() {
		return bokidap;
	}
	public BankAddObjectiveVo setBokidap(String bokidap) {
		this.bokidap = bokidap;
		return this;
	}
	@Override
	public String toString() {
		return "BankAddObjectiveVo [qno=" + qno + ", ono=" + ono
				+ ", exSelector=" + exSelector + ", exText="
				+ Arrays.toString(exText) + ", exText1=" + exText1
				+ ", exText2=" + exText2 + ", exText3=" + exText3
				+ ", exText4=" + exText4 + ", exText5=" + exText5
				+ ", bokidap=" + bokidap + "]";
	}



	
	
	
}
