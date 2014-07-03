package qbank.services;

import java.util.HashMap;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qbank.controls.ajax.AuthControl;
import qbank.dao.FindDao;
import qbank.vo.UserVo;

@Service
public class FindServiceImpl implements FindService {
	static Logger log = Logger.getLogger(AuthControl.class);
	
	@Autowired
	FindDao findDao;
	
	@Override
	public UserVo getUserId(String email) {
		
		try {
				HashMap<String,String> params = new HashMap<String,String>();
				params.put("email", email);
				return findDao.getUserId(params);
			
		} catch (Throwable ex) {
			throw new RuntimeException(ex);
		}
	}

	@Override
  public UserVo getUserPass(String id, String email) {
	   
		try{
			HashMap<String,String> params = new HashMap<String,String>();
			params.put("id" , id);
			params.put("email", email);
			
			return findDao.getUserPass(params);
		}catch(Throwable ex){
			throw new RuntimeException(ex);
		}
  }

}
