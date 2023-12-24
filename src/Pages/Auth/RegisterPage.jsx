import  Register  from "../../Components/user/auth/register/Register"
import { Helmet } from 'react-helmet';

const RegisterPage =()=>{
    return(
        <div style={{ backgroundColor: '#31304D', minHeight: '100vh' }}>
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div>
                <Register/>
            </div>
        </div>
    )
}
export default RegisterPage