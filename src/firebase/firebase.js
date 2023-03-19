import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAg2LIs_02q6ZUmHMDa7sxX370IpOLR7Wk",
  authDomain: "draco-nft-original.firebaseapp.com",
  projectId: "draco-nft-original",
  storageBucket: "draco-nft-original.appspot.com",
  messagingSenderId: "906219283202",
  appId: "1:906219283202:web:6f30afb87747e0b2a9981b",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = firebase.analytics();

export default firebase;
