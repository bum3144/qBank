package qbank.services;

import java.util.HashMap;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.controls.ajax.AuthControl;
import qbank.dao.UserDao;
import qbank.vo.UserVo;

@Service
public class AuthServiceImpl implements AuthService {
	static Logger log = Logger.getLogger(AuthControl.class);
	
	@Autowired
	UserDao userDao;
	
	@Override
	public UserVo getLoginUser(String uid, String upass) {
		
		try {
				HashMap<String,String> params = new HashMap<String,String>();
				params.put("uid", uid);
				params.put("upass", upass);
				return userDao.getLoginUser(params);
			
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}

}
