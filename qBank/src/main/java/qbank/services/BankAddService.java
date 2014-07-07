package qbank.services;

import qbank.vo.BankAddDiscriptiveVo;
import qbank.vo.BankAddFileVo;
import qbank.vo.BankAddObjectiveVo;
import qbank.vo.BankAddVo;

public interface BankAddService {
	void add(BankAddVo vo);
	void addObj(BankAddObjectiveVo ovo);
	void addDis(BankAddDiscriptiveVo dvo);
	void addFile(BankAddFileVo fvo);
}
