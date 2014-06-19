package qbank.services;

import qbank.vo.UserVo;


public interface JoinService {
	void add(UserVo join);
	UserVo detail(UserVo myId);
	void change(UserVo vo);
}
