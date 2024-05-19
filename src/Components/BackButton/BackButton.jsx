
function BackButton() {
    const Back=()=>{
        window.history.back()
    }
  return (
    <>
        <button className="btn btn-light" onClick={Back}><i className="fa-solid fa-arrow-left"></i></button>
    </>
  )
}

export default BackButton