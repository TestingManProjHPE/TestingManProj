package com.platform.config.routes;

import com.jfinal.config.Routes;
import com.test.mvc.angletable.AngleTableController;
import com.test.mvc.blog.BlogController;

/**
 * 测试模块路由
 */
public class TestRoutes extends Routes {

	@Override
	public void config() {
		add("/jf/test/blog", BlogController.class);
//		add("/jf/test/angle", AngleTableController.class);
	}

}
