package qbank.controls.ajax;

import java.io.File;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import qbank.services.BankAddService;
import qbank.vo.BankAddDiscriptiveVo;
import qbank.vo.BankAddFileVo;
import qbank.vo.BankAddObjectiveVo;
import qbank.vo.BankAddVo;
import qbank.vo.UserVo;

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
	
	@Transactional(propagation=Propagation.REQUIRED,rollbackFor=Throwable.class)
	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public String insert(MultipartHttpServletRequest req, BankAddVo vo, 
					BankAddDiscriptiveVo dvo, BankAddObjectiveVo ovo,
					BankAddFileVo fvo,HttpSession session) throws DataAccessException {

		UserVo loginUser = (UserVo) session.getAttribute("loginUser");
		vo.setQwriter(loginUser.getUid());	// 작성자를 저장하기 위한 세션아이디

		//log.debug("# BankAddVo # :" + vo.toString() + "# BankAddDiscriptiveVo # :" + dvo.toString() + "# BankAddObjectiveVo # :" + ovo.toString());
//		bankAddService.add(vo);	
		
//		log.debug("    #@@@@ vo.getQno # :" +vo.getQno()); 
		
//		dvo.setQno(vo.getQno());
//		ovo.setQno(vo.getQno());
//		fvo.setQno(vo.getQno());
		
		ovo.setQno(30);
		log.debug("    #@@@@ dvo.getQno # :" + dvo.getQno() + "    #@@@@ ovo.getQno # :" + ovo.getQno() + "    #@@@@ fvo.getQno # :" + fvo.getQno());
	
		if(vo.getTypeSelector().equals("objective")) {
			
			for(int i=0; i<=ovo.getExText().length; i++){
				if(ovo.getExText()[i].isEmpty()) {		}
			}
/*			
			log.debug("    #@@@@ getExText().length # :" + ovo.getExText().length);
			log.debug("    #@@@@ ovo.getQno 1# :" + ovo.getExText()[0]);
			log.debug("    #@@@@ ovo.getQno 2# :" + ovo.getExText()[1]);
			log.debug("    #@@@@ ovo.getQno 3# :" + ovo.getExText()[2]);
			log.debug("    #@@@@ ovo.getQno 4# :" + ovo.getExText()[3]);
			log.debug("    #@@@@ ovo.getQno 5# :" + ovo.getExText()[4]);
*/		
			bankAddService.addObj(ovo);	
		}else {
//			bankAddService.addDis(dvo);	
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
				File savedFile = new File(fullPath + "/" + filename + "." +ext);
				report.transferTo(savedFile); 
				fvo.setFpath(fullPath + "/" + filename + "." + ext);
				fvo.setFtype(ext);
				log.debug("# savedFile # :" + savedFile);
				
//				bankAddService.addFile(fvo);	
		} catch (Throwable ex) {
			throw new Error(ex);
		}
	}	
	
	
	
	
}














