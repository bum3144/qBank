package qbank.dao;

import qbank.vo.UserVo;

public interface JoinDao {
	 void insert(UserVo join) throws Throwable;
	 UserVo detail(UserVo myId) throws Throwable;
	 void update(UserVo vo) throws Throwable;
}









