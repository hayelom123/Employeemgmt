import { SignIn } from "../components/signin";
import IRoute from "./routeInterface";
import { SignUp } from './../components/signup';
import Home  from "../components/home";
const routes: IRoute[] = [
    {
        path: "/",
        name: "Home Page",
        component: Home,
        exact:true
    },
    {
        path: "/signin",
        name: "SignIn page",
        component: SignIn,
        exact:true
        
    },
    {
        path: "/signup",
        name: "SignUp page",
        component: SignUp,
        exact:false
        
    },
];
export default routes;