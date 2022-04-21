export const TextArea = (props) => {

    return <textarea placeholder="Введите сообщение..." className="textAreaComp" value={props.message} onChange={props.change}></textarea>
}