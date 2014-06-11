package qbank.controls.ajax;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import qbank.services.QuestService;
import qbank.vo.AjaxResult;
import qbank.vo.QuestVo;

@Controller
@RequestMapping("/quest")
public class QuestControl {
	static Logger log = Logger.getLogger(QuestControl.class);

	@Autowired
	QuestService questService;

	public QuestControl() {
		log.debug("QuestControl 생성됨");
	}

	
	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public AjaxResult insert(QuestVo vo) {
		questService.add(vo);
		return new AjaxResult().setStatus("ok");
	}

	
}














