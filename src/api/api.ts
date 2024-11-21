const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const requestHelper = async (
  method: HttpMethod, 
  endpoint: string, 
  headers: object = {},
  payload: object = {}, 
) => {
  // Initialize request options
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  // Handle payload according to method
  if (['GET', 'DELETE'].includes(method)) {
    endpoint += '?' + new URLSearchParams(payload as Record<string, string>).toString();
  } else {
    options.body = JSON.stringify(payload);
  }

  // Make the http request
  try {
    const response = await fetch(`${BACKEND_URL}${endpoint}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return {};
  }
}

export default requestHelper;
