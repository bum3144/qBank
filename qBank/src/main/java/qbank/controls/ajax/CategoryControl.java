package qbank.controls.ajax;

import java.util.HashMap;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import qbank.services.CategoryService;
import qbank.vo.AjaxResult;
import qbank.vo.CategoryVo;

@Controller
@RequestMapping("/gategory")
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
		params.put("category",categoryService.list());
		
			return new AjaxResult().setStatus("ok").setData(params);
	}
}














