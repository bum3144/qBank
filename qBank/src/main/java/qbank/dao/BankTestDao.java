package qbank.dao;

import java.util.List;
import java.util.Map;

import qbank.vo.BankTestVo;

public interface BankTestDao {
	 void insert(BankTestVo test) throws Throwable;
	 void insertTest(BankTestVo test) throws Throwable;
	 List<BankTestVo> list(Map<String, Integer> params) throws Throwable;
	 BankTestVo detail(String code) throws Throwable;
	 void update(BankTestVo test) throws Throwable;
	 void delete(String code) throws Throwable;
	 void delete2(String code) throws Throwable;
	 Integer count() throws Throwable;
}









