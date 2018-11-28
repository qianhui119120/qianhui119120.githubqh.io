define(["axios","Et","text!jx.html"],function(axios,Et,jxHTML){
    var obj = {
        initview:function(){
            var jxURL = "http://localhost:3000/api/home";
            axios.get(jxURL,{
                sectionId:99,
                pageNo:0,
                pageSize:30
            }).then((resp)=>{
                var rs = Et.template(jxHTML,{
                    goods:resp.listIndex,
                    Date:window.Date,
                    console:window.console
                })
                var goodslist = document.createElement("div");
                goodslist.className = "goodslist";
                goodslist.innerHTML = rs;
                var shouye = document.querySelector("#shouye");
                shouye.appendChild(goodslist);
            })
        }
    }
    return obj;
})