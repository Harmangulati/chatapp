const firebaseConfig = {
    apiKey: "AIzaSyAOvcdUA9p877jB4xparNQZ12M_SlHiTu0",
    authDomain: "kwitter-23736.firebaseapp.com",
    databaseURL: "https://kwitter-23736-default-rtdb.firebaseio.com",
    projectId: "kwitter-23736",
    storageBucket: "kwitter-23736.appspot.com",
    messagingSenderId: "587388896764",
    appId: "1:587388896764:web:2b42cfd6a095ad18bb1e79"
  };
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value',
function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){     
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message:msg,
like:0      
});
document.getElementById("msg").value=" ";     
}
