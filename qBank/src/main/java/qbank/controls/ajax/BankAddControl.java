package qbank.controls.ajax;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import qbank.services.BankAddService;
import qbank.vo.AjaxResult;
import qbank.vo.BankAddVo;

@Controller
@RequestMapping("/bankadd")
public class BankAddControl {
	static Logger log = Logger.getLogger(BankAddControl.class);

	@Autowired
	BankAddService bankAddService;

	public BankAddControl() {
		log.debug("BankAddControl 생성됨");
	}

/*	@RequestMapping("/list")
	public AjaxResult list(
			@RequestParam(value="pageNo",defaultValue="1") int pageNo, 
			@RequestParam(value="pageSize",defaultValue="10") int pageSize) {
		
	 HashMap<String,Object> params = new HashMap<String,Object>();
      params.put("list",bankAddService.list(pageNo, pageSize));
      params.put("count",bankAddService.listCount());
		
		return new AjaxResult()
			.setStatus("ok")
			.setData(params);
	}*/

/*	@RequestMapping("/detail")
	public AjaxResult detail(String code, Model model) {
		BankTestVo s = bankAddService.detail(code);
		if (s != null) {
			return new AjaxResult()
				.setStatus("ok")
				.setData(s);
		} else {
			return new AjaxResult().setStatus("failure");
		}
	}*/

	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public AjaxResult insert(BankAddVo vo) {
		bankAddService.add(vo);
		return new AjaxResult().setStatus("ok");
	}

/*	@RequestMapping(value="/update", method=RequestMethod.POST)
	public AjaxResult update(BankTestVo vo, Model model) {
		bankAddService.change(vo);
		return  new AjaxResult().setStatus("ok");
	}

	@RequestMapping(value="/delete", method=RequestMethod.GET)
	public AjaxResult delete(String code) {
		bankAddService.remove(code);
		return new AjaxResult().setStatus("ok");
	}*/
}














