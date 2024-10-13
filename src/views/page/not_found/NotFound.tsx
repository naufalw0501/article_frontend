// import {useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
    // const navigate = useNavigate();
    return (
        <div className={css.container}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                <div style={{ fontWeight: "600", color: "white" }}>
                    Something Missing, Page Not found !
                </div>
                {/* <button className='white-button' onClick={() => {navigate('/')}}>
                    Go Back To Home
                </button> */}
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

export default NotFound