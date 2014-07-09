package qbank.dao;

import java.util.List;
import java.util.Map;

import qbank.vo.BankAddDiscriptiveVo;
import qbank.vo.BankAddFileVo;
import qbank.vo.BankAddObjectiveVo;
import qbank.vo.BankAddVo;

public interface BankAddDao {
	 List<BankAddVo> list(Map<String, Integer> params) throws Throwable;
	 Integer count() throws Throwable;
	 void insert(BankAddVo vo) throws Throwable;
	 void insert2(BankAddObjectiveVo ovo) throws Throwable;
	 void insert3(BankAddDiscriptiveVo dvo) throws Throwable;
	 void insert4(BankAddFileVo fvo) throws Throwable;
}









