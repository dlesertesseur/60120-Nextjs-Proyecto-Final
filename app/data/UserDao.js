import { config } from "../config";

export const registerUserInfo = async (body) => {
  let response = false;
  const url = `${config.APP_DOMAIN}/api/users`;

  const ret = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await ret.json();
  if (data.id) {
    throw new Error("Error creating user");
  } 
  
  return response;
};

export async function getUserByEmail(email) {
  const url = `/api/users/${email}`;
  const ret = await fetch(url, { cache: "no-store" });
  const data = await ret.json();
  return data;
}
