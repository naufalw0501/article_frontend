import React from "react";
import popup from "./Popup.module.css";
import Backdrop from "../backdrop/Backdrop";
import { IoIosCloseCircle } from "react-icons/io";

export default function Popup(props: {
    popupTitle: string;
    showPopup: boolean;
    setShowPopup: (val: boolean) => void;
    popupContent: React.JSX.Element;
}) {
    const { popupTitle, showPopup, setShowPopup, popupContent } = props;

    return (
        <>
            {showPopup && <Backdrop close={() => setShowPopup(false)} />}
            <div className={popup.modalmobile} id={showPopup ? undefined : popup.hide}>
                <div className={popup.closeButton} onClick={() => { setShowPopup(false) }}><IoIosCloseCircle /></div>
                {popupTitle != null ? (
                    <h2 style={{textAlign: "center", margin: "0"}}>
                        {popupTitle.toUpperCase().replace("_", " ")}
                    </h2>
                ) : (
                    <></>
                )}
                <div style={{marginBottom: "1vh"}}>
                    {popupContent}
                </div>
            </div>
        </>
    );
}
