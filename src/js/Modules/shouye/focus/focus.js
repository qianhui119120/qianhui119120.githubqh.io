require.config({
    paths: {
        swiper: "libs/swiper.min"
    }
})
define(['axios','Et','text!focus.html','swiper'],
    function(axios,Et,focusHTML,Swiper){
     var obj = {
        //  http://localhost:3000/zh-cn/api/focus
         initview: function(){
             var focusURL = "http://localhost:3000/zh-cn/api/focus";
             axios.get(focusURL).then((resp)=>{
                 var rs = Et.template(focusHTML,{focus:resp.focus});
                 var sy = document.getElementById("shouye");
                 var focus = document.createElement("div");
                 focus.className = "focus";
                 focus.innerHTML = rs;
                 sy.appendChild(focus);
                 var swiper = new Swiper('.swiper-container', {
                     spaceBetween: 0,
                     centeredSlides: true,
                     autoplay: {
                       delay: 1500,
                       disableOnInteraction: true,
                     },
                     pagination: {
                       el: '.swiper-pagination',
                       clickable: true,
                     }
                    //  navigation: {
                    //    nextEl: '.swiper-button-next',
                    //    prevEl: '.swiper-button-prev',
                    //  },
                   });
             })
         }
     }
     return obj;
})