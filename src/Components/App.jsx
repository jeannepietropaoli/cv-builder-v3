import '../style/App.css'
import { useState } from 'react'
import GeneralInfos from './Sections/Education/GeneralInfos/GeneralInfos.jsx'
import Introduction from './Sections/Education/Introduction/Introduction.jsx'
import Education from './Sections/Education/Education.jsx'

function App() {
const [editSection, setEditSection] = useState("education")

  return (
    <div className='app'>
        <GeneralInfos />
        <Introduction />
        <Education />
    </div>
  )
}

export default App
