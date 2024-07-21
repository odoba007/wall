
import Dashboard from "../components/user";

function DashboardPage() {
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

export default DashboardPage;
