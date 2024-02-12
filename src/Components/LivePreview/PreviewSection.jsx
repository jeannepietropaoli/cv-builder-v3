import EditButton from "./EditButton";

export default function PreviewSection(props) {
    return (
        <section className="preview-section" id={props.sectionTitle} >
            <h2>{props.sectionTitle}</h2>
            <div className="preview-section-content">
                {props.children}
            </div>
            <EditButton switchToEditMode={props.switchToEditMode} />
        </section>
    )
}