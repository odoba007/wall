import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface DashboardProps {
  children: ReactNode;
}

const toggleNavBar = () => {
  document.getElementById("open-nav")?.classList.toggle("hide-side-nav");
  document.getElementById("close-nav")?.classList.toggle("hide-side-nav");
};

function Dashboard({ children }: DashboardProps) {
  return (
    <div>
      <div className="user-navbar">
        <div className="user-nav-flex">
          <div id="open-nav" className="user-brand">
            <button onClick={() => toggleNavBar()}>
              <i
                style={{ fontSize: "27px", color: "rgb(122, 191, 255)" }}
                className="fas fa-bars"
              ></i>
            </button>
          </div>

          <div className="user-options">
            <a href="/dashboard/profile">
              <span style={{ alignSelf: "center" }}>
                <i className="far fa-user-circle my-fa-icon"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div id="close-nav" className="side-nav hide-side-nav">
        <div className="small-screen-close-button">
          <button onClick={() => toggleNavBar()}>
            <i
              style={{ fontSize: "27px", color: "rgb(122, 191, 255)" }}
              className="fas fa-times"
            ></i>
          </button>
        </div>
        <h2
          style={{
            padding: "10px",
            fontFamily: "Audiowide",
            marginTop: "-20px",
            color: "#01d699",
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          FreedoBank
        </h2>
        <a href="/dashboard">
          <span>
            <i className="fas fa-home my-fa-icon"></i>
          </span>{" "}
          Home
        </a>
        
          <a href="/dashboard/account">
            <span>
              <i className="fas fa-university my-fa-icon"></i>
            </span>{" "}
            Account
          </a>
         
        

        <Link to={"/dashboard/transfer"}>
        
          
            <span>
              <i className=" fas fa-exchange-alt my-fa-icon"></i>
            </span>
            Transfer
            </Link>
         
        

        <a href="/dashboard/activities">
          <span>
            <i className="fas fa-chart-line my-fa-icon"></i>
          </span>
          Activities
        </a>
        <a href="/dashboard/profile">
          <span>
            <i className="fas fa-cog my-fa-icon"></i>
          </span>{" "}
          Settings
        </a>

        <div className="second-side-bar-section">
          <a href="/login">
            <span>
              <i className="fas fa-power-off my-fa-icon logout-fa"></i>
            </span>
            Logout
          </a>
        </div>
      </div>

      {children}

      <div className="bottom-navbar">
        <div className="bottom-navbar-items">
          <a href="/dashboard">
            <i
              style={{ display: "block", fontSize: "24px" }}
              className="fas fa-home"
            ></i>
            <span style={{ fontWeight: "bolder" }}>Home</span>
          </a>
        </div>
        <div className="bottom-navbar-items">
          <a href="/dashboard/account">
            <i
              style={{ display: "block", fontSize: "24px" }}
              className="fas fa-university"
            ></i>
            <span style={{ marginLeft: "-10px", fontWeight: "bolder" }}>
              Accounts
            </span>
          </a>
        </div>

        <div className="bottom-navbar-items">
          <a href="/dashboard/transfer">
          
              
            
            <i
              style={{ display: "block", fontSize: "24px", color: "inherit" }}
              className="fas fa-exchange-alt my-fa-icon"
            ></i>
            <span style={{ marginLeft: "-10px", fontWeight: "bolder" }}>
              Transfer
            </span>
          </a>
        </div>
       

        <div className="bottom-navbar-items">
          <a href="/dashboard/profile">
            <i
              style={{ display: "block", fontSize: "24px" }}
              className="far fa-user-circle"
            ></i>
            <span style={{ fontWeight: "bolder" }}>Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
