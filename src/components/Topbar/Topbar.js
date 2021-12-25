import './Topbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
    return (
    <div className="Topbar">
        <div className="clock">
            <p>9:41</p>
        </div>

        <div className="stats">
            <FontAwesomeIcon icon={faMapMarker} />
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faBatteryThreeQuarters} />
        </div>
    </div>
    )
}

export default Topbar;


