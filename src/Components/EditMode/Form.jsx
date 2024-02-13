import "../../style/Form.css"

export default function Form(props) {
    return (
        <div className="modal">
            <form action="" onSubmit={props.saveDataChange}>
                {props.children}
                <button className="save-button" type="submit">Save</button>
                <button className="cancel-button" type="button" onClick={props.cancelChanges}>Cancel</button>
            </form>
        </div>
    )
}