import './Bottombar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const BottomBar = () => {
    return (
        <div className="Bottombar">
            <div className="links">
                <FontAwesomeIcon icon={faThLarge} />
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faSpa} id='logo' />
                <FontAwesomeIcon icon={faClipboardList} />
                <FontAwesomeIcon icon={faUserAlt} />
            </div>
        </div>
    )
}

export default BottomBar
