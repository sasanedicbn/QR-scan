import Button from "./Button"
function QRcode ({count}) {
    return(
        <div className="qr-container">
            <div className="qr-code">
            </div>
            <div className="qr-code-second">
                <Button>Download</Button>
                <p className="timer">Timer: {count.toString().padStart(2, '0')}</p>
            </div>
        </div>
    )
}
export default QRcode;