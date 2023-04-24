import React from "react";
import "./Address.css";


const Address = () => {
  return (
    <div>
      {/* RIGHT-CONTAINER */}
      <div className="right-container container">
        <div className="join-newsletter block">
          {" "}
          {/* JOIN NEWSLETTER (RIGHT-CONTAINER) */}
          <h2 className="titular">My Adress is "Carthage-Marsa ,Tunis"</h2>
          <h2 className="titular">JOIN My NEWSLETTER</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="yourname@gmail.com"
              className="email text-input"
            />
            <div className="input-icon envelope-icon-newsletter">
              <span className="fontawesome-envelope scnd-font-color" />
            </div>
          </div>
          <a className="subscribe button" href="#21">
            SUBSCRIBE
          </a>
        </div>
        <div className="account block">
          {" "}
          {/* ACCOUNT (RIGHT-CONTAINER) */}
          <h2 className="titular">SIGN IN TO YOUR ACCOUNT</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="yourname@gmail.com"
              className="email text-input"
            />
            <div className="input-icon envelope-icon-acount">
              <span className="fontawesome-envelope scnd-font-color" />
            </div>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Password"
              className="password text-input"
            />
            <div className="input-icon password-icon">
              <span className="fontawesome-lock scnd-font-color" />
            </div>
          </div>
          <a className="sign-in button" href="#22">
            SIGN IN
          </a>
          <p className="scnd-font-color">Forgot Password?</p>
          <a className="fb-sign-in" href={58}>
            <p>
              <span className="fb-border">
                <span className="icon zocial-facebook" />
              </span>
              Sign in with Facebook
            </p>
          </a>
        </div>
        <div className="loading block">
          {" "}
          {/* LOADING (RIGHT-CONTAINER) */}
          <div className="progress-bar downloading" />
          <p>
            <span className="icon fontawesome-cloud-download scnd-font-color" />
            Downloading...
          </p>
          <p className="percentage">
            81<sup>%</sup>
          </p>
          <div className="progress-bar uploading" />
          <p>
            <span className="icon fontawesome-cloud-upload scnd-font-color" />
            Uploading...
          </p>
          <p className="percentage">
            43<sup>%</sup>
          </p>
        </div>
        <div className="calendar-day block">
          {" "}
          {/* CALENDAR DAY (RIGHT-CONTAINER) */}
          <div className="arrow-btn-container">
            <a className="arrow-btn left" href="#200">
              <span className="icon fontawesome-angle-left" />
            </a>
            <h2 className="titular">WEDNESDAY</h2>
            <a className="arrow-btn right" href="#201">
              <span className="icon fontawesome-angle-right" />
            </a>
          </div>
          <p className="the-day">26</p>
          <a className="add-event button" href="#27">
            ADD EVENT
          </a>
        </div>
        <div className="calendar-month block">
          {" "}
          {/* CALENDAR MONTH (RIGHT-CONTAINER) */}
          <div className="arrow-btn-container">
            <a className="arrow-btn left" href="#202">
              <span className="icon fontawesome-angle-left" />
            </a>
            <h2 className="titular">Avril 2023</h2>
            <a className="arrow-btn right" href="#203">
              <span className="icon fontawesome-angle-right" />
            </a>
          </div>
          <table className="calendar">
            <thead className="days-week">
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>R</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>
                  <a className="scnd-font-color" href="#100">
                    1
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#101">
                    2
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#102">
                    3
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#103">
                    4
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#104">
                    5
                  </a>
                </td>
                <td>
                  <a className="today" href="#105">
                    6
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#106">
                    7
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#107">
                    8
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#108">
                    9
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#109">
                    10
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#110">
                    11
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#111">
                    12
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#112">
                    13
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#113">
                    14
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#114">
                    15
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#115">
                    16
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#116">
                    17
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#117">
                    18
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#118">
                    19
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#119">
                    20
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#120">
                    21
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#121">
                    22
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="scnd-font-color" href="#122">
                    23
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#123">
                    24
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#124">
                    25
                  </a>
                </td>
                <td>
                  <a className="scnd-font-color" href="#125">
                    26
                  </a>
                </td>
                <td>
                  <a href="#126">27</a>
                </td>
                <td>
                  <a href="#127">28</a>
                </td>
                <td>
                  <a href="#128">29</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#129">30</a>
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Address;
