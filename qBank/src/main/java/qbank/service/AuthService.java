package qbank.service;

import qbank.vo.UserVo;

public interface AuthService {
	UserVo getLoginUser(String email, String password);
}
