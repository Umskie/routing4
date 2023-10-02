import Home from "./components/Home/Home";
import ForgotPwd from "./components/Body/ForgotPwd";
import Body from "./components/Body/Body";
import CreateAccount from "./components/Body/CreateAccount";
import {createBrowserRouter,} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    
    {
      path:"/CreateAccount/",
      element: <CreateAccount/>
    },
 
    {
      path: "/Body",
      element: <Body/>
    },
    
    {
        path: "/ForgotPwd",
        element: <ForgotPwd/>
    }
   
     
  ]);

  export default router