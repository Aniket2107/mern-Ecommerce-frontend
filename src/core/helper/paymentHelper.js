import { API } from "../../backend";

export const stripePayment = (userId, token, mainBody) => {
  return fetch(`${API}stripepayment/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(mainBody),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getToken = (userId, token) => {
  return fetch(`${API}/payment/gettoken/bt/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const processPaymentb = (userId, token, paymentinfo) => {
  return fetch(`${API}/payment/bt/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentinfo),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
