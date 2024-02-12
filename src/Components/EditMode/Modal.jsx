import IntroductionForm from "./Forms/IntroductionForm";
import EducationForm from "./Forms/EducationForm";
import GeneralInfosForm from "./Forms/GeneralInfosForm";
import { useState } from "react";

export default function Modal(props) {
    const [temporaryData, setTemporaryData] = useState(props.data)

    const handleTemporaryDataChangeOnObject = (e) => {
        setTemporaryData({
                ...temporaryData,
                [props.editSection] : {...temporaryData[props.editSection], [e.target.name]: e.target.value}
            })
        }

    const handleTemporaryDataChangeOnArray = (e) => {
        setTemporaryData({
            ...temporaryData,
            [props.editSection]: temporaryData[props.editSection].map(item => {
                return e.target.parentNode.id == item.id
                    ? {...item, [e.target.name]: e.target.value}
                    : {...item}
            })
        })
    }

    return (
        <div className="edit-mode-modal">
            <form action="" onSubmit={() => props.saveDataChange(temporaryData)}>
                {props.editSection === "introduction" && <IntroductionForm temporaryData={temporaryData.introduction} handleTemporaryDataChange={handleTemporaryDataChangeOnObject} />}
                {props.editSection === "education" && <EducationForm temporaryData={temporaryData.education} handleTemporaryDataChange={handleTemporaryDataChangeOnArray} />}
                {props.editSection === "generalInfos" && <GeneralInfosForm temporaryData={temporaryData.generalInfos} handleTemporaryDataChange={handleTemporaryDataChangeOnObject} />}
                <button type="submit" >Save</button>
            </form>
        </div>
    )
}