module.exports = context => {
  const Code = context.model.code;
  const config = context.config;
  return conditions => {
    return new Promise((resolve, reject) => {
      Code.count(conditions, (err, count) => {
        resolve(Math.ceil(count / config.codepaging));
      });
    });
  };
};
