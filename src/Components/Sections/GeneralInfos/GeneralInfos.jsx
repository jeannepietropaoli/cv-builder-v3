import { useState } from "react";
import Form from "../../EditMode/Form";
import GeneralInfosFormFields from "./GeneralInfosFormFields";
import Preview from "../../Preview/Preview";
import '../../../style/GeneralInfos.css'
import phoneLogo from '../../../assets/phone.svg'
import emailLogo from '../../../assets/mail.png'
import locationLogo from '../../../assets/location.svg'
import githubLogo from '../../../assets/profile.png'

export default function GeneralInfos() {
    const [data, setData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        title: 'Junior Web Developer',
        phone: '581 443-5651',
        email: 'johndoe@gmail.com',
        location: 'New York',
        github: 'github.com/john_doe_here'
    })

    const [temporaryData, setTemporaryData] = useState(data)

    const [editMode, setEditMode] = useState(false)

    const saveDataChange = () => {
        setData({...temporaryData})
        setEditMode(false)
    }

    const cancelChanges = () => {
        setData(data)
        setEditMode(false)
    }

    const handleTemporaryDataChange = (e) => {
        setTemporaryData({
            ...temporaryData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Preview switchToEditMode={() => setEditMode(true)} sectionName="generalInfos" >
                <h1>{`${data.firstName} ${data.lastName}`}</h1>
                <h2>{data.title}</h2>
                <ul className="general-infos--contact-list">
                    <li className="general-infos--contact-item">
                        <img className="illustrative-logo" src={phoneLogo} alt="phone logo" />
                        <span>{data.phone}</span>
                    </li>
                    <li className="general-infos--contact-item">
                        <img className="illustrative-logo" src={emailLogo} alt="mail logo" />
                        <span>{data.email}</span>
                    </li>
                    <li className="general-infos--contact-item">
                        <img className="illustrative-logo" src={locationLogo} alt="pin location logo" />
                        <span>{data.location}</span>
                    </li>
                    <li className="general-infos--contact-item">
                        <img className="illustrative-logo" src={githubLogo} alt="github logo" />
                        <span>{data.github}</span>
                    </li>
                </ul>
            </Preview>
        
            {editMode &&
                <Form saveDataChange={saveDataChange} cancelChanges={cancelChanges} >
                    <GeneralInfosFormFields temporaryData={temporaryData} handleTemporaryDataChange={handleTemporaryDataChange} />
                </Form>
            }
        </>
    )
}