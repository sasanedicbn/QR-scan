
import '../App.css'

const Button = ({children, show, isLoading, setLoading}) => {
    let style = show ? 'disabled' : 'active';
    const handleClick = () => {
        if (!show && !isLoading) {
            setLoading(!isLoading);
         
        }
    };
    return (
        <button className={`button ${style}`} disabled={show} onClick={handleClick}>{children}</button>
    );
};

export default Button;
