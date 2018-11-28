define(function(){
    var axios = {
        /**
         * get请求: 
         *  1.安全性低,请求的数据放到了url上
         *  2.长度有限制
         * 
         * post请求:
         *  1.安全性高,请求的数据放到请求体内,不再url上
         *  2.长度没有限制
         */
        /**
         * url:请求的地址
         * params: 请求的参数
         */
        get: function(url,params){
            // url?username=""&password=""
            var str = ""
            if(params){
                for(var key in params){
                    str += key+"="+params[key]+"&"
                }
            }
            str = str.slice(0,-1);
            url =url+"?"+str;
            // 发起网络请求
            var xhr = new XMLHttpRequest();
            xhr.open('get',url);
            xhr.send();
            return new Promise(function(resolve,reject){
                xhr.onreadystatechange = function(){
                    if(xhr.readyState != 4){
                        return;
                    }
                    // 等于200表示成功
                    console.log("获取数据成功");
                    if(xhr.responseText.length){
                        var jsonData = JSON.parse(xhr.responseText);
                        resolve(jsonData);
                        return;
                    }else{
                        console.log("继续请求");
                        axios.get(url,params)
                        // resolve({
                        //     message: "数据为空,请刷新",
                        // });
                    }
                    // if(xhr.status === 200){
                    //     if(xhr.responseText.length){
                    //         var jsonData = JSON.parse(xhr.responseText);
                    //         resolve(jsonData);
                    //         return;
                    //     }else{
                    //         console.log("继续请求");
                    //         axios.get(url,params)
                    //         // resolve({
                    //         //     message: "数据为空,请刷新",
                    //         // });
                    //     }
                    // }
                }
            })
        },
        post: function(url,params){

        }
    }
    // 注册
    window.$axios = axios;
    return axios;
})


