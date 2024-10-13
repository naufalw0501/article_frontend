import { useContext, useState } from 'react';
import css from './Home.module.css';
import { AuthService } from '../../../data/service/AuthService';
import { PiUserCircleFill } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import Login from "../../asset/image/Login.png"
import { useNavigate } from "react-router-dom";
import AppContext from '../../../Context';
import { MiniAlertEntity } from '../../layout/alert/AlertEntity';

const Home = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate();
    const context = useContext(AppContext);
    const setContextLoading = context.setContextLoading;
    const setContextUserEntity = context.setContextUserEntity;
    const contextShowMiniAlertFunc = context.contextShowMiniAlertFunc;

    const handleClickLogin = async () => {
        try {
            const result = await AuthService.login(username, password);
            setContextLoading(true)
            if (result.username != null) {
                navigate('/dashboard');
                setContextUserEntity(result)
                contextShowMiniAlertFunc(new MiniAlertEntity({ title: "Login Success", messages: `Welcome ${result.username}`, level: 1, duration: 5000 }));
                setContextLoading(false)}
        } catch (error: any) {
            setContextLoading(false)
            contextShowMiniAlertFunc(new MiniAlertEntity({ title: "Error Login", messages: error.toString(), level: 3, duration: 5000 }));
        }
    }

    return (
        <div className={css.container}>

            {/* Login Form */}
            <div className={css.loginForm}>
                <div>
                    <img src={Login} className={css.loginImage} />
                </div>
                <h1 className={css.loginTitle}>User Login</h1>
                <div className={css.loginFields}>
                    <div className={css.inputField}>
                        <PiUserCircleFill className={css.iconStyle} />
                        <input style={{ width: "100%" }} placeholder='Username' type='text' onChange={(event: any) => { setUsername(event.target.value) }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleClickLogin();
                                }
                            }}
                        />
                    </div>
                    <div className={css.inputField}>
                        <RiLockPasswordFill className={css.iconStyle} />
                        <input style={{ width: "100%" }} placeholder='Password' type='password' onChange={(event: any) => { setPassword(event.target.value) }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleClickLogin();
                                }
                            }}
                        />
                    </div>
                    <button className={css.loginButton} onClick={() => { handleClickLogin() }}>
                        Login
                    </button>
                </div>
            </div>

            {/* Wave */}
            <svg className={css.waveSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#085D83', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#085D83', stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                <path fill="url(#grad)" d="M0,96L48,80C96,64,192,32,288,21.3C384,11,480,21,576,69.3C672,117,768,203,864,245.3C960,288,1056,288,1152,240C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Home;
