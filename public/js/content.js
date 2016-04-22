$(".edit").click(function () {
    window.location.href = "/code/edit?id=" + codeid;
});
$(".deleteCode").click(function () {
    $.get('/code/delete', { id: codeid }, function (data) {
        if (data.code == 200) {
            $("#modalDialog").modal('show');
            $("#modalDialog .modal-title").html("恭喜你！");
            $("#modalDialog .modal-body").html("恭喜你删除成功！");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" onclick=\"window.location.href='/code/add'\">添加代码片段</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-default\" onclick=\"window.location.href='/code/list'\" data-dismiss=\"modal\" id=\"commit\">确认</button > ");
        } else {
            $("#modalDialog").modal('show');
            $("#modalDialog .modal-title").html("很遗憾！");
            $("#modalDialog .modal-body").html("删除失败，请刷新后重试！");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" onclick=\"window.location.href='/'\">添加代码片段</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button > ");
        }
    });
});
var clipboard = new Clipboard('#copy');
editor.$blockScrolling = Infinity;
$(".comment-footer-delete").click(function () {
    var first = $(this).data("first");
    var commentid = $(this).data("commentid");
    var div = $(this).data("div");
    $.get("/comment/delete", {
        first: first,
        commentid: commentid,
        div: div
    }, function (data) {
        if (data.code == 200) {
            console.log("succ");
            window.location.reload();
        } else {
            console.log(data);
        }
    });
});
$("#addComment").click(function () {
    $("#modalDialog").modal('show');
    $("#modalDialog .modal-title").html("添加评论");
    $("#modalDialog .modal-body").html("<textarea placeholder='请输入评论内容' class='form-control'></textarea>");
    $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
    $("#commit").bind('click', function () {
        $.post("/comment/add", {
            comment: $("#modalDialog textarea").val(),
            isFirst: true,
            codeid: codeid
        }, function (data) {
            if (data.code == 200) {
                console.log("succ");
                window.location.reload();
            } else {
                console.log("err");
            }
        })
    });
});
$("#shareUrl").val(window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search);
$(".comment-footer-edit").click(function () {
    $("#modalDialog").modal('show');
    $("#modalDialog .modal-title").html("修改评论");
    $("#modalDialog .modal-body").html("<textarea placeholder='请输入评论内容' class='form-control'>" + $(this).data("content") + "</textarea>");
    $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
    var commentid = $(this).data("commentid");
    $("#commit").bind('click', function () {
        var content = $("#modalDialog textarea").val();
        $.post("/comment/update", {
            commentid: commentid,
            content: $("#modalDialog textarea").val()
        }, function (data) {
            if (data.code == 200) {
                $("#" + commentid).html(content);
            } else {
                console.log("err");
            }
        });
    });
});
$(".comment-footer-reply").click(function () {
    $("#modalDialog").modal('show');
    $("#modalDialog .modal-title").html("回复 " + $(this).data("name") + " 的评论");
    $("#modalDialog .modal-body").html("<textarea placeholder='请输入评论内容' class='form-control'></textarea>");
    $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
    var divid = $(this).data("divid");
    var reply = $(this).data("uid");
    $("#commit").bind('click', function () {
        var comment = $("#modalDialog textarea").val();
        $.post("/comment/add", {
            comment: comment,
            isFirst: false,
            codeid: codeid,
            divid: divid,
            reply: reply
        }, function (data) {
            if (data.code == 200) {
                console.log("succ");
                window.location.reload();
            } else {
                console.log("err");
            }
        });
    });
});
$(".code-png").click(function () {
    $("#modalDialog").modal('show');
    $("#modalDialog .modal-title").html("请扫描二维码");
    $("#modalDialog .modal-body").html("<img style=\"margin: 0 auto;display: block;\" src='" + qr + "' />");
    $("#modalDialog .modal-footer").html("");
});
$(".fork").click(function () {
    $.get("/code/fork", { id: codeid, version: codeversion }, function (data) {
        if (data.code == 200) {
            $("#modalDialog").modal('show');
            $("#modalDialog .modal-title").html("恭喜你");
            $("#modalDialog .modal-body").html("恭喜你Fork成功。");
            $("#modalDialog .modal-footer").html("<button onclick=\"window.location.href='/code/content?id=" + data.msg + "'\" class=\"btn btn-default\">查看我的Fork</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
        } else if (data.code == 501) {
            $("#modalDialog").modal('show');
            $("#modalDialog .modal-title").html("很遗憾");
            $("#modalDialog .modal-body").html("Fork失败，您尚未登录。");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
        } else {
            $("#modalDialog").modal('show');
            $("#modalDialog .modal-title").html("很遗憾");
            $("#modalDialog .modal-body").html("Fork失败，请重试。");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"commit\">确认</button>");
        }
    });
});
