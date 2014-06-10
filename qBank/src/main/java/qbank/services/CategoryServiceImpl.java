package qbank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.dao.CategoryDao;
import qbank.vo.CategoryVo;

@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	CategoryDao categoryDao;	
	

	@Override
  public List<CategoryVo> list() {
		try {			
		
			return categoryDao.list(null);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }



}







