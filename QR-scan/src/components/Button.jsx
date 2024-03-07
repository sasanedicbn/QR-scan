import '../App.css'

const Button = ({children, show, isLoading, setLoading,resetApp}) => {
    let style = show ? 'disabled' : 'active';
    const handleClick = () => {
        if (!show && !isLoading) {
            setLoading(!isLoading);
            resetApp()
        }
    };
    return (
        <button className={`button ${style}`} disabled={show} onClick={handleClick}>{children}</button>
    );
};

export default Button;
