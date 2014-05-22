package qbank.services;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.dao.StudentDao;
import qbank.vo.UserVo;

@Service
public class AuthServiceImpl implements AuthService {
	@Autowired
	StudentDao studentDao;
	
	@Override
	public UserVo getLoginUser(String uid, String password, UserGroup group) {
		try {
			if (group == UserGroup.STUDENT) {
				HashMap<String,String> params = new HashMap<String,String>();
				params.put("uid", uid);
				params.put("password", password);
				
				return studentDao.getLoginUser(params);
			}
			return null;
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}

}
