package qbank.dao;

import java.util.Map;

import qbank.vo.UserVo;

public interface UserDao {
	UserVo getUser(Map<String,String> params);
	void insert(UserVo user);
}
