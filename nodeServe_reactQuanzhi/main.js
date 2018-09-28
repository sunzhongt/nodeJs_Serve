var http =require('http');
var fs =require('fs');
var url =require('url');


function serve(req, res) {
 
    var pathname = url.parse(req.url).pathname;
    var arg = url.parse(req.url, true).query;
    var str = pathname.toString().substring(1)
    if (str == "IndexSwiper") {
        var datas = fs.readFileSync('./json/swiper.json')
            datas = JSON.parse(datas.toString())
            var urls
         datas.data = datas.data.filter(function (item, index) {
                if(index==0){
                     urls=item.imageUrl
                }
            return index!=0
        })
        datas.url=urls
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });console.log(3333)
        res.end(JSON.stringify(datas));
       
    }else if(str == "IndexSwiperOne"){
        var datas = fs.readFileSync('./json/spwOne.json')
        datas = JSON.parse(datas.toString())
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });console.log(3333)
        res.end(JSON.stringify(datas));
    }

 

   
}

http.createServer(serve).listen(1111)