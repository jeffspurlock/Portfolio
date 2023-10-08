module.exports = {

  friendlyName: "View Weather",
  description: 'Display "Weather" page',

  exits: {

    success: {
      viewTemplatePath: 'pages/fun/weather'
    }

  },


  fn: async function (req, res) {
    var sails = require('sails'); 
    return{ 
      pageName: "weather", 
      sails: sails 
    };
  }
};
