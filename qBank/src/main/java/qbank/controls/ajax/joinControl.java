package qbank.controls.ajax;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import qbank.services.JoinService;
import qbank.vo.AjaxResult;
import qbank.vo.BankTestVo;
import qbank.vo.UserVo;

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
	public AjaxResult insert(UserVo vo) {
		
		joinService.add(vo);
		return new AjaxResult().setStatus("ok");
	}
	
	@RequestMapping("/detail")
	public AjaxResult detail(HttpSession session) {
		UserVo myId = (UserVo) session.getAttribute("loginUser");
		UserVo s = joinService.detail(myId);
		if (s != null) {
			return new AjaxResult()
				.setStatus("ok")
				.setData(s);
		} else {
			return new AjaxResult().setStatus("failure");
		}
	}
	
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public AjaxResult update(UserVo vo) {

		joinService.change(vo);
		return  new AjaxResult().setStatus("ok");
	}
	

	
}














