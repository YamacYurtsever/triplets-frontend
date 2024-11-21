import requestHelper from "./api";

const requestMessage = async () => {
  const data =  await requestHelper('GET', '/message');
  return data;
};

export { requestMessage };
