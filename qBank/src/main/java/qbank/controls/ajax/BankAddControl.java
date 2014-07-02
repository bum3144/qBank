package qbank.controls.ajax;

import java.io.File;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import qbank.services.BankAddService;
import qbank.vo.BankAddDiscriptiveVo;
import qbank.vo.BankAddFileVo;
import qbank.vo.BankAddObjectiveVo;
import qbank.vo.BankAddVo;

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
	public String insert(MultipartHttpServletRequest req,
							BankAddVo vo, BankAddDiscriptiveVo dvo,
							BankAddObjectiveVo ovo,BankAddFileVo fvo) {

		
//		bankAddService.add(vo);

		log.debug("# BankAddVo # :" + vo.toString() + 
				"# BankAddDiscriptiveVo # :" + dvo.toString() + 
				"# BankAddObjectiveVo # :" + ovo.toString() + 
				"# BankAddFileVo # :" + fvo.toString());

//			bankAddService.add(vo);
		
		if(vo.getTypeSelector().equals("objective")) {
//			bankAddService.add(vo);	
		}else {
//			bankAddService.add(vo);	
		}
		if(fvo.isImageCheck() || fvo.isMediaCheck()) {
			if(fvo.isImageCheck()) { // 이미지(jpg,gif,png) 파일 처리
				MultipartFile report = req.getFile("imageDisplay");
				String fname = report.getOriginalFilename();
				if (!report.isEmpty()) {
					fileSave(fvo, report, fname);	
				}
			}
			if(fvo.isMediaCheck()) { // Mp3 파일 처리
				MultipartFile report2 = req.getFile("mediaDisplay");
				String fname2 = report2.getOriginalFilename();
				if (!report2.isEmpty()) {
					fileSave(fvo, report2, fname2);
				}
			}
//		bankAddService.add(vo);			
		}
				
		
		
		
		return "redirect:/bank/bankAdd.html";
	}

	
	
	
	private void fileSave(BankAddFileVo fvo, MultipartFile report, String fname)
			throws Error {
		String fullPath = servletContext.getRealPath("/upload");
		log.debug("###### fullPath ####### :" + fullPath);
		// 화일 확장자 구하기
		int pos = fname.lastIndexOf( "." );
		String ext = fname.substring( pos + 1 );
		try {
				String filename = 
						System.currentTimeMillis() + "_" + ++fileCount;
				File savedFile = new File(fullPath + "/" + filename + '.' + ext);
				log.debug("###### savedFile ####### :" + savedFile);
				report.transferTo(savedFile); 
				fvo.setFpath(fullPath + "/" + filename);
		} catch (Throwable ex) {
			throw new Error(ex);
		}
	}	
	
	
	
	
}














