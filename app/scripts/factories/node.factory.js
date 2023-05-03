'use strict';

angular.module('icestudio')
  .factory('nodeFs', function() {
    return require('fs');
  })
  .factory('nodeRmdir', function() {
    return require('rmdir');
  })
  .factory('nodeSha1', function() {
    return require('sha1');
  })
  .factory('nodeOs', function() {
    return require('os');
  })
  .factory('nodePath', function() {
    return require('path');
  })
  .factory('nodeChildProcess', function() {
    return require('child_process');
  })
  .factory('nodeProcess', function() {
    return require('process');
  })
  .factory('nodeTarball', function() {
    return require('tarball-extract');
  })
  .factory('nodePing', function() {
    return require('ping').sys;
  })
  .factory('nodeZlib', function() {
    return require('zlib');
  });
