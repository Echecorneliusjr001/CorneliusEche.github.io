// Firebase configuration
	
const firebaseConfig = {
apiKey: "AIzaSyAu93yJ9L_E7_wJK7gfiEdJG2dqk5l4lE4",
authDomain: "messageform-website.firebaseapp.com",
databaseURL: "https://messageform-website-default-rtdb.firebaseio.com",
projectId: "messageform-website",
storageBucket: "messageform-website.appspot.com",
messagingSenderId: "580185648057",
appId: "1:580185648057:web:777bcd5ca3d17fab666468"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
		
// Define messageformDB
var messageformDB = firebase.database().ref("messageform");



document.getElementById("messageform").addEventListener("submit", submitForm);


 
function submitForm(e) {
    e.preventDefault();

    // Get form elements by ID
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert after 2000 milliseconds (2 seconds)
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);
}

const saveMessages = (name, emailid, msgContent) => {
    // Push data to Firebase using messageformDB
    messageformDB.push({
        name: name,
        emailid: emailid,
        msgContent: msgContent
    });

    // Log the data (optional)
    console.log(name, emailid, msgContent);

    // Reset the form after submission (optional)
    document.getElementById("messageform").reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};