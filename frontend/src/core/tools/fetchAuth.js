import { requestMethod } from '../enums/requestMethods.js';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchData = async (inputsObject, path, method) => {
  try {
    const url = `${API_BASE_URL}/${path}`;
    const httpMethod = requestMethod[method];

    console.log(inputsObject);
    console.log(httpMethod);
    console.log(url);

    const req = await fetch(url, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputsObject),
    });

    if (!req.ok) {
      throw new Error(`HTTP error! Status: ${req.status}`);
    }

    const res = await req.json();

    return res;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
};
