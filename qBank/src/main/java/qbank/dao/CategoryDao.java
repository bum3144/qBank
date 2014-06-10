package qbank.dao;

import java.util.List;
import java.util.Map;

import qbank.vo.CategoryVo;


public interface CategoryDao {
	List<CategoryVo> list(Map<String, Integer> params) throws Throwable;

}









