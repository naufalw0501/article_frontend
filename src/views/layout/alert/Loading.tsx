import css from "./Loading.module.css";

export default function Loading(props: {
    showLoading?: boolean;
}) {
    const { showLoading } = props;
    return (
        <>
            <div className={css.container} id={showLoading ? undefined : css.hide}>
                <div className={css.loader}></div>
                <div style={{marginLeft: "10px"}}>Loading... </div>
            </div>
        </>
    );
}
