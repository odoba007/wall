import Dashboard from '../../components/user'

function ProfilePage() {
  return (
    <div>
        <Dashboard>
        <div className="dashboard-content">
  <a style={{"float": "right"}} href="/dashboard"> Go back</a>
  <div className="card-form">
    <form action="" method="POST">
      

      
      
      <div className="input-field">
        <label htmlFor="first_name">First Name</label>
        <input disabled type="text" id='first_name' value={"Yelena"} />
      </div>

      <div className="input-field">
        <label htmlFor="last_name">Last Name</label>
        <input disabled type="text" id='last_name' value={"Bykov"} />
      </div>


       <div className="input-field">
        <label htmlFor="card-first-name">Social Security Number</label>
        <input id="card-first-name" type="text" value="08886***38" disabled />
      </div>
       <div className="input-field">
        <label htmlFor="card-first-name">Phone Number</label>
        <input id="card-first-name" type="text" value="(646) 331-7576" disabled />
      </div>

      <div className="">
        <div className="input-field">
          <label htmlFor="expiry-date">Date of birth</label>
          <input id="expiry-date" type="text" value="04/14/1980" disabled />
        </div>
      </div> 


      <div className="input-field">
        <label htmlFor="address1">Address 1</label>
        <input disabled type="text" id='address1' value={"2315 East 22nd St"} />
      </div>

      <div className="input-field">
        <label htmlFor="address2">Address 2</label>
        <input disabled type="text" id='address2' value={"Apt 2f"} />
      </div>

      <div className="input-field">
        <label htmlFor="city">City</label>
        <input disabled type="text" id='city' value={"Brooklyn"} />
      </div>

      <div className="state-zipcode">
        <div className="input-field">
          <label htmlFor="state">State</label>
          <input disabled type="text" id='state' value={"New York"} />
          
        </div>

        <div className="input-field">
          <label htmlFor="zipcode">Zip Code</label>
          <input disabled type="text" id='zipcode' value={"11229"} />
          
        </div>
      </div>

      <div className="confirm-btn" style={{width: "100%"}}>
        <div className="gradient-button">
          <button disabled type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>
        </Dashboard>
    </div>
  )
}

export default ProfilePage