package qbank.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.dao.BankAddDao;
import qbank.vo.BankAddDiscriptiveVo;
import qbank.vo.BankAddFileVo;
import qbank.vo.BankAddObjectiveVo;
import qbank.vo.BankAddVo;

@Service
public class BankAddServiceImpl implements BankAddService {
	@Autowired
	BankAddDao bankAddDao;	
	
	@Override
	public void add(BankAddVo vo) {
		try {
			bankAddDao.insert(vo);		
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}

	@Override
	public void addObj(BankAddObjectiveVo ovo) {
		try {
			bankAddDao.insert2(ovo);		
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}
	
	@Override
	public void addDis(BankAddDiscriptiveVo dvo) {
		try {
			bankAddDao.insert3(dvo);		
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}	
	}
	
	@Override
	public void addFile(BankAddFileVo fvo) {
		try {
			bankAddDao.insert4(fvo);		
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}
}







