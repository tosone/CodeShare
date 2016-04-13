$("#resend").click(function() {
    $.get("mailResend", function(data) {
        console.log(data)
        if (data.code == 200) {
            $("#modalDialog h4").html("恭喜你");
            $("#modalDialog .modal-body").html("激活邮件发送成功！");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">我知道了</button>");
            $("#modalDialog").modal("show");
        } else {
            $("#modalDialog h4").html("请注意");
            $("#modalDialog .modal-body").html("尚未登录，请登录后重新发送邮件！");
            $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">我知道了</button>");
            $("#modalDialog").modal("show");
        }
    })
});

$("#succ").click(function() {
    window.location.href = "/";
})
