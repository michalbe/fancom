"use strict";

setInterval(function(){
  var inputValue = document.getElementById('pull_request_title').value;
  inputValue = inputValue.replace(/:(.*?):/gi, '');
}, 200);
