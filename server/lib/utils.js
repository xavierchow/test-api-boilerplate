'use strict';

let func;
// todo
exports.getTransactionId = function(attr) {
  if (!func) {
    attr = attr || 'transactionId';
    func = function(req) {
      return req[attr];
    };
  }
  return func;
};
