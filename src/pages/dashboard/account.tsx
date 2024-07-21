
import Dashboard from "../../components/user";


function AccountPage() {
  return (
    <div>
      <Dashboard>
        <div id="my-notification" className="notification-warning">
          <p>
            To access this account, you need to pay a tax of $1000.{" "}
            <a href="" style={{ textDecoration: "underline" }}>
              Pay now
            </a>
          </p>
        </div>
        <div className="dashboard-content">
          <h3 style={{fontWeight:"bold"}}>Welcome, Yelena</h3>
          <br />
          <div className="accounts">
            <div
              style={{ width: "100%" }}
              className="dollar-account account-div"
            >
              <a href="">
                <div className="account-type-text">
                  <p>
                    Bank Account *3549
                    <span
                      style={{ float: "right", marginRight: "10px" }}
                    ></span>
                  </p>
                </div>
              </a>
              <br />
              <p style={{ marginLeft: "10px" }}>Available balance</p>
              <div className="account-balance-text">
                <h1>&#36;75,000.00</h1>
              </div>

              <p style={{ marginLeft: "10px" }}>Current balance</p>
              <div className="current-balance">
                <h2>&#36;0.00</h2>
              </div>
            </div>
          </div>

          
          <br />


       
        </div>
      </Dashboard>
    </div>
  );
}

export default AccountPage;
