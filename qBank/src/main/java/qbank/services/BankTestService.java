package qbank.services;

import java.util.List;

import qbank.vo.BankTestVo;

public interface BankTestService {
	void add(BankTestVo test);
	List<BankTestVo> list(int pageNo, int pageSize);
	BankTestVo detail(String code);
	void change(BankTestVo test);
	void remove(String code);
	int listCount();
}
