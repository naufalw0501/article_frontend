import { useEffect, useRef } from "react";
import css from "./MiniAlert.module.css";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoMdAlert } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function MiniAlert(props: {
    level?: number;
    duration?: number;
    messages?: string;
    title?: string;
    showMiniAlert?: boolean;
    setShowMiniAlert: (val: boolean) => void;
}) {
    const { level, duration, messages, title, showMiniAlert, setShowMiniAlert } = props;
    const durationRef = useRef(duration);
    useEffect(() => {
        const interval = setInterval(() => setShowMiniAlert(false), durationRef.current ?? 10000);
        return () => {
            if (interval != null) {
                clearInterval(interval);
            }
        }
    }, [setShowMiniAlert]);
    return (
        <>
            <div className={css.container} id={showMiniAlert ? undefined : css.hide}>
                {level === 1
                    ? <div className={css.icon}><IoMdCheckmarkCircle /></div>
                    : level === 2
                        ? <div className={css.icon} style={{ color: "orange" }}><IoMdAlert /></div>
                        : <div className={css.icon} style={{ color: "var(--rose-500)" }}><IoMdCloseCircle /></div>}
                <div className={css.containerText}>
                    {title && <div className={css.title} style={{ color: (level === 1 ? "var(--green-param)" : level === 2 ? "orange" : "var(--rose-500)") }}>{title}</div>}
                    <div className={css.description}>{messages ?? ""}</div>
                </div>
                <div className={css.close} onClick={() => { setShowMiniAlert(false) }}>
                    <IoMdCloseCircleOutline />
                </div>
            </div>
        </>
    );
}
