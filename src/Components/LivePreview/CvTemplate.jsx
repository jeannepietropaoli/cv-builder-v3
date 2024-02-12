import {useState} from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewSection from "./PreviewSection";
import Introduction from "../Sections/Education/Introduction/Introduction";
import Education from "../Sections/Education/Education";

export default function CvTemplate(props) {
    return (
        <div className="live-preview-container">
            <PreviewHeader {...props.generalInfos} switchToEditMode={props.switchToEditMode} />
            <PreviewSection sectionTitle="introduction" switchToEditMode={props.switchToEditMode} >
                <Introduction {...props.introduction} />
            </PreviewSection>
            <PreviewSection sectionTitle="education" switchToEditMode={props.switchToEditMode}>
                <Education education={props.education} />
            </PreviewSection>
        </div>
    )
}