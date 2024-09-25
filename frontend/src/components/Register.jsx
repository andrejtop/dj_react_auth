import '../App.css';
import { Box } from "@mui/material";
import MyTextField from "./Forms/myTextField.jsx";
import MyPassField from "./Forms/myPassField.jsx";
import MyButton from "./Forms/myButton.jsx";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className={"backgroundFon"}>
            <Box className={"whiteBox"}>
              <Box className={"itemBox"}>
                <Box className={"title"}>
                  User registration
                </Box>
              </Box>
              <Box className={"itemBox"}>
                <MyTextField label={"Email"}/>
              </Box>
              <Box className={"itemBox"}>
                <MyPassField label={"Password"}/>
              </Box>
              <Box className={"itemBox"}>
                <MyPassField label={"Confirm password"}/>
              </Box>
              <Box className={"itemBox"}>
                <MyButton label={"Register"}/>
              </Box>
              <Box className={"itemBox"}>
                <Link to="/login">
                  Do you have an account? Please Login!
                </Link>
              </Box>
            </Box>
        </div>
    )
}

export default Register