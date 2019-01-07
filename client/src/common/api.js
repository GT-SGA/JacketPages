import fetch from 'node-fetch';

function post(url, data = {}) {
  return fetch(`http://jacketpages-test.agiycq95jc.us-east-1.elasticbeanstalk.com${url}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'cors',
    },
  })
    .then(response => response.json());
}

function get(url) {
  return fetch(`http://jacketpages-test.agiycq95jc.us-east-1.elasticbeanstalk.com${url}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'cors',
    },
  })
    .then(response => response.json());
}

function patch(url, data = {}) {
  return fetch(`http://jacketpages-test.agiycq95jc.us-east-1.elasticbeanstalk.com${url}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json());
}

const api = {
  post,
  get,
  patch,
};

export default api;
