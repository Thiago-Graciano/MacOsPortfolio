import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={ () => closeWindow(target) }/>
      <div className="minimize" onClick={""}/>
      <div className="maximize" onClick={""} />
    </div>
  )
}

export default WindowControls