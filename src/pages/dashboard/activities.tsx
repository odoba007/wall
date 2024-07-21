
import Dashboard from "../../components/user";


function ActivitiesPage() {
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
          
    

          <div className="transactions">
            <div
              style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}
              className="account-type-text"
            >
              <p>Transactions</p>
            </div>

            <div className="big-screen-txn">
              <div className="transaction-list">
                <div className="transaction-list-items">
                  <div
                    className="txn big-txn-symbol"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i
                      style={{ fontSize: "22px", color: "green" }}
                      className="fas fa-download"
                    ></i>
                  </div>

                  <div className="txn big-txn-date">
                    <p>20/07/24</p>
                  </div>

                  <div className="txn big-txn-summary">
                    <p style={{ fontSize: 15 }}>Malcom Pi Ltd - Insurance CR</p>
                  </div>

                  <div className="txn big-txn-amount">
                    <p>
                      &#36;75,000.00 <br />
                      <span>completed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="small-screen-txn">
              <div className="transaction-list">
                <div className="transaction-list-items">
                  <div
                    className="txn small-txn-symbol"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i
                      style={{ fontSize: "22px", color: "green" }}
                      className="fas fa-download"
                    ></i>

                    <div className="txn small-txn-date">
                      <p style={{ fontSize: 15 }}>20/07/24</p>
                    </div>
                  </div>

                  <div className="txn small-txn-summary">
                    <p style={{ fontSize: 15 }}>Malcom Pi Ltd - Insurance CR</p>
                  </div>

                  <div className="txn small-txn-amount">
                    <p style={{ fontSize: 15 }}>
                      &#36;75,000.00 <br />
                      <span>completed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export default ActivitiesPage;
