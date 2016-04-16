$("#codelike").click(function() {
    var _this = $(this);
    $.get("/code/like", {
        id: codeid
    }, function(data) {
        if (data.code == 200) {
            _this.html("赞：" + data.msg);
        } else if (data.code == 515) {
            console.log("点赞过");
        } else if (data.code == 501) {
            console.log("未登录");
        }
    })
});
$("#codesnippet").click(function() {
    window.location.href = "/code/content?id=" + codeid;
});
$("#history").click(function() {
    window.location.href = "/code/historyList?id=" + codeid;
});
$("#compare").click(function() {
    console.log($("#from").val() + $("#to").val());
    window.location.href = "/code/compare?id=" + codeid + "&from=" + $("#from").val() + "&to=" + $("#to").val();
});
