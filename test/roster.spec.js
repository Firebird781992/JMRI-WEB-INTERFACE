var assert = require('assert');
const roster = require('../src/roster.js');
describe('roster', function() {
    it('should return 10 items', function(done) {
      roster.getRoster (function (error, items) {
        if (error) {throw error}
        assert.equal (10,items.length)
        done()
      })
          });
});
