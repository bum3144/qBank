package qbank.dao;

import java.util.List;
import java.util.Map;

import qbank.vo.BankTestVo;

public interface BankTestDao {
	 void insert(BankTestVo test) throws Throwable;
	 void insertTest(BankTestVo test) throws Throwable;
	 List<BankTestVo> list(Map<String, Integer> params) throws Throwable;
	 BankTestVo detail(int no) throws Throwable;
	 void update(BankTestVo test) throws Throwable;
	 void delete(int no) throws Throwable;
	 void delete2(int no) throws Throwable;
}









