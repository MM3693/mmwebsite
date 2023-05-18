import axios from "axios";
export const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllUsers() {
  return await axios.get(`${BASE_URL}/users/all`);
}

export async function getTransactionValues() {
  return await axios.get(`${BASE_URL}/lobby/getValueAnalytics`);
}

export async function getGamePlay() {
  return await axios.get(`${BASE_URL}/lobby/getTimeAnalytics`);
}

export const getWalletsChartsData = async () => {
  return await axios.get(`${BASE_URL}/users/wallets-history`);
};

export const getActiveUsersChartsData = async () => {
  return await axios.get(`${BASE_URL}/users/active-users-history`);
};
