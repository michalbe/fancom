"use strict";

var inputValue = document.getElementById('pull_request_title').value;
inputValue = inputValue.replace(/:(.*?):/gi, '');
