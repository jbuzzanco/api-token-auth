'use strict';
const config = require('../config');
const store = require('../store');

const signUp = (data) =>
  $.ajax({
    url: config.host + '/sign-up',
    method: 'POST',
    data,
  });

const signIn = (data) =>
    $.ajax({
      url: config.host + '/sign-in',
      method: 'POST',
      data,
  });

const changePassword = (data) =>
      $.ajax({
        url: config.host + '/change-password/' + store.user.id,
        method: 'PATCH',
        data,
        headers: {
          Authorization: 'Token token=' + store.user.token,
        },
    });

const signOut = (data) =>
$.ajax({
  url: config.host + '/sign-out/' + store.user.id,
  method: 'DELETE',
  data,
  headers: {
    Authorization: 'Token token=' + store.user.token,
  },
});

  // new Promise(function (resolve, reject) {
  //   if (Math.random() > 0.5) {
  //     resolve('in signUp');
  //   } else {
  //     let error = new Error('Random');
  //     error.data = data;
  //     reject(error);
  //   }
  // });

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
};
