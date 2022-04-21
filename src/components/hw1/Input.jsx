export const Input = (props) => {

    return <input autoFocus className="inputComp" type='text' value={props.author} onChange={props.change} placeholder="Ваше имя"></input>
}