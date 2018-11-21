import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD3BpYJteFeRqUkyE5CZLnSxdlMwTj5XM4',
  authDomain: 'instagram-clone-d3592.firebaseapp.com',
  databaseURL: 'https://instagram-clone-d3592.firebaseio.com/',
  storageBucket: '<BUCKET>.appspot.com',
};
firebase.initializeApp(config);

export const authenticated = firebase.auth(); 
export const dataBase = firebase.database(); 
