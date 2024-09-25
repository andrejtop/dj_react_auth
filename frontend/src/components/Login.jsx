import '../App.css';
import { Box } from "@mui/material";
import MyTextField from "./Forms/myTextField.jsx";
import MyPassField from "./Forms/myPassField.jsx";
import MyButton from "./Forms/myButton.jsx";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={"backgroundFon"}>
            <Box className={"whiteBox"}>
              <Box className={"itemBox"}>
                <Box className={"title"}>
                  Login for auth App
                </Box>
              </Box>
              <Box className={"itemBox"}>
                <MyTextField label={"Email"}/>
              </Box>
              <Box className={"itemBox"}>
                <MyPassField label={"Password"}/>
              </Box>
              <Box className={"itemBox"}>
                <MyButton label={"Login"}/>
              </Box>
              <Box className={"itemBox"}>
                <Link to="/register">
                  No account? Register
                </Link>
              </Box>
            </Box>
        </div>
    )
}

export default Login