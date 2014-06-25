package qbank.controls.ajax;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import qbank.vo.AjaxResult;

@Controller
@RequestMapping("/upload")
public class UploadControl {
	static Logger log = Logger.getLogger(UploadControl.class);

	/*@Autowired
	UploadService uploadService;
*/
	public UploadControl() {
		log.debug("UploadControl 생성됨");
	}

	@RequestMapping(value="/upload", method=RequestMethod.POST)
	public AjaxResult insert() {
		//uploadService.add(vo);
		return new AjaxResult().setStatus("ok");
	}


}














