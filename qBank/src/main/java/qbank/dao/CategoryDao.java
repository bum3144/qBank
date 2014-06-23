package qbank.dao;

import java.util.List;
import java.util.Map;

import qbank.vo.BankTestVo;
import qbank.vo.CategoryVo;


public interface CategoryDao {
	List<CategoryVo> list(Map<String, Integer> params) throws Throwable;
	void insert(CategoryVo cateData) throws Throwable;
	String maxParent(CategoryVo vo) throws Throwable;
	String maxSeq(CategoryVo vo) throws Throwable;
	String maxDepth(CategoryVo vo) throws Throwable;
	 void delete(String cname) throws Throwable;
	 void update(CategoryVo vo) throws Throwable;

}









