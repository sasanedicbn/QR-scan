import Button from "./Button"
function QRcode () {
    return(
        <div className="qr-container">
            <div className="qr-code">
            </div>
            <div className="qr-code-second">
                <Button>Download</Button>
                <p className="timer">10</p>
            </div>
        </div>
    )
}
export default QRcode;