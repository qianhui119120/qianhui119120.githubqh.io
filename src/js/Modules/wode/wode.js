define(["Et","text!wode.html"],function(Et,wodeHTML){
    var obj={
        initview:function(){
            var app = document.getElementById("app");
            app.innerHTML = wodeHTML;
        }
    }
    return obj;
})