package qbank.services;
import qbank.vo.UserVo;

public interface FindService {
	UserVo getUserId(String email);
	UserVo getUserPass(String id ,String email);
}
