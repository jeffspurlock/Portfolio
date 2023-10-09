module.exports = {


  friendlyName: 'View me',


  description: 'Display "Me" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/me'
    }

  },


  fn: async function () {
    return{ 
      pageName: "me"
    };
  }


};
