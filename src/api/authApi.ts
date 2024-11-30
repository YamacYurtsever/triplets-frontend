import requestHelper from "./api";

const requestAuthRegister = async (name: string, email: string, password: string) => {
  const headers = {};
  const payload = { name, email, password };
  const data =  await requestHelper('POST', '/auth/register', headers, payload);
  return data;
};

const requestAuthLogin = async (email: string, password: string) => {
  const headers = {};
  const payload = { email, password };
  const data =  await requestHelper('POST', '/auth/login', headers, payload);
  return data;
};

const requestAuthLogout = async (token: string) => {
  const headers = { token };
  const payload = {};
  const data =  await requestHelper('POST', '/auth/logout', headers, payload);
  return data;
};

export { requestAuthRegister, requestAuthLogin, requestAuthLogout };
