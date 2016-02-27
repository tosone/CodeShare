/* global md5 */
/* global Vue */
/* global $ */
"use strict";
$(function () {
    var idAvailableStat = true,
        submitStat = true;
    var signModel = new Vue({
        el: '#sign_form',
        data: {
            id_divClass: "has-warning",
            id_value: "",
            id_class: "danger",
            id_hide: "hide",
            id_message: "",
            pwd_divClass: "has-warning",
            pwd_value: "",
            pwd_class: "danger",
            pwd_hide: "hide",
            pwd_message: "",
            pwd_p_divClass: "has-warning",
            pwd_p_value: "",
            pwd_p_class: "danger",
            pwd_p_hide: "hide",
            pwd_p_message: "",
            email_divClass: "has-warning",
            email_value: "",
            email_class: "danger",
            email_hide: "hide",
            email_message: "",
            tel_value: "",
            tel_class: "danger",
            tel_hide: "hide",
            tel_message: "",
            tel_divClass: "",
            qq_value: "",
            qq_class: "danger",
            qq_hide: "hide",
            qq_message: "",
            qq_divClass: ""
        },
        methods: {
            submit: function () {
                if (this.id_divClass === "has-success" && this.pwd_divClass === "has-success" && this.pwd_p_divClass === "has-success" && this.email_divClass === "has-success") {
                    var postData = {},
                        _this = this;
                    postData.uid = _this.id_value;
                    postData.pwd = md5(_this.pwd_value);
                    postData.email = _this.email_value;
                    postData.tel = "nul";
                    postData.qq = "nul";
                    if (_this.tel_divClass === "has-success") postData.tel = _this.tel_value;
                    if (_this.qq_divClass === "has-success") postData.qq = _this.qq_value;
                    if (idAvailableStat) {
                        idAvailableStat = false;
                        $.get("/sign/userSign", postData, function (data) {
                            idAvailableStat = true;
                            if (data.code == 500) {
                                $("#modalDialog h4").html("请注意");
                                $("#modalDialog .modal-body").html("这个名字已经被别人用过了，请您换个名字！");
                                $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">我知道了</button>");
                                $("#modalDialog").modal("show");
                            } else if (data.code == 502) {
                                $("#modalDialog h4").html("请注意");
                                $("#modalDialog .modal-body").html("请按照要求填写表单！");
                                $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">我知道了</button>");
                                $("#modalDialog").modal("show");
                            } else if (data.code == 200) {
                                $("#modalDialog h4").html("恭喜您");
                                $("#modalDialog .modal-body").html("注册成功！");
                                $("#modalDialog .modal-footer").html("<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" onclick=\"window.location.href='sign/active'\">验证邮箱</button><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" onclick=\"window.location.href='/'\">去我们的首页</button>");
                                $("#modalDialog").modal("show");
                            }
                        }, 'json');
                    }
                }
            }
        }
    });
    signModel.$watch("id_value", function (val) {
        if (val !== "") {
            this.id_hide = "";
            if (val.length < 3) {
                this.id_divClass = "has-warning";
                this.id_class = "danger";
                this.id_message = "用户名至少三位！";
            } else {
                if (val.match(/[~=/*@&%#%$\\]/gi)) {
                    this.id_divClass = "has-warning";
                    this.id_class = "danger";
                    this.id_message = "用户名不可以含有特殊字符！";
                } else {
                    var _this = this;
                    if (submitStat) {
                        submitStat = false;
                        $.get("/sign/avaliableID", {
                            uid: val
                        }, function (data) {
                            submitStat = true;
                            if (data.code == 500) {
                                _this.id_divClass = "has-warning";
                                _this.id_class = "danger";
                                _this.id_message = '用户名已注册！';
                            } else if (data.code == 502) {
                                _this.id_divClass = "has-warning";
                                _this.id_class = "danger";
                                _this.id_message = "用户名中不可以含有特殊字符！";
                            } else if (data.code == 200) {
                                _this.id_divClass = "has-success";
                                _this.id_class = "success";
                                _this.id_message = "验证通过！";
                            }
                        }, 'json');
                    }
                }
            }
        } else {
            this.id_divClass = "has-warning";
            this.id_hide = "hide";
        }
    });
    signModel.$watch("pwd_value", function (val) {
        if (val !== "") {
            this.pwd_hide = "";
            if (val.length >= 6) {
                this.pwd_divClass = "has-success";
                this.pwd_class = "success";
                this.pwd_message = "验证通过！";
            } else {
                this.pwd_divClass = "has-warning";
                this.pwd_class = "danger";
                this.pwd_message = "密码长度不够，请增加长度！";
            }
        } else {
            this.pwd_divClass = "has-warning";
            this.pwd_hide = "hide";
        }
    });
    signModel.$watch("pwd_p_value", function (val) {
        if (val !== "") {
            this.pwd_p_hide = "";
            if (this.pwd_value === val) {
                this.pwd_p_divClass = "has-success";
                this.pwd_p_class = "success";
                this.pwd_p_message = "验证通过！";
            } else {
                this.pwd_p_divClass = "has-warning";
                this.pwd_p_class = "danger";
                this.pwd_p_message = "密码不一致，请检查。";
            }
        } else {
            this.pwd_p_divClass = "has-warning";
            this.pwd_p_hide = "hide";
        }
    });
    signModel.$watch("email_value", function (val) {
        if (val !== "") {
            this.email_hide = "";
            if (!!val.match(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/)) {
                this.email_divClass = "has-success";
                this.email_class = "success";
                this.email_message = "验证通过！";
            } else {
                this.email_divClass = "has-warning";
                this.email_class = "danger";
                this.email_message = "QQ号码格式不正确，请检查！";
            }
        } else {
            this.email_divClass = "has-warning";
            this.email_hide = "hide";
        }
    });
    signModel.$watch("tel_value", function (val) {
        if (val !== "") {
            this.tel_hide = "";
            if (!!val.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)) {
                this.tel_class = "success";
                this.tel_divClass = "has-success";
                this.tel_message = "验证通过！";
            } else {
                this.tel_divClass = "has-warning";
                this.tel_class = "danger";
                this.tel_message = "电话格式不正确，请检查！";
            }
        } else {
            this.tel_divClass = "";
            this.tel_hide = "hide";
        }
    });
    signModel.$watch("qq_value", function (val) {
        if (val !== "") {
            this.qq_hide = "";
            if (!!val.match(/^\d{5,10}$/)) {
                this.qq_class = "success";
                this.qq_divClass = "has-success";
                this.qq_message = "验证通过！";
            } else {
                this.qq_divClass = "has-warning";
                this.qq_class = "danger";
                this.qq_message = "电话格式不正确，请检查！";
            }
        } else {
            this.qq_divClass = "";
            this.qq_hide = "hide";
        }
    });
});
