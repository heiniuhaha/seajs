define(function(require) {

  var test = require('test/test');

  try {
    require('./e');
    test.print('[FAIL] ' + 'should throw error.', 'fail');
  }
  catch(x) {
    test.print('[PASS] ' + 'should throw error.', 'pass');
  }

  test.print('DONE', 'info');

});
