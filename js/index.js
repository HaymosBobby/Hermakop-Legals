import { initializeApp } from 'firebase/app';

import { getFirestore, addDoc, collection} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDc1vHFOCuKVkJBm_PfZ8aJootfNWdKgRI",
  authDomain: "hermakop-consulting-f38d5.firebaseapp.com",
  projectId: "hermakop-consulting-f38d5",
  storageBucket: "hermakop-consulting-f38d5.appspot.com",
  messagingSenderId: "649769042688",
  appId: "1:649769042688:web:3fc7157266cea4a8ace9e5"
};

// Initialize App
initializeApp(firebaseConfig);

//Get data from database 
const db = getFirestore();

// Collection Ref
const colRef = collection(db, 'users');

// Submit Form
const getInputVal = (id) => {
  return document.getElementById(id).value;
}

const submitForm = (e) => {
  e.preventDefault();
  
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var area = getInputVal('area');
  var message = getInputVal('message');

  addDoc(colRef, {
    name,
    email,
    phone,
    area,
    message
  })
    .then(() => contactForm.reset());

  console.log(name, email, phone, area, message);

}

document.getElementById('contactForm').addEventListener('submit', submitForm);





//Post Article
  // const getPubVal = (id) => {
  //   return document.getElementById(id).value;
  // }

  const submitArticle = (e) => {
    e.preventDefault();

    var title = getInputVal('title');
    var content = getInputVal('content');

    console.log(title, content);
    
  }

  document.getElementById('article').addEventListener('submit', submitArticle);


