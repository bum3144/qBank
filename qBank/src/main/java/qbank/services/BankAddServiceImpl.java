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
  public void add(BankAddVo vo) {
		try {
			bankAddDao.insert(vo);		
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
}







