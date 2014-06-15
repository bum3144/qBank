package qbank.services;

import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.controls.ajax.SelectCategoryControl;
import qbank.dao.SelectCategoryDao;
import qbank.vo.CategoryVo;

@Service
public class SelectCategoryServiceImpl implements SelectCategoryService {
	@Autowired
	SelectCategoryDao selectcategoryDao;	
	static Logger log = Logger.getLogger(SelectCategoryControl.class);

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
  public List<CategoryVo> click(String name) {
		try {		
			HashMap<String,String> params = new HashMap<String,String>();
			log.debug("3 - cname ----> " + name);
			params.put("cname", name);
			log.debug("4 - name ----> " + params);
			return selectcategoryDao.click(params);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }



}







