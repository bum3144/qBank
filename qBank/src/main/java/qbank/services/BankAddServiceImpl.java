package qbank.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import qbank.dao.BankAddDao;
import qbank.vo.BankAddVo;

@Service
public class BankAddServiceImpl implements BankAddService {
	@Autowired
	BankAddDao bankAddDao;	
	
  @Transactional(propagation=Propagation.REQUIRED, rollbackFor=Throwable.class)
  @Override
  public void add(BankAddVo test) {
		try {
			bankAddDao.insert(test);		// 시험지 세팅등록 테이블
		//	bankAddDao.insertTest(test);	// 시험지 문제등록 테이블
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
/*
	@Override
  public List<BankAddVo> list(int pageNo, int pageSize) {
		try {
			HashMap<String,Integer> params = new HashMap<String,Integer>();
			params.put("startIndex", (pageNo - 1) * pageSize);
			params.put("pageSize", pageSize);
			
			return bankAddDao.list(params);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
	
	@Override
	  public int listCount() {
			try {
				
				return bankAddDao.count();
			} catch (Throwable ex) {
				throw new RuntimeException(ex);
			}
	  }
	

	@Override
  public BankAddVo detail(String code) {
		try {
			return bankAddDao.detail(code);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

	@Override
  public void change(BankAddVo test) {
		try {
			bankAddDao.update(test);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
	
	 @Transactional 애노테이션을 처리하려면, 
	 * 스프링에 트랜잭션 처리자를 등록해야 한다.
	 * <tx:annotation-driven/>
	 
	@Transactional(
			propagation=Propagation.REQUIRED, 
			rollbackFor=Throwable.class)
	@Override
  public void remove(String code) {
		try {
			bankAddDao.delete(code);
			
			bankAddDao.delete2(code);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
*/
}







