package com.test.mvc.angletable;

import com.jfinal.aop.Enhancer;
import com.platform.mvc.base.BaseService;
import org.apache.log4j.Logger;

/**
 * Created by yxin on 2/10/2016.
 */
public class AngleTableService extends BaseService {
    @SuppressWarnings("unused")
    private static Logger log = Logger.getLogger(AngleTableService.class);

    public static final AngleTableService service = Enhancer.enhance(AngleTableService.class);

}
