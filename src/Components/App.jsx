import '../style/App.css'
import { useState } from 'react'
import GeneralInfos from './Sections/GeneralInfos/GeneralInfos.jsx'
import Introduction from './Sections/Introduction/Introduction.jsx'
import Education from './Sections/Education/Education.jsx'
import Experiences from './Sections/Experiences/Experiences.jsx'
import HardSkills from './Sections/HardSkills/HardSkills.jsx'
import SoftSkills from './SoftSkills/SoftsSkills.jsx'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

function App() {
  const componentToPrint = useRef();

  const print = useReactToPrint({
    content: () => componentToPrint.current,
  });

  const handlePrint = () => {
    setPrintMode(true);
    print();
  }

  return (
    <>
      <div className='app' ref={componentToPrint}>
          <GeneralInfos />
          <Introduction />
          <div className="left-side">
            <HardSkills />
            <SoftSkills />
          </div>
          <div className="right-side">
            <Education />
            <Experiences />
          </div>
      </div>
      <button className='print-button' onClick={handlePrint}><span>⎙</span></button>
    </>
  )
}

export default App
