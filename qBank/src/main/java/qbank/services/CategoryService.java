package qbank.services;

import java.util.List;

import qbank.vo.CategoryVo;


public interface CategoryService {
	List<CategoryVo> list();
	void add(CategoryVo cateData);
	String maxParent(CategoryVo vo);
	String maxSeq(CategoryVo vo);
	String maxDepth(CategoryVo vo);
	void remove(String cname);
	
/*	void add(BankTestVo test);
	BankTestVo detail(String code);
	void change(BankTestVo test);*/
}
