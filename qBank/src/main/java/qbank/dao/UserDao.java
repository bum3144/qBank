package qbank.dao;

import java.util.Map;

import qbank.vo.UserVo;

public interface UserDao {
	 UserVo getLoginUser(Map<String,String> params);
	 
}

