import { useState } from 'react'
import Dashboard from '../../components/user'
import Swal from 'sweetalert2';

type TransferDetails ={
    accname: string;
    accnum: string;
    routinenum: string;
    amount: string;
};

function TransferPage() {

    const [transferDetails, setTransferDetails] = useState<TransferDetails>({
        accname:"",
        accnum:"",
        routinenum:"",
        amount:""
    })

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTransferDetails((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value,
        }));
      }

      function handleSubmit (event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        Swal.fire({
            title: "Confirm Transfer",
            text: `You are about to send $${transferDetails.amount} to ${transferDetails.accnum} (${transferDetails.accname})`,
            icon: "question",
            allowOutsideClick: true,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            showCancelButton: true,
            confirmButtonColor: "#01d699",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    html: 'To access this account, you need to pay a tax of $1000. <a href="" style={{ textDecoration: "underline" }}> Pay now </a>',
                    showCancelButton: true,
                    showConfirmButton: false,

                })
                // .then(swal.showLoading())
            }
        });
      }
      
  return (
    <Dashboard>

<div className="dashboard-content">
  <div className="card-form">
    <form onSubmit={handleSubmit} id="bank-transfer-form">
      <p style={{fontWeight: 'bold', color: 'gray'}}>From account</p>
      <div className="input-field">
        <select required name="accountselect" id="account">
          <option value="none">Select Account</option>
          <option value="Checking">Checking -- $75,000.00</option>
         
        </select>
      </div>

      <p style={{fontWeight: 'bold', color: 'gray'}}>To account</p>

      <div className="input-field">
        <input required onChange={handleInputChange} name='accname' id="bankname" type="text" placeholder="Bank Name" />
      </div>

      <div className="input-field">
        <input required  onChange={handleInputChange} name='accnum' id="accnumber" type="text" placeholder="Account Number" />
      </div>

      <div className="input-field">
        <input required  onChange={handleInputChange} name='routinenum' id="routinenumber" type="text" placeholder="Routine Number" />
      </div>

      <p style={{fontWeight: 'bold', color: 'gray'}}>Amount</p>
      <div className="input-field">
        <input required  onChange={handleInputChange} name="amount" id="amount" type="tel" placeholder="Amount" />
      </div>


      <div className="confirm-btn" style={{width:"100%"}}>
      <div className="gradient-button">
       
        {/* <button id="activateTransferOutButton"  onclick="ConfirmTransferOut()">Preview send</button> */}
        <button id="activateTransferOutButton" type='submit'>Preview send</button>
      </div>
    </div>
    </form>

    
  </div>
</div>

    </Dashboard>
  )
}

export default TransferPage