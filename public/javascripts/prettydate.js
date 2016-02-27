;
!window.jQuery && document.write("<script src=\"http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js\">" + "</script>");
(function() {
    window.setInterval(function() {
        $("[data-time]").each(function() {
            var t = new Date().getTime() - new Date(Number($(this).attr('data-time'))).getTime();
            if (t > 365 * 24 * 60 * 60 * 1000) { //超过一年
                $(this).html(parseInt(t / (365 * 24 * 60 * 60 * 1000)).toString() + "年前");
            } else if (t > 30 * 24 * 60 * 60 * 1000) { //超过一月
                $(this).html(parseInt(t / (30 * 24 * 60 * 60 * 1000)).toString() + "月前");
            } else if (t > 24 * 60 * 60 * 1000) { //超过一天
                $(this).html(parseInt(t / (24 * 60 * 60 * 1000)).toString() + "天前");
            } else if (t > 60 * 60 * 1000) { //超过一小时
                $(this).html(parseInt(t / (60 * 60 * 1000)).toString() + "小时前");
            } else if (t > 60 * 1000) { //超过一分钟
                $(this).html(parseInt(t / (60 * 1000)).toString() + "分钟前");
            } else if (t > 1000) { //超过一秒
                $(this).html(parseInt(t / 1000).toString() + "秒前");
            }
        })
    }, 1000);

})();

// demo
// <div data-time="1422587383092"></div>
// <div data-time="1422586071651"></div>
// <div data-time="1422581072651"></div>
// <script type="text/javascript" src="prettydate.min.js"></script>













