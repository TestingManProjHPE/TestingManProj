package com.test.mvc.angletable;

import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;
import org.apache.log4j.Logger;

/**
 * Created by yxin on 2/10/2016.
 */
public class AngleTableValidator extends Validator {

    @SuppressWarnings("unused")
    private static Logger log = Logger.getLogger(AngleTableValidator.class);

    protected void validate(Controller controller) {
        String actionKey = getActionKey();
        if (actionKey.equals("/jf/test/blog/save")){
            // validateString("username", 6, 30, "usernameMsg", "请输入登录账号!");

        } else if (actionKey.equals("/jf/test/blog/update")){

        }
    }

    protected void handleError(Controller controller) {
        String actionKey = getActionKey();
        if (actionKey.equals("/jf/test/blog/save")){
            controller.render("/test/xxx.html");

        } else if (actionKey.equals("/jf/test/blog/update")){
            controller.render("/test/xxx.html");

        }
    }
}
