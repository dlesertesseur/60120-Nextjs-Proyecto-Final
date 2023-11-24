import { BASE_URL } from "./config";

export const registerUser = async (body) => {
  let response = false;
  const url = `${BASE_URL}/api/users`;

  console.log("registerUser url ->", url, body);

  const ret = await fetch(url, {
    method: "POST",
    body: body,
  });

  const data = await ret.json();
  if (data.id) {
    response = true;
  } 
  
  return response;
};
