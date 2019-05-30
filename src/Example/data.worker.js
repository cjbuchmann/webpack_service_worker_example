// service workers must reference self. So in this case, this _should_ be allowed
/* eslint-disable no-restricted-globals */

// Post data to parent thread

function startWorking() {
  self.postMessage({ message: 'I am working!' });
}

// Respond to message from parent thread
self.addEventListener('message', (event) => startWorking())
