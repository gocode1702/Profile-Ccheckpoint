import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div>
      {/* LEFT-CONTAINER */}
      <div className="left-container container">
        <div className="menu-box block">
          {" "}
          {/* MENU BOX (LEFT-CONTAINER) */}
          <h2 className="titular">MENU BOX</h2>
          <ul className="menu-box-menu">
            <li>
              <a className="menu-box-tab" href="#6">
                <span className="icon fontawesome-envelope scnd-font-color" />
                Messages<div className="menu-box-number">24</div>
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#8">
                <span className="icon entypo-paper-plane scnd-font-color" />
                Invites<div className="menu-box-number">3</div>
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#10">
                <span className="icon entypo-calendar scnd-font-color" />
                Events<div className="menu-box-number">5</div>
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#12">
                <span className="icon entypo-cog scnd-font-color" />
                Account Settings
              </a>
            </li>
            <li>
              <a className="menu-box-tab" href="#13">
                <sapn className="icon entypo-chart-line scnd-font-color" />
                Statistics
              </a>
            </li>
          </ul>
        </div>
        <div className="donut-chart-block block">
          {" "}
          {/* DONUT CHART BLOCK (LEFT-CONTAINER) */}
          <h2 className="titular">OS AUDIENCE STATS</h2>
          <div className="donut-chart">
            <div id="porcion1" className="recorte">
              <div className="quesito ios" data-rel={21} />
            </div>
            <div id="porcion2" className="recorte">
              <div className="quesito mac" data-rel={39} />
            </div>
            <div id="porcion3" className="recorte">
              <div className="quesito win" data-rel={31} />
            </div>
            <div id="porcionFin" className="recorte">
              <div className="quesito linux" data-rel={9} />
            </div>

            <p className="center-date">
              JUNE
              <br />
              <span className="scnd-font-color">2023</span>
            </p>
          </div>
          <ul className="os-percentages horizontal-list">
            <li>
              <p className="ios os scnd-font-color">iOS</p>
              <p className="os-percentage">
                21<sup>%</sup>
              </p>
            </li>
            <li>
              <p className="mac os scnd-font-color">Mac</p>
              <p className="os-percentage">
                48<sup>%</sup>
              </p>
            </li>
            <li>
              <p className="linux os scnd-font-color">Linux</p>
              <p className="os-percentage">
                9<sup>%</sup>
              </p>
            </li>
            <li>
              <p className="win os scnd-font-color">Win</p>
              <p className="os-percentage">
                32<sup>%</sup>
              </p>
            </li>
          </ul>
        </div>
        <div className="line-chart-block block clear">
          {" "}
          {/* LINE CHART BLOCK (LEFT-CONTAINER) */}
          <div className="line-chart">
            <div className="grafico">
              <ul className="eje-y">
                <li data-ejey={30} />
                <li data-ejey={20} />
                <li data-ejey={10} />
                <li data-ejey={0} />
              </ul>
              <ul className="eje-x">
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
              </ul>
              <span data-valor={25}>
                <span data-valor={8}>
                  <span data-valor={13}>
                    <span data-valor={5}>
                      <span data-valor={23}>
                        <span data-valor={12}>
                          <span data-valor={15}></span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <ul className="time-lenght horizontal-list">
            <li>
              <a className="time-lenght-btn" href="#14">
                Week
              </a>
            </li>
            <li>
              <a className="time-lenght-btn" href="#15">
                Month
              </a>
            </li>
            <li>
              <a className="time-lenght-btn" href="#16">
                Year
              </a>
            </li>
          </ul>
          <ul className="month-data clear">
            <li>
              <p>
                APR<span className="scnd-font-color"> 2023</span>
              </p>
              <p>
                <span className="entypo-plus increment"> </span>21
                <sup>%</sup>
              </p>
            </li>
            <li>
              <p>
                MAY<span className="scnd-font-color"> 2023</span>
              </p>
              <p>
                <span className="entypo-plus increment"> </span>48
                <sup>%</sup>
              </p>
            </li>
            <li>
              <p>
                JUN<span className="scnd-font-color"> 2023</span>
              </p>
              <p>
                <span className="entypo-plus increment"> </span>35
                <sup>%</sup>
              </p>
            </li>
          </ul>
        </div>
        <div className="media block">
          {" "}
          {/* MEDIA (LEFT-CONTAINER) */}
          <div id="media-display">
            <a className="media-btn play" href="#22">
              <span className="fontawesome-play" />
            </a>
          </div>
          <div className="media-control-bar">
            <a className="media-btn play" href="#23">
              <span className="fontawesome-play scnd-font-color" />
            </a>
            <p className="time-passed">
              4:15 <span className="time-duration scnd-font-color">/ 9:23</span>
            </p>
            <a className="media-btn volume" href="#24">
              <span className="fontawesome-volume-up scnd-font-color" />
            </a>
            <a className="media-btn resize" href="#25">
              <span className="fontawesome-resize-full scnd-font-color" />
            </a>
          </div>
        </div>
        <ul className="social horizontal-list block">
          {" "}
          {/* SOCIAL (LEFT-CONTAINER) */}
          <li className="facebook">
            <p className="icon">
              <span className="zocial-facebook" />
            </p>
            <p className="number">248k</p>
          </li>
          <li className="twitter">
            <p className="icon">
              <span className="zocial-twitter" />
            </p>
            <p className="number">30k</p>
          </li>
          <li className="googleplus">
            <p className="icon">
              <span className="zocial-googleplus" />
            </p>
            <p className="number">124k</p>
          </li>
          <li className="mailbox">
            <p className="icon">
              <span className="fontawesome-envelope" />
            </p>
            <p className="number">89k</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
