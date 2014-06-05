package qbank.dao;

import java.util.Map;

import qbank.vo.JoinChkVo;

public interface JoinCheckDao {
	JoinChkVo getJoinUser(Map<String,String> params);
}
