package qbank.services;

import qbank.vo.UserVo;
import qbank.services.UserGroup;

public interface AuthService {
	UserVo getLoginUser(String uid, String password, UserGroup group);
}
