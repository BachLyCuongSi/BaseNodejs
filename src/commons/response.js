"use strict";

module.exports = {
    error: function(error, message = null) {
        return {
            status: 0,
            code: error.code,
            message: message || error.message,
            data: {}
        };
    },
    success: function(data, message = "Thành công") {
        return {
            status: 1,
            code: 200,
            message: message,
            data: data
        };
    }
};