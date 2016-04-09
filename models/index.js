"use strict";

module.exports = (mongoose) => {
    require('./user')(mongoose)
    require('./code')(mongoose)
    require('./codeLike')(mongoose)
    require('./codeComment')(mongoose)
    require('./artical')(mongoose)
    require('./articalComment')(mongoose)
    require('./mailLog')(mongoose)
    require('./codeContent')(mongoose)
}
