function Backdrop(props: { close: () => any; zIndex?: number; }): JSX.Element {
    const { close, zIndex } = props;
  
    return (<div
      className="backdrop"
      onClick={close}
      style={{ zIndex: zIndex == null ? "2" : `${zIndex}` }}
    />);
  }
  
  export default Backdrop;
  