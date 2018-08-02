module.exports = {
  'port': process.env.PORT,
  'pwdHmacMethod': 'sha256',
  'mongodb': `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
  'cookieSecret': '8541539655',
  'cookieMaxAge': 1209600,
  'userPwdSalt': '8541539655',
  'mailApiKey': 'XgoRiLLGYAPLRdnx',
  'mailApiUser': 'tosone',
  'ACCESS_KEY': 'cIwkggzjgQA6wWAQw0pGt3N97452rBctOaxV5TG1',
  'SECRET_KEY': 'yXN59L0e1BZoj_oHqw9uWVJ9-J6Lk0Ntp_1PGwWi',
  'codepaging': 10,
  'jwt': '8541539655',
}
