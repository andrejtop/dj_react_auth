import '../App.css';
import { Box } from "@mui/material";
import MyTextField from "./Forms/myTextField.jsx";
import MyPassField from "./Forms/myPassField.jsx";
import MyButton from "./Forms/myButton.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import AxiosInstance from "./AxiosInstance.jsx";

const Login = () => {
    const navigate = useNavigate();
    const {control, handleSubmit} = useForm();
    const submission = (data) => {
      AxiosInstance.post(
        "login/",{
          email: data.email,
          password: data.password,
        })
      .then((response) => {
        console.log(response)
        localStorage.setItem("Token", response.data.token)
        navigate("/home")
      })
      .catch((error) => {
        console.log('Error login',error)
      })
    }
    return (
        <div className={"backgroundFon"}>
            <form onSubmit={handleSubmit(submission)}>
            <Box className={"whiteBox"}>
              <Box className={"itemBox"}>
                <Box className={"title"}>
                  Login for auth App
                </Box>
              </Box>
              <Box className={"itemBox"}>
                <MyTextField label={"Email"} name={"email"} control={control}/>
              </Box>
              <Box className={"itemBox"}>
                <MyPassField label={"Password"} name={"password"} control={control}/>
              </Box>
              <Box className={"itemBox"}>
                <MyButton label={"Login"} type={"submit"} />
              </Box>
              <Box className={"itemBox"} sx={{flexDirection: "column"}}>
                <Link to="/register">
                  No account? Register
                </Link>
              </Box>
            </Box>
            </form>
        </div>
    )
}

export default Login