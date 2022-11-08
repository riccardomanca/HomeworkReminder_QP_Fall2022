import logo from './logo.svg';
import './App.css';
// import LoginButton from "./components/login";
// import LogoutButton from "./components/logout";
import {useEffect} from 'react';
// import {gapi} from 'gapi-script';

// const client_id = "499229867669-f080r1qa50rk020q00k838bllt5jqsmt.apps.googleusercontent.com";

function App() {

  function handleCallBackResponse(response){
    console.log("Encoded JWT ID Token: " + response.credential);
  }

  useEffect(() => {
     /* global google */ 
    google.accounts.id.initialize({
      client_id: "499229867669-f080r1qa50rk020q00k838bllt5jqsmt.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    // function start() {
    //   gapi.client.init({
    //     clientId: client_id,
    //     scope: ""
    //   })
    // };

    // gapi.load('client:auth2', start);
  }, []);

  //var accessToken = gapi.auth.getToken().access_token;


  return (
   <div className= "App">
      <div id="signInDiv"></div>
   </div>
  );
}

export default App;
