var randomstring = require('randomstring');

const helpers = {
    createTokenValue: async () => {
      let token = randomstring.generate(20);
      return token
    }
}

module.exports = helpers;