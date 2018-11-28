require.config({
    paths: {
        focus: 'Modules/shouye/focus/focus',
        navbar:"Modules/shouye/navbar/navbar"
    }
})
define(['Et','text!shouye.html','focus',"navbar"],function(Et,shouyeHTML,focus,navbar){
    var obj = {
        initview: function(){
            var app = document.getElementById("app");
            app.innerHTML = shouyeHTML;
            //初始化轮播图
            focus.initview();
            navbar.initview();
        }
    }
    return obj;
})