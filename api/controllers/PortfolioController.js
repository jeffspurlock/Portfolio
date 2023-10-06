/**
 * PortfolioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async viewWeather(req,res){
    res.view('fun/weather');
  }

};

