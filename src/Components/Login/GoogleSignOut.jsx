import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import AppBarContext from "../../Context/AppBarContext";
import LogoutIcon from "@mui/icons-material/Logout";

const clientId =
  "650114961683-4quord8pl0v8n0gpnvp8funhja8ijcf8.apps.googleusercontent.com";

function GoogleSignOut() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppBarContext);

  const onSuccess = () => {
    setIsAuthenticated(false);
    console.log("Logout successful!", isAuthenticated);
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText={<LogoutIcon />}
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default GoogleSignOut;
