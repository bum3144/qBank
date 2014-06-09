package qbank.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import qbank.dao.JoinDao;
import qbank.vo.JoinVo;

@Service
public class JoinServiceImpl implements JoinService {
	@Autowired
	JoinDao joinDao;	

  @Transactional(propagation=Propagation.REQUIRED, rollbackFor=Throwable.class)
  @Override
  public void add(JoinVo join) {
		try {
			joinDao.insert(join);		// 시험지 세팅등록 테이블
			
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
}









