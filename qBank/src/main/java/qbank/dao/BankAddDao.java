package qbank.dao;

import qbank.vo.BankAddDiscriptiveVo;
import qbank.vo.BankAddFileVo;
import qbank.vo.BankAddObjectiveVo;
import qbank.vo.BankAddVo;

public interface BankAddDao {
	 void insert(BankAddVo vo) throws Throwable;
	 void insert2(BankAddObjectiveVo ovo) throws Throwable;
	 void insert3(BankAddDiscriptiveVo dvo) throws Throwable;
	 void insert4(BankAddFileVo fvo) throws Throwable;
}









