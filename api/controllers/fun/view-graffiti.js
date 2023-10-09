module.exports = {


  friendlyName: 'View graffiti',


  description: 'Display "Graffiti" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/fun/graffiti'
    }

  },


  fn: async function () {

    // Respond with view.
    return {
      pageName: "graffiti"
    };

  }


};
