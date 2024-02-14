import EditButton from "./EditButton"
import "../../style/Preview.css"

export default function Preview(props) {
    return (
        <section className="preview" id={props.sectionName}>
            {props.children}
            <EditButton switchToEditMode={props.switchToEditMode} />
        </section>
    )
}