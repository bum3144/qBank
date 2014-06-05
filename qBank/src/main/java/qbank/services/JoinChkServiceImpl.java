package qbank.services;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.dao.JoinCheckDao;
import qbank.vo.JoinChkVo;
import qbank.vo.UserVo;

@Service
public class JoinChkServiceImpl implements JoinChkService {
	@Autowired
	JoinCheckDao joinCheckDao;

	@Override
	public JoinChkVo getJoinUser(String uid) {
		try {
			HashMap<String,String> params = new HashMap<String,String>();
			params.put("uid", uid);
			
			return joinCheckDao.getJoinUser(params);
	} catch (Throwable ex) {
		throw new RuntimeException(ex);
	}
	}
	
	

}
