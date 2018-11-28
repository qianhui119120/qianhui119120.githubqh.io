
require.config({
    paths:{
        shouye:"Modules/shouye/shouye",
        fenlei:"Modules/fenlei/fenlei",
        wode:"Modules/wode/wode"
    }
})

define(["Et","text!tabbar.html","shouye","fenlei","wode"],
function(Et,tabbarHTML,shouye,fenlei,wode){
    var tabbar = {
        initview:function(){
            Et.enableStyle = true;
            var rs = Et.template(tabbarHTML,{});
            var body = document.body;
            body.innerHTML += rs;
            shouye.initview();
            var tabs = document.querySelectorAll(".tabs");
            for (let i = 0; i < tabs.length; i++) {
                var tab = tabs[i];
                tab.onclick = function(){
                  switch(i){
                      case 0:
                        shouye.initview();
                      break;
                      case 1:
                        fenlei.initview();
                      break;
                      case 2:
                        wode.initview();
                      break;
                  }

                }
                
            }
        }
    }
    return tabbar;
})