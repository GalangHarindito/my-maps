const Input = ({type, label, onChange}) => {
    return(
        <div>
            <label>{label}</label>
            <input type={type} onChange={onChange} />
        </div>
    )
}

export default Input;