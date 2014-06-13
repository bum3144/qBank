package qbank.services;

import java.util.List;

import qbank.vo.CategoryVo;


public interface SelectCategoryService {
	List<CategoryVo> list1st();
	List<CategoryVo> list2nd(String parent);
	List<CategoryVo> list3rd(String parent, String seq);
	List<CategoryVo> cclick(String parent, String seq, String depth);
	
	
/*	void add(BankTestVo test);
	BankTestVo detail(String code);
	void change(BankTestVo test);
	void remove(String code);*/
}
