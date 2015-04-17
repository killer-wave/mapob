var async = require('async');

exports.inject = function(objector, objectee, callback){
    keys = Object.keys(objector);
    async.each(keys, function(key, callback){
        objectee[key] = objector[key];
        callback();
    },
    function(err){
        return callback(null, objectee);
    });
};