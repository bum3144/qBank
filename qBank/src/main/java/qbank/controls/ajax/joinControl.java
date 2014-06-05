package qbank.controls.ajax;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import qbank.services.JoinService;
import qbank.vo.AjaxResult;
import qbank.vo.JoinVo;

@Controller
@RequestMapping("/join")
public class joinControl {
	static Logger log = Logger.getLogger(joinControl.class);

	@Autowired
	JoinService joinService;

	public joinControl() {
		log.debug("joinControl 생성됨");
	}

	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public AjaxResult insert(JoinVo vo) {
		joinService.add(vo);
		return new AjaxResult().setStatus("ok");
	}

	
}














