module.exports = (request, response) => {
  response.render('signup/mailCheck', {
    title: "用户激活",
    user: request.session.name
  });
}
