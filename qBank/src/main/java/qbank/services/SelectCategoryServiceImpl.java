package qbank.services;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.dao.SelectCategoryDao;
import qbank.vo.CategoryVo;

@Service
public class SelectCategoryServiceImpl implements SelectCategoryService {
	@Autowired
	SelectCategoryDao selectcategoryDao;	
	

	@Override
  public List<CategoryVo> list1st() {
		try {			
			return selectcategoryDao.list1st(null);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

	@Override
  public List<CategoryVo> list2nd(String parent) {
		try {		
			HashMap<String,String> params = new HashMap<String,String>();
			params.put("parent", parent);
			return selectcategoryDao.list2nd(params);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

	@Override
  public List<CategoryVo> list3rd(String parent, String seq) {
		try {		
			HashMap<String,String> params = new HashMap<String,String>();
			params.put("parent", parent);
			params.put("seq", seq);			
			return selectcategoryDao.list3rd(params);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }


	@Override
  public List<CategoryVo> cclick(String parent, String seq, String depth) {
		try {		
			HashMap<String,String> params = new HashMap<String,String>();
			params.put("parent", parent);
			params.put("seq", seq);		
			params.put("depth", depth);			
			return selectcategoryDao.cclick(params);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }



}







