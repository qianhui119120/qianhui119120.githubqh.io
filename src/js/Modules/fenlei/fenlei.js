define(["Et","text!fenlei.html"],function(Et,fenleiHTML){
    var obj={
        initview:function(){
            Et.enableStyle = true;
            
            var app = document.getElementById("app");
            app.innerHTML = Et.template(fenleiHTML,{});
        }
    }
    return obj;
})