import { useState } from "react";
import Form from "../../EditMode/Form";
import IntroductionFormFields from "./IntroductionFormFields";
import Preview from "../../Preview/Preview";
import '../../../style/Introduction.css'

export default function Introduction() {
    const [data, setData] = useState('I am Jane, a Junior Web Developer with a solid grasp of front-end technologies such as HTML, CSS, JavaScript and ReactJS. Committed to creating visually appealing and functional websites, I am eager to contribute and expand skills in a collaborative and growth-oriented environment.')
    
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