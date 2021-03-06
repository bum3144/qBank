package qbank.services;

import java.util.HashMap;
import java.util.List;

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







