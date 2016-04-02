module.exports = function(request, response) {
    response.render('sign/mailCheck', {
        title: "用户激活",
        user: request.session.name
    });
}
