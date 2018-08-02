$("#codelike").click(function() {
  var _this = $(this);
  $.get("/code/like", {
    id: codeid
  }, function(data) {
    if (data.code == 200) {
      _this.html("赞：" + data.msg);
      $("#modalDialog").modal('show');
      $("#modalDialog .modal-title").html("恭喜你");
      $("#modalDialog .modal-body").html("点赞成功！");
      $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
    } else if (data.code == 515) {
      $("#modalDialog").modal('show');
      $("#modalDialog .modal-title").html("很遗憾！");
      $("#modalDialog .modal-body").html("点赞失败，您已经点赞过！");
      $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
    } else if (data.code == 501) {
      $("#modalDialog").modal('show');
      $("#modalDialog .modal-title").html("很遗憾！");
      $("#modalDialog .modal-body").html("点赞失败，您尚未登录！");
      $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
    }
  });
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
