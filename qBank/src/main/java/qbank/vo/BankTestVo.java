package qbank.vo;


/* setter/getter 적용 <= 캡슐화
 * 
 */
public class BankTestVo {
	private int 				no;	
	private String				code;
	private String 				title;  
	private int 	 			qty;
	private int 	 			position;
	private int 	 			texposition;
	private int 	 			useyn;
	private String				startdate;
	private String				enddate;
	private int				regdate;
	private int 	 			uno;

	
	public String getCode() {
		return code;
	}
	public BankTestVo setCode(String code) {
		this.code = code;
		return this;
	}
	public int getNo() {
		return no;
	}
	public BankTestVo setNo(int no) {
		this.no = no;
		return this;
	}
	
	public String getTitle() {
		return title;
	}
	public BankTestVo setTitle(String title) {
		this.title = title;
		return this;
	}
	public int getQty() {
		return qty;
	}
	public BankTestVo setQty(int qty) {
		this.qty = qty;
		return this;
	}
	public int getPosition() {
		return position;
	}
	public BankTestVo setPosition(int position) {
		this.position = position;
		return this;
	}
	public int getTexposition() {
		return texposition;
	}
	public BankTestVo setTexposition(int texposition) {
		this.texposition = texposition;
		return this;
	}
	public int getUseyn() {
		return useyn;
	}
	public BankTestVo setUseyn(int useyn) {
		this.useyn = useyn;
		return this;
	}		
	public String getStartdate() {
		return startdate;
	}
	public BankTestVo setStartdate(String startdate) {
		this.startdate = startdate;
		return this;
	}
	public String getEnddate() {
		return enddate;
	}
	public BankTestVo setEnddate(String enddate) {
		this.enddate = enddate;
		return this;
	}
	public int getRegdate() {
		return regdate;
	}
	public BankTestVo setRegdate(int regdate) {
		this.regdate = regdate;
		return this;
	}
	public int getUno() {
		return uno;
	}
	public BankTestVo setUno(int uno) {
		this.uno = uno;
		return this;
	}
	
}
