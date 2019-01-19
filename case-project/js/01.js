let step = 1;
let messages =[];

$(function () {

    //请求   // 初始化加载
    $.getJSON("../data/message.json" , function (results) {
        messages = results;
        console.log(results)
    });

    //生成页面
    function createItem(arr) {           //根据传入的数组内容   去渲染 item

        arr.forEach(function (e) {

            //替换成 自己的 HTML ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            let neirong = $("<div class=\"dongtai \">\n" +
                "                <div class=\"touxiang \">\n" +
                "                    <div class=\"tou-pict  pict\" style=\"background-image: url("+e.photo+")\"></div>\n" +
                "                </div>\n" +
                "                <div class=\"neirong \">\n" +
                "                    <div class=\"neirong-top \">\n" +
                "                        <div class=\"nei-top-left \">\n" +
                "                            <div class=\"left-top \">"+e.name+"</div>\n" +
                "                            <div class=\"left-bottom \">"+e.amount+"</div>\n" +
                "                        </div>\n" +
                "                        <div class=\"nei-top-center \">分享单曲：</div>\n" +
                "                        <div class=\"nei-top-right  xy-center\">+关注</div>\n" +
                "                    </div>\n" +
                "                    <div class=\"words \">"+e.words+"" +
                "                    </div>\n" +
                "                    <div class=\"picture \">\n" +
                "                        <div class=\" pict\" style=\"background-image: url("+e.picture1+")\"></div>\n" +
                "                        <div class=\" pict\"style=\"background-image: url("+e.picture5+")\"></div>\n" +
                "                        <div class=\" pict\" style=\"background-image: url("+e.picture2+")\"></div>\n" +
                "                        <div class=\" pict\" style=\"background-image: url("+e.picture3+")\"></div>\n" +
                "                        <div class=\" pict\" style=\"background-image: url("+e.picture4+")\"></div>\n" +
                "                        <div class=\" pict\" style=\"background-image: url("+e.picture6+")\"></div>\n" +
                "                        <div class=\" pict\" style=\"background-image: url("+e.picture7+")\"></div>\n" +
                "                        <div class=\" pict\" style=\"background-image: url("+e.picture8+")\"></div>\n" +
                "                        <div class=\" pict\"style=\"background-image: url("+e.picture9+")\"></div>\n" +
                "                    </div>\n" +
                "                    <div class=\"neirong-music \">\n" +
                "                        <div class=\"music-pict  pict xy-center\" style=\"background-image: url(../img/friends/耳语.jpg)\">\n" +
                "                            <div class=\"circle xy-center\" >\n" +
                "                                <div class=\"pict tangle \" style=\"background-image: url(../img/friends/三角.svg)\"></div>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                        <div class=\"music-font \">\n" +
                "                            <div class=\"music-font1 \">耳语</div>\n" +
                "                            <div class=\"music-font2 \">乖白</div>\n" +
                "                        </div>\n" +
                "\n" +
                "                    </div>\n" +
                "                    <div class=\"bottom \">\n" +
                "                        <div class=\"bottom1  xy-center\">\n" +
                "                            <div class=\"pict1  pict\" style=\"background-image: url(../img/friends/转发.svg)\"></div>\n" +
                "                            <div class=\"font1 \">30</div>\n" +
                "                        </div>\n" +
                "                        <div class=\"bottom1  xy-center \" >\n" +
                "                            <div class=\"pict1  pict\" style=\"background-image: url(../img/friends/评论.svg)\"></div>\n" +
                "                            <div class=\"font1 \">40</div>\n" +
                "                        </div>\n" +
                "                        <div class=\"bottom1  xy-center \" >\n" +
                "                            <div class=\"pict1  pict\" style=\"background-image: url(../img/friends/点赞.svg)\"></div>\n" +
                "                            <div class=\"font1 \">50</div>\n" +
                "                        </div>\n" +
                "                        <div class=\"bottom1  xy-center \">\n" +
                "                            <div class=\"pict1 pict\" style=\"background-image: url(../img/friends/三个点.svg)\"></div>\n" +
                "                        </div>\n" +
                "\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>");
            //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

            $("#friends-dynastic").append(neirong);
        })

    }

//监听滚动
    $("#friends-dynastic").scroll(function () {   //监听滚动事件..

        let container_totalHeight = this.scrollHeight;  //总高度

        let contianer_scroll = $(this).scrollTop();   //卷动高度 // 看不见的部分

        let container_height = $(this).height();   //元素可见部分的高度



        if ((Math.ceil(contianer_scroll) + Math.ceil(container_height)) / container_totalHeight >0.9999 ) {

            setTimeout(function () {
                let arr = messages.slice((step-1) , step+4);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
                createItem(arr);
                step += 4;
            }, 0)

            // console.log("container_totalHeight =  " + container_totalHeight + " ,  container_height : " + container_height + " + scroll : "+contianer_scroll );

        }

    })



});
