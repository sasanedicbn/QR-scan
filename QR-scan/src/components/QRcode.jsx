
import Button from "./Button";

function QRcode ({count}) {
    const showButton = count === 0;

    return(
        <div className="qr-container">
            <div className={`qr-code ${showButton ? 'disabled' : 'active'}`}>
               {showButton ? <Button show={false}>Generate</Button> : null}
            </div>
            <div className="qr-code-second">
                <Button show={showButton}>Download</Button>
                <p className="timer">Timer: {count.toString().padStart(2, '0')}</p>
            </div>
        </div>
    );
}

export default QRcode;


