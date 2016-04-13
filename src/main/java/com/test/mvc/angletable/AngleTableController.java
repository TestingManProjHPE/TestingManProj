package com.test.mvc.angletable;

import com.jfinal.aop.Before;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.platform.mvc.base.BaseController;
import com.test.mvc.blog.Blog;
import com.test.mvc.blog.BlogValidator;
import org.apache.log4j.Logger;
import org.json.JSONObject;

import java.util.List;

/**
 * Created by yxin on 2/10/2016.
 */
//@Controller(controllerKey = "/jf/test/angle")
public class AngleTableController extends BaseController {

    @SuppressWarnings("unused")
    private static Logger log = Logger.getLogger(AngleTableController.class);

    /**
     * 列表
     */
    public void index() {
        render("/test/angle/datatable.html");
    }

    public void get() {
        log.info("=====================inget()================");
//        List<Blog> loblog = Blog.dao.findAll();
//        setAttr("blogs", loblog);
//        renderJson("blogs",loblog);
        List<Record> testrecordone = Db.find("SELECT detecteddate as name, count(*) as value " +
                "  FROM test_blog" +
                "  group by detecteddate");
//        setAttr("testdata1",testrecordone);
        renderJson("testdata1",testrecordone);
    }

    @Before(BlogValidator.class)
    public void save() {
        String paramstr = getPara("params");
        JSONObject param = new JSONObject(paramstr);
//        param.put("column_createtime","");
//        Gson gson = new Gson();
//        paramstr = param.toString();
//        Blog blog = gson.fromJson(paramstr,Blog.class);
        Blog blog = new Blog();
        blog.setIds(param.get("ids").toString());
        blog.setTitle(param.get("title").toString());
        blog.setContent(param.get("content").toString());
//        blog.set(param.get("column_createtime").toString());
        blog.save();
    }

    public void deletebyids(){
        String paramstr = getPara("params");
        String sqlstr = "delete from test_blog t where t.ids = "+"'"+paramstr+"'";
        Db.update(sqlstr);
//        Blog.dao.deleteByIds(paramstr);
    }

}
