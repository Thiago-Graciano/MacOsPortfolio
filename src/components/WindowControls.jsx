import useWindowStore from "#store/window.js";

const WindowControl = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={ () => closeWindow(target) }/>
      <div className="minimize" onClick={""}/>
      <div className="maximize" onClick={""} />
    </div>
  )
}

export default WindowControl