package qbank.vo;


/* setter/getter 적용 <= 캡슐화
 * 
 */
public class QuestVo {
	private int 				no;	
	private String			qcode;
	private String 	 		type;
	private String 	 		level;
	private String 	 		edituse;
	private String 	 		name;
	private String			text;
	private String			comment;
	private String		  source;
	private String 	 		useyn;
	private String 	 		writer;
	private String 	 		date;
	private int 	 			ccode;
	
	
	
	public int getNo() {
		return no;
	}
	public QuestVo setNo(int no) {
		this.no = no;
		return this;
	}
	public String getQcode() {
		return qcode;
	}
	public QuestVo setQcode(String qcode) {
		this.qcode = qcode;
		return this;
	}
	public String getType() {
		return type;
	}
	public QuestVo setType(String type) {
		this.type = type;
		return this;
	}
	public String getLevel() {
		return level;
	}
	public QuestVo setLevel(String level) {
		this.level = level;
		return this;
	}
	public String getEdituse() {
		return edituse;
	}
	public QuestVo setEdituse(String edituse) {
		this.edituse = edituse;
		return this;
	}
	public String getName() {
		return name;
	}
	public QuestVo setName(String name) {
		this.name = name;
		return this;
	}
	public String getText() {
		return text;
	}
	public QuestVo setText(String text) {
		this.text = text;
		return this;
	}
	public String getComment() {
		return comment;
	}
	public QuestVo setComment(String comment) {
		this.comment = comment;
		return this;
	}
	public String getSource() {
		return source;
	}
	public QuestVo setSource(String source) {
		this.source = source;
		return this;
	}
	public String getUseyn() {
		return useyn;
	}
	public QuestVo setUseyn(String useyn) {
		this.useyn = useyn;
		return this;
	}
	public String getWriter() {
		return writer;
	}
	public QuestVo setWriter(String writer) {
		this.writer = writer;
		return this;
	}
	public String getDate() {
		return date;
	}
	public QuestVo setDate(String date) {
		this.date = date;
		return this;
	}
	public int getCcode() {
		return ccode;
	}
	public QuestVo setCcode(int ccode) {
		this.ccode = ccode;
		return this;
	}

	
	
}
