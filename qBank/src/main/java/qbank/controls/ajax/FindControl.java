package qbank.controls.ajax;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.mail.MailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import qbank.services.FindService;
import qbank.vo.AjaxResult;
import qbank.vo.UserVo;
import util.MailMail;

@Controller
@RequestMapping("/find")
public class FindControl {
	static Logger log = Logger.getLogger(FindControl.class);
	
	@Autowired
	FindService findService;
	/* 리턴 타입은 JSON으로 출력할 객체이다.
	 * - 자동으로 JSON 문자열로 변환하려면, 빈 설정파일에
	 *   JSON 변환 해결사를 등록해야 한다.
	 */
	
	@RequestMapping("/findId")
	public AjaxResult checkId(String email,HttpServletResponse response,Model model) {
		
		ApplicationContext context = 
        new ClassPathXmlApplicationContext("beans.xml");
  		
		try {
				UserVo findVo = findService.getUserId(email);
				AjaxResult result = null;
				if (findVo == null) {
					result =  new AjaxResult().setStatus("failure");
				} else{
					result = new AjaxResult().setStatus("ok").setData(findVo);
					
					if(findVo.getUemail().equals(email)){
						
					MailMail mm = (MailMail) context.getBean("mailMail");
		      mm.sendMail("ura0508@gmail.com",
		      		findVo.getUemail(),
		  		   "QBank 아이디찾기 메일발송", 
		  		   findVo.getUname() + "님의 아이디는" + findVo.getUid() + "입니다.");
					}
				    	model.addAttribute("findId", findVo);
				}
				
				response.setContentType("text/html;charset=UTF-8");
				
				return result;
				
		} catch (Throwable ex) {
			return new AjaxResult()
					.setStatus("error")
					.setData(ex.getMessage());
		}
		
	}
	
	
	@RequestMapping("/findPass")
	public AjaxResult checkPass(String id, String email,HttpServletResponse response,Model model) {
		
		ApplicationContext context = 
        new ClassPathXmlApplicationContext("beans.xml");
  		
		try {
				UserVo findVo = findService.getUserPass(id,email);
				log.debug(id + "-===========-" + email);
				AjaxResult result = null;
				if (findVo == null) {
					result =  new AjaxResult().setStatus("failure");
				} else{
					result = new AjaxResult().setStatus("ok").setData(findVo);
					
					if(findVo.getUemail().equals(email) && findVo.getUid().equals(id)){
						
					MailMail mm = (MailMail) context.getBean("mailMail");
		      mm.sendMail("ura0508@gmail.com",
		      		findVo.getUemail(),
		  		   "QBank 비밀번호찾기 메일발송", 
		  		   findVo.getUname() + "님의 비밀번호는" + findVo.getUpass() + "입니다.");
					}
				    	model.addAttribute("findId", findVo);
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



























