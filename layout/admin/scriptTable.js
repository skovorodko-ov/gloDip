'use strict';

const parentPage = document.referrer,
  cookies = document.cookie;

if (parentPage === '' && !cookies) {
  window.location.href = './index.html';
}