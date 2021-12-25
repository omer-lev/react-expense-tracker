import './Header.css';
import profilePic from '../../img/profile-pic.png';

const Header = () => {
    return (
        <div className="Header">
            <div className="greet">
                <h1>Hello Omer!</h1>

                <p>176*****787</p>
            </div>

            <div className="profile-pic">
                <img src={profilePic} alt="" srcSet="" />
            </div>
        </div>
    )
}

export default Header;
