$("#active").click(function() {
    if ($("#activetext").val() != "") {
        $.get("mailActive", {
            active: $("#activetext").val()
        }, function(data) {
            if (data.code == 200) {
                $("#modalDialog h4").html("恭喜你");
                $("#modalDialog .modal-body").html("激活成功！");
                $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" onclick=\"window.location.href='/'\">去我们的首页</button>");
                $("#modalDialog").modal("show");
            } else {
                $("#modalDialog h4").html("请注意");
                $("#modalDialog .modal-body").html("激活失败！");
                $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">我知道了</button>");
                $("#modalDialog").modal("show");
            }
        })
    }
});
$("#resend").click(function() {
    $.get("mailResend", function(data) {
        if (data.code == 200) {
            $("#modalDialog h4").html("恭喜你");
            $("#modalDialog .modal-body").html("激活邮件发送成功！");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">我知道了</button>");
            $("#modalDialog").modal("show");
        } else {
            $("#modalDialog h4").html("请注意");
            $("#modalDialog .modal-body").html("激活邮件发送失败，因为刚才已经成功发送一封邮件，请稍后重试！");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">我知道了</button>");
            $("#modalDialog").modal("show");
        }
    })
});
