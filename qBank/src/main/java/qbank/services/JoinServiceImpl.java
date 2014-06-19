package qbank.services;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import qbank.controls.ajax.QuestControl;
import qbank.dao.JoinDao;
import qbank.vo.BankTestVo;
import qbank.vo.UserVo;

@Service
public class JoinServiceImpl implements JoinService {
	@Autowired
	JoinDao joinDao;	
	static Logger log = Logger.getLogger(QuestControl.class);

  @Transactional(propagation=Propagation.REQUIRED, rollbackFor=Throwable.class)
  @Override
  public void add(UserVo join) {
  	
		try {
			joinDao.insert(join);		// 시험지 세팅등록 테이블
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
  
  @Override
  public UserVo detail(UserVo myId) {
		try {
			return joinDao.detail(myId);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

  @Override
  public void change(UserVo vo) {
		
		try {
			joinDao.update(vo);
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }
}









