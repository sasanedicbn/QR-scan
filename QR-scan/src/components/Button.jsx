
import '../App.css'

const Button = ({children, show}) => {
    let style = show ? 'disabled' : 'active';
    return (
        <button className={`button ${style}`} disabled={show}>{children}</button>
    );
};

export default Button;
