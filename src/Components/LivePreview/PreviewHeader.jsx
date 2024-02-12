import EditButton from "./EditButton"

export default function PreviewHeader(props) {
    return (
        <section className="preview-section" id="preview-header">
            <div className="preview-header--main">
                <h1>{props.firstName + " " + props.lastName}</h1>
                <h2>{props.title}</h2>
            </div>
            <div className="preview-header--contact">
                <ul>
                    <li key={1}>{props.phone}</li>
                    <li key={2}>{props.email}</li>
                </ul>
        </div>
            <EditButton switchToEditMode={props.switchToEditMode} />
        </section>
    )
}