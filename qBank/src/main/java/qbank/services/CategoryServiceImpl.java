package qbank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.dao.CategoryDao;
import qbank.vo.BankTestVo;
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

	  @Override
	  public void add(CategoryVo cateData) {
			try {
				categoryDao.insert(cateData);
			} catch (Throwable ex) {
				throw new RuntimeException(ex);
			}
	  }

	@Override
	public String maxParent(CategoryVo vo) {
		try {			
			return categoryDao.maxParent(vo);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}

	@Override
	public String maxSeq(CategoryVo vo) {
		try {			
			return categoryDao.maxSeq(vo);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}

	@Override
	public String maxDepth(CategoryVo vo) {
		try {			
			return categoryDao.maxDepth(vo);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}
	
	@Override
	  public void remove(String cname) {
			try {
				categoryDao.delete(cname);
			} catch (Throwable ex) {
				throw new RuntimeException(ex);
			}
	  }

	

	@Override
  public void change(CategoryVo vo) {
		try {
			categoryDao.update(vo);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
		
	
}







