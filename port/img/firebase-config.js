export {firebaseConfig, init};

var firebaseConfig = {
  apiKey: "AIzaSyCC3SDyWHL-tZNS8Vf1IDdrKvkaPr0Bxbg",
  authDomain: "portfolio-email-subs.firebaseapp.com",
  databaseURL: "https://portfolio-email-subs-default-rtdb.firebaseio.com",
  projectId: "portfolio-email-subs",
  storageBucket: "portfolio-email-subs.appspot.com",
  messagingSenderId: "443744065425",
  appId: "1:443744065425:web:8015b84ba37c389eb86c30",
  measurementId: "G-JMGXDZJ9LK"
};
function init(){
firebase.initializeApp(firebaseConfig);
firebase.analytics();
}
