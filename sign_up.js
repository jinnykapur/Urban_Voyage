(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyB_pNW5NUmAlDj3-sw5T51_lPloqe_uc5o",
        authDomain: "authentication-system-1-be075.firebaseapp.com",
        databaseURL: "https://authentication-system-1-be075-default-rtdb.firebaseio.com",
        projectId: "authentication-system-1-be075",
        storageBucket: "authentication-system-1-be075.appspot.com",
        messagingSenderId: "655707881023",
        appId: "1:655707881023:web:de99d9ac56d192dc3d028a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            window.location.href = "index.html" ;
        }).catch(err => {
            alert(err.message);
        });

    });


}());
