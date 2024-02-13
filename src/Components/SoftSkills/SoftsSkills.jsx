import { useState } from "react";
import Preview from "../Preview/Preview";
import Form from "../EditMode/Form";
import SoftSkillsFormFields from "./SoftSkillsFormFields";

export default function SoftSkills() {
    const [data, setData] = useState(['Teamwork', 'Problem-solving', 'Time management', 'Adaptability', 'Creativity'])

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

    const handleTemporaryDataChange = (e, skillIndex) => {
        setTemporaryData(temporaryData.map((skill, index) => {
            return index == skillIndex
                ? e.target.value
                : skill
        }))
    }

    return (
        <>
            <Preview switchToEditMode={() => setEditMode(true)} sectionName="softSkills" >
                <h2 className="section-title">Soft Skills</h2>    
                <ul>
                    {data.map(skill => <li key={skill} className="blue">{skill}</li>)}
                </ul>
            </Preview>

            {editMode &&
                <Form saveDataChange={saveDataChange} cancelChanges={cancelChanges} >
                    <SoftSkillsFormFields temporaryData={temporaryData} handleTemporaryDataChange={handleTemporaryDataChange} />
                </Form>
            }

        </>
    )
}