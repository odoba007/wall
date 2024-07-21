import React from "react";
import Menu from "../assets/images/icons/menu.png"
import Cancel from "../assets/images/icons/cancel.png"
import Google from "../assets/images/icons/google.png"
import Gift from "../assets/images/icons/google.png"
import CC from "../assets/images/icons/credit-card.png"
import BTC from "../assets/images/icons/bitcoin.png"
import OpenAccount from "../assets/images/open-account.jpg"
import GrowBusines from "../assets/images/grow-business.jpg"

function HomePage() {
  const [isAuthenticated] = React.useState(false);

  const toggleNavBar = () => {
    document.getElementById('nav_menu')?.classList.toggle('hide');
    document.getElementById('close')?.classList.toggle('hide');
    document.getElementById('menu')?.classList.toggle('hide');
}
  return (
    <>
      <div className="my-navbar">
        <div className="navbar-flex">
          <div className="brand">
            <div className="brand-link">
              <a href="">FreedoBank</a>
            </div>
          </div>

          <div className="navbar-options-container">
            <div className="navbar-options-flex">
              <div className="navbar-options">
                <ul>
                  <li className="navbar-options-list">
                    <a href="">CUSTOMER PRODUCTS</a>
                  </li>
                  <li className="navbar-options-list">
                    <a href="">BUSINESS SOLUTIONS</a>
                  </li>
                  <li className="navbar-options-list">
                    <a href="">RESOURCES</a>
                  </li>
                </ul>
              </div>

              <div className="navbar-auth">
                {isAuthenticated ? (
                  <>
                    <div className="nav-login">
                      <div className="nav-auth-link">
                        <a href="">LOGOUT</a>
                      </div>
                    </div>
                    <div className="nav-signup">
                      <div className="nav-auth-link">
                        <a href="{{url_for('user.dashboard')}}">DASHBOARD</a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="nav-login">
                      <div className="nav-auth-link">
                        <a href="/login">LOGIN</a>
                      </div>
                    </div>
                    <div className="nav-signup">
                      <div className="nav-auth-link">
                        <a href="/">
                          OPEN AN ACCOUNT
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="small-screen-menu">
            <div id="close" className="hide">
              <button onClick={() =>toggleNavBar()}>
                <img
                  src={Cancel}
                  alt=""
                />
              </button>
            </div>

            <div id="menu" className="">
              <button onClick={() => toggleNavBar()}>
                <img
                  src={Menu}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="nav_menu" className="navbar-options-small-screen hide">
        <a href="">
          <div className="small-screen-menu-options">
            <p>CUSTOMER PRODUCTS</p>
          </div>
        </a>
        <a href="">
          <div className="small-screen-menu-options">
            <p>BUSINESS SOLUTIONS</p>
          </div>
        </a>
        <a href="">
          <div className="small-screen-menu-options">
            <p>RESOURCES</p>
          </div>
        </a>

        <a href="/login">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="small-screen-menu-options"
          >
            <p>LOGIN</p>
          </div>
        </a>

        <a href="{{url_for('auth.register')}}">
          <div
            style={{ backgroundColor: "#1ecad3", color: "white" }}
            className="small-screen-menu-options"
          >
            <p>OPEN AN ACCOUNT</p>
          </div>
        </a>
      </div>

      <div className="my-container">
        
                {/* Container starts */}

                <div className="landing-image">
  <div className="landing-text">
    <h3>
      INTRODUCING A NEW KIND <br />
      OF BANKING EXPERIENCE
    </h3>
    <h1>
      IT'S
      <br />
      YOUR
      <br />
      CURRENCY
    </h1>
    <br />
    <div className="gradient-button">
      <a href="">GET STARTED TODAY</a>
    </div>
  </div>

  <div className="color-overlay"></div>
</div>

<div className="centered-headline">
  <p>
    We believe that financial access and control is a fundamental <br />
    human right enabled through the blockchain.
  </p>

  <h2>GET UNBANKED</h2>
</div>

<div className="services-flex-box">
  <div className="services-option">
    <div className="services-option-icon">
      <img
        src={Google}
        alt=""
      />
    </div>
    <div className="services-option-title"><h2>BANK ACCOUNTS</h2></div>
    <div className="services-option-text">
      <p>
        Bank without borders. Our globally accessible accounts make spending,
        domestic and international money transfers, crypto purchases, and crypto
        sales more convenient than ever. Available in over 200+ countries.
      </p>
    </div>
    <div className="services-option-link">
      <div className="gradient-button">
        <a href="">SEE HOW</a>
      </div>
    </div>
  </div>

  <div className="services-option">
    <div className="services-option-icon">
      <img
        src={CC}
        alt=""
      />
    </div>
    <div className="services-option-title"><h2>DEBIT CARDS</h2></div>
    <div className="services-option-text">
      <p>
        Get a virtual and physical card to transact with your crypto in the real
        world and, at the same time, eliminate excessive deposit, exchange and
        transaction fees. (Currently for US residents only. Additional countries
        coming soon.)
      </p>
    </div>
    <div className="services-option-link">
      <div className="gradient-button">
        <a href="">GET STARTED</a>
      </div>
    </div>
  </div>

  <div className="services-option">
    <div className="services-option-icon">
      <img
        src={Gift}
        alt=""
      />
    </div>
    <div className="services-option-title"><h2>GET REWARDS</h2></div>
    <div className="services-option-text">
      <p>Earn up to 6.38% in rewards when you spend your crypto</p>
    </div>
    <div className="services-option-link">
      <div className="gradient-button">
        <a href="">EXPLORE OUR REWARDS</a>
      </div>
    </div>
  </div>

  <div className="services-option">
    <div className="services-option-icon">
      <img
        src={BTC}
        alt=""
      />
    </div>
    <div className="services-option-title"><h2>BUY, SELL & SEND CRYPTO</h2></div>
    <div className="services-option-text">
      <p>
        No more hidden fees and confusion caused by exchanges. Get the best
        available rate when you buy and sell digital currencies through
        Unbanked.
      </p>
    </div>
    <div className="services-option-link">
      <div className="gradient-button">
        <a href="">GET STARTED</a>
      </div>
    </div>
  </div>
</div>

<div className="additional-section-container">
  <div className="additional-section-item">
    <div className="additional-section-image">
      <img
        src={OpenAccount}
        alt=""
      />
    </div>
    <div className="additional-section-text">
      <h2>OPEN AN ACCOUNT</h2>
      <p>
        Connect your digital assets to accounts in 200+ countries, whether you
        custody your own funds or we take care of it for you.
      </p>
      <br />
      <div className="gradient-button">
        <a href="">GET STARTED</a>
      </div>
    </div>
  </div>

  <div className="additional-section-item">
    <div className="additional-section-image">
      <img
        src={GrowBusines}
        alt=""
      />
    </div>
    <div className="additional-section-text">
      <h2>BUSSINESS SOLUTIONS</h2>
      <p>
        Connect your digital assets to accounts in 200+ countries, whether you
        custody your own funds or we take care of it for you.
      </p>
      <br /> 
      <div className="gradient-button">
        <a href="">GET STARTED</a>
      </div>
    </div>
  </div>
</div>

<div className="centered-headline">
  <h2>WHY UNBANKED</h2>
</div>
  <div className="why-unbanked">
    <div className="why-unbanked-options">
      
        <h2>CHOOSE YOUR OWN FINANCIAL EXPERIENCE</h2>
      
      <p>Go beyond the traditional “off the shelf” approach to modern banking and take advantage of a suite of crypto-enabled financial products and features that meet (and exceed) the needs of your life.</p>
    </div>
    <div className="why-unbanked-options">
        <h2>MODERN SOLUTIONS FOR MODERN PROBLEMS</h2>
      <p>Blockchain is more than just a buzzword, it’s a real solution for an outdated system of fees and slow payments that impact each consumer. By utilizing this cutting-edge technology, Unbanked is able to help you reduce processing times and keep more of your money.</p>
    </div>
    <div className="why-unbanked-options">
      
        <h2>USE DIGITAL CURRENCY IN REAL-TIME</h2>
      
      <p>From depositing and spending your digital currencies, to sending payments anywhere in the world, Unbanked puts the control back in your hands, without the need for an intermediary.</p>
    </div>
    <div className="why-unbanked-options">
     
        <h2>SEAMLESSLY CONVERT FIAT TO CRYPTO</h2>
      
      <p>Want to buy crypto? Simply send funds to your self-custodial wallet with wire, ACH, or credit card.</p>
    </div>
  </div>
                {/* COntainer ends */}

      </div>


      <footer>
      <div className="footer">
        <div className="brand">
          <div className="footer-brand-link">
            <a style={{"color": "white"}} href="">Freedo</a>
          </div>
        </div>

        <hr style={{"color": "white"}} />
        <div className="footer-p">
          <p>
            Freedo Debit card and Freedo BlockCard are not presently
            available. To get the Original BlockCard in the USA – signup
            <a style={{"color": "rgb(57, 199, 255)"}} href="">here</a>.
          </p>
        </div>

        <div className="footer-a">
          <a href="">Privacy Policy</a> <a href="">Terms of service</a>
          <a href="">Disclosures</a> <a href="">Deposit Agreement</a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default HomePage;
