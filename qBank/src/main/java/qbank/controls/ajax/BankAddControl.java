package qbank.controls.ajax;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import qbank.services.BankAddService;
import qbank.vo.AjaxResult;

@Controller
@RequestMapping("/bankadd")
public class BankAddControl {
	static long fileCount;
	static Logger log = Logger.getLogger(BankAddControl.class);

	@Autowired
	BankAddService bankAddService;
	@Autowired
	ServletContext servletContext;
	
	public BankAddControl() {
		log.debug("BankAddControl 생성됨");
	}

	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public AjaxResult insert(
			MultipartHttpServletRequest req
		//	,@RequestParam(value="imageDisplay") MultipartFile img
			) {

//			String filename = img.getOriginalFilename();
//			log.debug("###### filename ####### :" + filename);
			
			MultipartFile report = req.getFile("imageDisplay");
			String fname = report.getOriginalFilename();
			log.debug("###### fname ####### :" + fname);
			
//			bankAddService.add(vo);
		return new AjaxResult().setStatus("ok");
	}	
	
	
	
	
	
	
	
	
	
/*	
	
	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public AjaxResult insert(
			MultipartHttpServletRequest req,
			@RequestParam(value="imageDisplay") MultipartFile img, 
			@RequestPart(value="mediaDisplay") MultipartFile media, 
			BankAddVo vo, BankAddDiscriptiveVo dvo,
			BankAddObjectiveVo ovo,BankAddFileVo fvo) {

			String filename = img.getOriginalFilename();
			log.debug("###### filename ####### :" + filename);
			
			MultipartFile report = req.getFile("imageDisplay");
			String fname = report.getOriginalFilename();
			log.debug("###### fname ####### :" + fname);
			
		//	MultipartFile report = img.getFile("imageDisplay");
			
				
			String fullPath = servletContext.getRealPath("/upload");
			if (!imageDisplay.isEmpty()) {
				String filename = 
						System.currentTimeMillis() + "_" + ++fileCount;
				File savedFile = new File(fullPath + "/" + filename);
				
				log.debug("###### savedFile ####### :" + savedFile);
				
//				imageDisplay.transferTo(savedFile); 
				
				fvo.setFpath(fullPath + "/" + filename);
			}

			
		log.debug("###### BankAddVo ####### :" + vo.toString());
		log.debug("###### BankAddDiscriptiveVo ####### :" + dvo.toString());
		log.debug("###### BankAddObjectiveVo ####### :" + ovo.toString());
		log.debug("###### BankAddFileVo ####### :" + fvo.toString());
		

		
		//	bankAddService.add(vo);
		return new AjaxResult().setStatus("ok");
	}
	
	
	*/
}














