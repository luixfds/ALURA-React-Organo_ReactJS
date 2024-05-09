import "./TextField.css"

const TextField = (props) => {
    console.log(props.label)

    return (
        <div className="text-field">
            <label>
                { props.label}
            </label>
            <input placeholder={`${props.placeholder}...`}/>
        </div>
    )
}
// outro formato um pouco mais atualizado de components react 
export default TextField