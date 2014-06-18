package qbank.vo;

public class CategoryVo {
	private int 				code;	
	private String 				name;		
	private String				url;
	private String 				parent;  
	private String 	 			seq;
	private String 	 			depth;
	private String 	 			useyn;
	private String 	 			classCode;
	
	public int getCode() {
		return code;
	}
	public CategoryVo setCode(int code) {
		this.code = code;
		return this;
	}
	public String getName() {
		return name;
	}
	public CategoryVo setName(String name) {
		this.name = name;
		return this;
	}
	public String getUrl() {
		return url;
	}
	public CategoryVo setUrl(String url) {
		this.url = url;
		return this;
	}
	public String getParent() {
		return parent;
	}
	public CategoryVo setParent(String parent) {
		this.parent = parent;
		return this;
	}
	public String getSeq() {
		return seq;
	}
	public CategoryVo setSeq(String seq) {
		this.seq = seq;
		return this;
	}
	public String getDepth() {
		return depth;
	}
	public CategoryVo setDepth(String depth) {
		this.depth = depth;
		return this;
	}
	public String getUseyn() {
		return useyn;
	}
	public CategoryVo setUseyn(String useyn) {
		this.useyn = useyn;
		return this;
	}
	public String getClassCode() {
		return classCode;
	}
	public CategoryVo setClassCode(String classCode) {
		this.classCode = classCode;
		return this;
	}
	@Override
	public String toString() {
		return "CategoryVo [code=" + code + ", name=" + name + ", url=" + url
				+ ", parent=" + parent + ", seq=" + seq + ", depth=" + depth
				+ ", useyn=" + useyn + ", classCode="
				+ classCode + "]";
	}





	

}
