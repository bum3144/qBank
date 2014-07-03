package qbank.dao;

import java.util.Map;

import qbank.vo.UserVo;

public interface FindDao {
	 UserVo getUserId(Map<String,String> params);
	 UserVo getUserPass(Map<String,String> params);
}

