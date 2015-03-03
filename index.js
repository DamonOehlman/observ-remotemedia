var Observ = require('observ');
var ObservStruct = require('observ-struct');
var URL = require('feature/detect')('URL');
var xhr = require('binary-xhr');
var bufferUrl = require('buffer-url');

/**
  # observ-remotemedia

  This is an observable structure that can be used to fetch remote media
  objects using [`binary-xhr`](https://github.com/maxogden/binary-xhr)
  and convert them into local object urls for rendering.

  ## Why?

  This module exists as it is makes it possible to write your code in a
  way that works for both simple webapp that will be rendered in the
  browser and also in chrome applications that are
  [not able to reference external resources](https://developer.chrome.com/apps/app_external#external).

**/
module.exports = function(initialVal) {
  var remote = Observ();
  var local = Observ();
  var currentRemote;

  function fetch(url) {
    xhr(url, function(err, data) {
      if (err) return;

      // if we have an existing local url, then revoke the url
      if (local()) {
        URL.revokeObjectURL(local());
      }

      local.set(bufferUrl(data));
      currentRemote = url;
    });
  }

  function set(val) {
    if (typeof val == 'string' || (val instanceof String)) {
      return remote.set(val);
    }

    _set(val);
  }

  s = ObservStruct({ remote: remote, local: local });
  _set = s.set;
  s.set = set;

  if (initialVal) {
    set(initialVal);
  }

  remote(function(val) {
    if (val && val !== currentRemote) {
      fetch(val);
    }
  });

  return s;
};
