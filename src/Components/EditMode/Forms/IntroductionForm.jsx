export default function IntroductionForm(props) {
    return (
        <>
            <label htmlFor="introduction-text">Introduction</label>
            <textarea id="introduction-text" name="text" value={props.temporaryData.text} onChange={(e) => props.handleTemporaryDataChange(e)}></textarea>
        </>
    )
}