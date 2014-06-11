package qbank.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import qbank.dao.QuestDao;
import qbank.vo.QuestVo;

@Service
public class QuestServiceImpl implements QuestService {
	@Autowired
	QuestDao questDao;	
	
  @Transactional(propagation=Propagation.REQUIRED, rollbackFor=Throwable.class)
  @Override
  public void add(QuestVo test) {
		try {
			questDao.insert(test);		// 시험지 세팅등록 테이블
			questDao.insertTest(test);	// 시험지 문제등록 테이블
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
  }

	

}







