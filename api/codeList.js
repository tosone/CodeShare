'use strict';
//代码列表
module.exports = (context) => {
    const Code = context.model.code;
    const config = context.config;
    
    return function(condition,sort, page) {
        return new Promise(function(resolve, reject) {
            Code.find()
                .where(condition)
                .sort(sort)
                .skip((parseInt(page) - 1) * config.codepaging)
                .limit(config.codepaging)
                .exec(function(err, val) {
                	if(err){
                		console.log(err);
                		reject(true);
                	}else{
                		resolve(val);
                	}                    
                });
        });
    }
}
