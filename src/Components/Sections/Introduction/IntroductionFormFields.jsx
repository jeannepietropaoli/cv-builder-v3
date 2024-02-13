export default function IntroductionFormFields(props) {
    return (
        <div className="form-fields">
            <label htmlFor="introduction-text"></label>
            <input type="text" name="introduction-text" id="introduction-text" value={props.temporaryData} onChange={(e) => props.handleTemporaryDataChange(e)} />
        </div>
    )
}