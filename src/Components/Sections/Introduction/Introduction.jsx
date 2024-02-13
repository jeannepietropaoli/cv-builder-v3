import { useState } from "react";
import Form from "../../EditMode/Form";
import IntroductionFormFields from "./IntroductionFormFields";
import Preview from "../../Preview/Preview";
import '../../../style/Introduction.css'

export default function Introduction() {
    const [data, setData] = useState('I am a web developer with 5 years of experience. I am passionate about my work and I am always looking for new challenges. I am a team player')
    
    const [temporaryData, setTemporaryData] = useState(data)
    
    const [editMode, setEditMode] = useState(false)

    const saveDataChange = () => {
        setData(temporaryData)
        setEditMode(false)
    }

    const cancelChanges = () => {
        setTemporaryData(data)
        setEditMode(false)
    }

    const handleTemporaryDataChange = (e) => {
        setTemporaryData(e.target.value)
    }

    return (
        <>
            <Preview switchToEditMode={() => setEditMode(true)} sectionName="introduction" >
                <h2 className="section-title">Introduction</h2>
                <p>{data}</p>
            </Preview>

            {editMode &&
                <Form saveDataChange={saveDataChange} cancelChanges={cancelChanges} >
                    <IntroductionFormFields temporaryData={temporaryData} handleTemporaryDataChange={handleTemporaryDataChange} />
                </Form>
            }
        </>
    )
}