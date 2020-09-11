import { API } from "../../backend";

export const postForm = (values) => {
  return fetch(`${API}contactus`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
