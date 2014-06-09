package qbank.controls.ajax;

import javax.servlet.http.HttpServletResponse;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import qbank.services.JoinChkService;
import qbank.vo.AjaxResult;
import qbank.vo.JoinChkVo;

@Controller
@RequestMapping("/joinChk")
public class JoinChkControl {
	static Logger log = Logger.getLogger(JoinChkControl.class);
	
	@Autowired
	JoinChkService joinChkService;
	
	@RequestMapping("/chkId")
	public AjaxResult checkId(String uid,HttpServletResponse response,Model model) {
		
		try {
				JoinChkVo joinChkVo = joinChkService.getJoinUser(uid);
				AjaxResult result = null;
				if (joinChkVo == null) {
					result =  new AjaxResult().setStatus("failure");
					
				} else {
					result = new AjaxResult().setStatus("ok").setData(joinChkVo.getUid());
					model.addAttribute("joinUser", joinChkVo.getUid());
				}
				
				response.setContentType("text/html;charset=UTF-8");
				
				return result;
				
		} catch (Throwable ex) {
			return new AjaxResult()
					.setStatus("error")
					.setData(ex.getMessage());
		}
	}
	
	@RequestMapping("/chkEmail")
	public AjaxResult checkEmail(String uemail,HttpServletResponse response,Model model) {
		
		try {
				JoinChkVo joinChkVo = joinChkService.getJoinEmail(uemail);
				AjaxResult result = null;
				if (joinChkVo == null) {
					result =  new AjaxResult().setStatus("failure");
					
				} else {
					result = new AjaxResult().setStatus("ok").setData(joinChkVo.getUemail());
					model.addAttribute("joinEmail", joinChkVo.getUemail());
				}
				
				response.setContentType("text/html;charset=UTF-8");
				
				return result;
				
		} catch (Throwable ex) {
			return new AjaxResult()
					.setStatus("error")
					.setData(ex.getMessage());
		}
	}

}



























