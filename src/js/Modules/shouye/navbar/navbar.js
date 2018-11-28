
require.config({
    paths:{
        jx:"Modules/shouye/navbar/jx/jx",
        yh:"Modules/shouye/navbar/yh/yh",
        ht:"Modules/shouye/navbar/ht/ht",
        fx:"Modules/shouye/navbar/fx/fx",
        yc:"Modules/shouye/navbar/yc/yc"
    }
})

define(["Et","text!navbar.html","jx","yh","ht","fx","yc"],
    function(Et,navBarHTML,jx,yh,ht,fx,yc){
    var obj = {
        initview:function(){
            var shouye  = document.querySelector("#shouye");
            var daohangtiao = document.createElement("div");
            daohangtiao.className = "daohangtiao";
            daohangtiao.innerHTML = navBarHTML;
            shouye.appendChild(daohangtiao);
            jx.initview();
            var navs = document.querySelectorAll(".navTabs");
            var length = navs.length;
                for (let i = 0; i < length; i++) {
                    var nav = navs[i];
                    nav.onclick =function(){
                        switch(i){
                            case 0:
                                jx.initview();
                            break;
                            case 1:
                                yh.initview();
                            break;
                            case 2:
                                ht.initview();
                            break;
                            case 3:
                                fx.initview();
                            break;
                            case 4:
                                yc.initview();
                            break;
                        }
                    }
                }
        }
    }
    return obj;
})


function change(ev){
    console.log("你好",ev.target.innerHTML);
}