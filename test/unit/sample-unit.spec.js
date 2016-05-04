const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const functionToTest = require('../../src/function-to-test.js');

describe('[sample unit]', function() {
  it('should pass functionToTest with true input', function() {
    return expect(functionToTest(true))
      .to.eventually.be.equal('Good');
  });

  it('should fail functionToTest with false input', function() {
    return expect(functionToTest(false))
      .to.eventually.be.rejectedWith('Bad');
  });
});
