require.config({
    baseUrl:"./src/js",
    paths:{
        axios:"utils/axios",
        Et:"libs/easy.templatejs",
        text:"libs/text",
        tabbar:"Modules/commons/tabbar"
    },
    map:{

    }
})

require(["tabbar"],function(tabbar){
    tabbar.initview();
    
})