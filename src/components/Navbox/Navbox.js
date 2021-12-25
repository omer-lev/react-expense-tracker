import './Navbox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Navbox = () => {
    return (
        <div className="Navbox">
            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={faCreditCard} />
                </div>
                <p>title</p>
            </div>

            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <p>title</p>
            </div>

            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={faCoins} />
                </div>
                <p>title</p>
            </div>

            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <p>title</p>
            </div>

            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={faFileContract} />
                </div>
                <p>title</p>
            </div>

            <div className="title">
                <div className="icon">
                    <FontAwesomeIcon icon={faCommentDots} />
                </div>
                <p>title</p>
            </div>
        </div>
    )
}

export default Navbox;
