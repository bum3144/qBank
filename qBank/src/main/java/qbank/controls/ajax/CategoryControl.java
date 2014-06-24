package qbank.controls.ajax;

import java.util.HashMap;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import qbank.services.CategoryService;
import qbank.vo.AjaxResult;
import qbank.vo.BankTestVo;
import qbank.vo.CategoryVo;

@Controller
@RequestMapping("/category")
public class CategoryControl {
	static Logger log = Logger.getLogger(CategoryControl.class);

	@Autowired
	CategoryService categoryService;

	public CategoryControl() {
		log.debug("CategoryControl 생성됨");
	}

	@RequestMapping("/list")
	public AjaxResult list() {
		HashMap<String,Object> params = new HashMap<String,Object>();
		log.debug("========>" + params);
		params.put("category",categoryService.list());
			return new AjaxResult().setStatus("ok").setData(params);
	}

	@RequestMapping(value="/create", method=RequestMethod.POST)
	public AjaxResult create(CategoryVo vo) {
		if((vo.getParent()=="") && (vo.getSeq()=="") && (vo.getDepth()=="")) {
			categoryService.maxParent(vo);	    
		}else if((vo.getSeq()=="") && (vo.getDepth()=="")) {
			categoryService.maxSeq(vo);	    
		}else{
			categoryService.maxDepth(vo);
		}
		//log.debug("Create ===== ++ ===== :" + vo.toString());
		return new AjaxResult().setStatus("ok");
	}	

	@RequestMapping(value="/delete", method=RequestMethod.GET)
	public AjaxResult delete(String cname) {
		//log.debug("delete ===== ++ ===== :" +cname);
		categoryService.remove(cname);
		return new AjaxResult().setStatus("ok");
	}	

	

	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public AjaxResult update(CategoryVo vo) {
		
		log.debug("update ===== ++ ===== :" + vo.toString());
		categoryService.change(vo);
		return  new AjaxResult().setStatus("ok");
	}
	
}














