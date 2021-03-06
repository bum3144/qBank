package qbank.services;

import java.util.List;

import qbank.vo.BankAddDiscriptiveVo;
import qbank.vo.BankAddFileVo;
import qbank.vo.BankAddObjectiveVo;
import qbank.vo.BankAddVo;

public interface BankAddService {
	List<BankAddVo> list(int pageNo, int pageSize);
	int listCount();
	void add(BankAddVo vo);
	void addObj(BankAddObjectiveVo ovo);
	void addDis(BankAddDiscriptiveVo dvo);
	void addFile(BankAddFileVo fvo);
}
