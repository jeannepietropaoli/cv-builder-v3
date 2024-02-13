export default function IntroductionFormFields(props) {
    return (
        <ul className="form-fields">
            <li>
                <label htmlFor="introduction-text"></label>
                <textarea type="text" name="introduction-text" id="introduction-text" value={props.temporaryData} onChange={(e) => props.handleTemporaryDataChange(e)} />
            </li>
        </ul>
    )
}