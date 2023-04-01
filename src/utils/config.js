import axios from "axios";
export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL || "https://api.mmstudios.io";

export async function getAllUsers(token) {
  return await axios.get(`${BASE_URL}/users/all`);
}

export async function getTransactionValues(token) {
  return await axios.get(`${BASE_URL}/lobby/getValueAnalytics`);
}

export async function getGamePlay(token) {
  return await axios.get(`${BASE_URL}/lobby/getTimeAnalytics`);
}

export const getWalletsChartsData = async (token) => {
  return await axios.get(`${BASE_URL}/users/wallets-history`);
};

export const getActiveUsersChartsData = async (token) => {
  return await axios.get(`${BASE_URL}/users/active-users-history`);
};
