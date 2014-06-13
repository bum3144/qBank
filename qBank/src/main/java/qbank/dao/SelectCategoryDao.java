package qbank.dao;

import java.util.List;
import java.util.Map;

import qbank.vo.CategoryVo;


public interface SelectCategoryDao {
	List<CategoryVo> list1st(Map<String, String> params) throws Throwable;
	List<CategoryVo> list2nd(Map<String, String> params) throws Throwable;
	List<CategoryVo> list3rd(Map<String, String> params) throws Throwable;
	List<CategoryVo> cclick(Map<String, String> params) throws Throwable;

}









