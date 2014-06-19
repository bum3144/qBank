package qbank.services;
import qbank.vo.UserVo;

public interface AuthService {
	UserVo getLoginUser(String uid, String upass);
}
