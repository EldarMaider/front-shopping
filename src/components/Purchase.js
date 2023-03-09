import "./Purchase.css"

function DecideDelelte({changeDialogOnDelete,cancelPurchase,dialogMessage,passSubmit}) {

    const clickPurchase = () => {
        passSubmit()
    }

  return (
    <div className="alertWrapper">
      <div className="contentAlertWrapper">
          <h2 className="messageText">{dialogMessage}</h2>
          <div className="twoButtonsContainer">
            <button className="alertButtton cancelButton" onClick={()=>cancelPurchase()}>Cancel</button>
            <button className="alertButtton-Purchase" onClick={()=>clickPurchase()}>Order</button>
          </div>
      </div>
    </div>
  )
}

export default DecideDelelte
