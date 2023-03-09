import './DecideDelete.css'

function DecideDelelte({dialogMessage,cancelDelete,changeDialogOnDelete}) {
  debugger
  if(!changeDialogOnDelete) {
    return (
      <div className="alertWrapper">
        <div className="contentAlertWrapper">
            <h2 className="messageText">{dialogMessage}</h2>
            <div className="twoButtonsContainer">
              <button className="alertButtton cancelButton" onClick={()=>cancelDelete()}>OK</button>
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className="alertWrapper">
      <div className="contentAlertWrapper">
          <h2 className="messageText">{dialogMessage}</h2>
          <div className="twoButtonsContainer">
            <button className="alertButtton cancelButton" onClick={()=>cancelDelete()}>Cancel</button>
            <button className="alertButtton deleteButton" onClick={()=>changeDialogOnDelete()}>Delete</button>
          </div>
      </div>
    </div>
  )
}

export default DecideDelelte
