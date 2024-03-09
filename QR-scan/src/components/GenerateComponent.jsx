import '../App.css'

const GenerateComponent = ({children, ...props}) => {
    return(
        <div {...props}>
        {children}
      </div>
    )
}
export default GenerateComponent;