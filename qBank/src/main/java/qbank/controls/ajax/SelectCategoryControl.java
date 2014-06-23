package qbank.controls.ajax;

import java.util.HashMap;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import qbank.services.SelectCategoryService;
import qbank.vo.AjaxResult;

@Controller
@RequestMapping("/selectcate")
public class SelectCategoryControl {
	static Logger log = Logger.getLogger(SelectCategoryControl.class);

	@Autowired
	SelectCategoryService selectcategoryService;

	public SelectCategoryControl() {
		log.debug("SelectCategoryControl 생성됨");
	}

	@RequestMapping("/frist")
	public AjaxResult list1st() {
		HashMap<String,Object> params = new HashMap<String,Object>();
		params.put("frist",selectcategoryService.list1st());
			return new AjaxResult().setStatus("ok").setData(params);
	}

	@RequestMapping("/second")	
	public AjaxResult list2nd(	@RequestParam(value="parent") String parent){
		HashMap<String,Object> params = new HashMap<String,Object>();
		params.put("second",selectcategoryService.list2nd(parent));
			
		return new AjaxResult().setStatus("ok").setData(params);
	}

	@RequestMapping("/third")
	public AjaxResult list3rd(
			@RequestParam(value="parent") String parent,
			@RequestParam(value="seq") String seq){
		HashMap<String,Object> params = new HashMap<String,Object>();
		params.put("third",selectcategoryService.list3rd(parent,seq));
			return new AjaxResult().setStatus("ok").setData(params);
	}

	@RequestMapping("/categoryClick")
	public AjaxResult sclick(
			@RequestParam(value="cname") String name){
		HashMap<String,Object> params = new HashMap<String,Object>();
		log.debug("1### - cname ----> " + name);
		params.put("list",selectcategoryService.click(name));
		log.debug("2### - params ----> " + params);
			return new AjaxResult().setStatus("ok").setData(params);
	}

}














