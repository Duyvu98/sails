/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: 'f550b7104673dc7ce7c96f0a9a25f90d',

  adapter: 'connect-mongo',
  // Note: user, pass and port are optional
  url: 'mongodb://localhost:27017/passportexample',
  collection: 'sessions',
  auto_reconnect: false,
  ssl: false,
  stringify: true
  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
