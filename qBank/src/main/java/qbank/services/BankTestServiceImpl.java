package qbank.services;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import qbank.dao.BankTestDao;
import qbank.vo.BankTestVo;

@Service
public class BankTestServiceImpl implements BankTestService {
	@Autowired
	BankTestDao bankTestDao;
	
	@Override
  public void add(BankTestVo test) {
		try {
			bankTestDao.insert(test);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

	@Override
  public List<BankTestVo> list(int pageNo, int pageSize) {
		try {
			HashMap<String,Integer> params = new HashMap<String,Integer>();
			params.put("startIndex", (pageNo - 1) * pageSize);
			params.put("pageSize", pageSize);
			
			return bankTestDao.list(params);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

	@Override
  public BankTestVo detail(int no) {
		try {
			return bankTestDao.detail(no);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

	@Override
  public void change(BankTestVo test) {
		try {
			bankTestDao.update(test);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
	
	/* @Transactional 애노테이션을 처리하려면, 
	 * 스프링에 트랜잭션 처리자를 등록해야 한다.
	 * <tx:annotation-driven/>
	 */
	@Transactional(
			propagation=Propagation.REQUIRED, 
			rollbackFor=Throwable.class)
	@Override
  public void remove(int no) {
		try {
			bankTestDao.delete(no);
			
			bankTestDao.delete2(no);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

}







