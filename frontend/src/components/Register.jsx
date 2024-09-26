import '../App.css';
import { Box } from "@mui/material";
import MyTextField from "./Forms/myTextField.jsx";
import MyPassField from "./Forms/myPassField.jsx";
import MyButton from "./Forms/myButton.jsx";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {control, handleSubmit} = useForm();
  const submission = (data) => {
    AxiosInstance.post(
      "register/",{
        email: data.email,
        password: data.password,
      })
    .then(() => {
      navigate("/")
    })
  }
  return (
        <div className={"backgroundFon"}>
            <form onSubmit={handleSubmit(submission)}>
            <Box className={"whiteBox"}>
              <Box className={"itemBox"}>
                <Box className={"title"}>
                  User registration
                </Box>
              </Box>
              <Box className={"itemBox"}>
                <MyTextField label={"Email"} name={"email"} control={control}/>
              </Box>
              <Box className={"itemBox"}>
                <MyPassField label={"Password"} name={"password"} control={control}/>
              </Box>
              <Box className={"itemBox"}>
                <MyPassField label={"Confirm password"} name={"password2"} control={control}/>
              </Box>
              <Box className={"itemBox"}>
                <MyButton label={"Register"} type={"submit"}/>
              </Box>
              <Box className={"itemBox"}>
                <Link to="/">
                  Do you have an account? Please Login!
                </Link>
              </Box>
            </Box>
            </form>
        </div>
    )
}

export default Register