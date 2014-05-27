package qbank.controls.ajax;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import qbank.services.BankTestService;
import qbank.vo.AjaxResult;
import qbank.vo.BankTestVo;

@Controller
@RequestMapping("/bank")
public class BankTestControl {
	static Logger log = Logger.getLogger(BankTestControl.class);

	@Autowired
	BankTestService bankTestService;

	public BankTestControl() {
		log.debug("BankTestControl 생성됨");
	}

	@RequestMapping("/list")
	public AjaxResult list(
			@RequestParam(value="pageNo",defaultValue="1") int pageNo, 
			@RequestParam(value="pageSize",defaultValue="10") int pageSize) {
		
		return new AjaxResult()
			.setStatus("ok")
			.setData(bankTestService.list(pageNo, pageSize));
	}

	@RequestMapping("/detail")
	public AjaxResult detail(int no, Model model) {
		BankTestVo s = bankTestService.detail(no);
		if (s != null) {
			return new AjaxResult()
				.setStatus("ok")
				.setData(s);
		} else {
			return new AjaxResult().setStatus("failure");
		}
	}

	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public AjaxResult insert(BankTestVo vo) {
		bankTestService.add(vo);
		return new AjaxResult().setStatus("ok");
	}

	@RequestMapping(value="/update", method=RequestMethod.POST)
	public AjaxResult update(BankTestVo vo, Model model) {
		bankTestService.change(vo);
		return  new AjaxResult().setStatus("ok");
	}

	@RequestMapping(value="/delete", method=RequestMethod.GET)
	public AjaxResult delete(int no) {
		bankTestService.remove(no);
		return new AjaxResult().setStatus("ok");
	}
}














