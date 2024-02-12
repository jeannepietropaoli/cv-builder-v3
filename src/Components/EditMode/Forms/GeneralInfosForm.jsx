export default function GeneralInfosForm(props) {
    return (
        <>
            <label htmlFor="general-infos-first-name">First name</label>
            <input type="text" id="general-infos-first-name" name="firstName" value={props.temporaryData.firstName} onChange={(e) => props.handleTemporaryDataChange(e)}></input>

            <label htmlFor="general-infos-last-name">Last name</label>
            <input type="text" id="general-infos-last-name" name="lastName" value={props.temporaryData.lastName} onChange={(e) => props.handleTemporaryDataChange(e)}></input>

            <label htmlFor="general-infos-title">Title</label>
            <input type="text" id="general-infos-title" name="title" value={props.temporaryData.title} onChange={(e) => props.handleTemporaryDataChange(e)}></input>

            <label htmlFor="general-infos-phone">Phone</label>
            <input type="tel" id="general-infos-phone" name="phone" value={props.temporaryData.phone} onChange={(e) => props.handleTemporaryDataChange(e)}></input>

            <label htmlFor="general-infos-email">Email</label>
            <input type="email" id="general-infos-email" name="email" value={props.temporaryData.email} onChange={(e) => props.handleTemporaryDataChange(e)}></input>
        </>
    )
}