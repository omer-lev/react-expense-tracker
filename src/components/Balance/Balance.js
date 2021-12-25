import './Balance.css';

const Balance = () => {

    return (
        <div className='Balance'>
            <h3>Balance</h3>

            <div className="currencies">
                <div className='coin'>
                    <div className="dot"></div>

                    <h2>746$</h2>
                    <p>USD</p>
                </div>

                <div className='coin'>
                    <div className="dot"></div>

                    <h2>2351.25₪</h2>
                    <p>NIS</p>
                </div>
            </div>

            <div className="spendings">
                <div className="stats">
                    <h2>272.90₪</h2>
                    <p>Your montly spendings</p>
                </div>

                <div className="chart"></div>
            </div>

            <div className="earnings">
                <div className="stats">
                    <h2>452.50₪</h2>
                    <p>Your montly earnings</p>
                </div>

                <div className="chart"></div>
            </div>
        </div>
    )
}

export default Balance;
