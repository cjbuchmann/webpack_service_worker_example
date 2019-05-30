import React, { useEffect, useState } from 'react';
import Worker from './data.worker.js';

let worker;
export default function Example() {
  const [message, setMessage] = useState('Nothing');
  useEffect(() => {
    worker = new Worker();

    worker.onmessage = (e) => {
      setMessage(e.data.message);
    };

    worker.postMessage({});
  }, [])
  return (
    <div>Example: Web worker says : {message}</div>
  );
}
