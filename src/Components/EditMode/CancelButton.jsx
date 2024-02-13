export default function CancelButton(props) {
    return (
        <button className="cancel-button" onClick={props.switchToPreviewMode}>Cancel</button>
    )
}