package qbank.dao;

import java.util.Map;

import qbank.vo.StudentVo;

public interface StudentDao {
	void insert(StudentVo student);
	StudentVo getLoginUser(Map<String,String> params);
}
