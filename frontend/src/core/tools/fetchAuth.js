import { requestMethod } from '../enums/requestMethods.js';

const API_BASE_URL = 'http://127.0.0.1/api/';

export const fetchData = async (inputsObject, path, method) => {
  try {
    const url = `${API_BASE_URL}/${path}`;

    const req = await fetch(url, {
      method: requestMethod[method],
      body: JSON.stringify(inputsObject),
      mode: 'no-cors',
    });

    const res = await req.json();

    console.log(res);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
