import Login  from "../../Components/user/auth/login/Login"
import { Helmet } from 'react-helmet';
// import Heroimage from '../../../public/background.png'
const LoginPage =()=>{
    return(
        <div >
            <Helmet>
                <title >Login Page</title>
            </Helmet>
            <div>
                <Login/>
            </div>
        </div>
    )
}
export default LoginPage