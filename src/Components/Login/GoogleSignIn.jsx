import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import AppBarContext from "../../Context/AppBarContext";

const clientId =
  "650114961683-4quord8pl0v8n0gpnvp8funhja8ijcf8.apps.googleusercontent.com";

function GoogleSignIn() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppBarContext);
  const onSuccess = (res) => {
    setIsAuthenticated(true);
    console.log(
      "Login success! Current user : ",
      res.profileObj,
      isAuthenticated
    );
  };
  const onFailure = (res) => {
    console.log("Login failed! res : ", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default GoogleSignIn;
