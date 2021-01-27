import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Services.css";

function Services() {
  return (
    <>
      <section className="service_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="dark" data-aos="fade-up">
                SERVICES
              </h4>
              <h2 className="sec_title" data-aos="fade-up">
                The future of health <br />
                is on your wrist.
              </h2>

              <p className="color_aaa" data-aos="fade-left">
                Gives Parents Peace Of Mind - GPS Tracking / Safe Zones / SOS /
                Secure Data
                <br /> - See your child's location on a map at any time, set
                safe zones, SOS button lets you know if they need help.
              </p>
            </div>
          </div>
          <div className="row custom_column" data-aos="fade-right">
            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link href="#" className="box text-center">
                <div className="flipper">
                  <div className="front">
                    <i className="fa fa-check-square-o"></i>
                    <h3>
                      SOS <br /> Function
                    </h3>
                  </div>
                  <div className="back">
                    <i className="fa fa-check-square-o"></i>
                    <h3>
                      SOS <br /> Function
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link href="#" className="box text-center">
                <div className="flipper">
                  <div className="front">
                    <i className="fa fa-diamond"></i>
                    <h3>
                      GPS <br /> Tracking
                    </h3>
                  </div>
                  <div className="back">
                    <i className="fa fa-diamond"></i>
                    <h3>
                      GPS <br /> Tracking
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link href="#" className="box text-center">
                <div className="flipper">
                  <div className="front">
                    <i className="fa fa-clock-o"></i>
                    <h3>
                      Pedometer <br /> &nbsp;{" "}
                    </h3>
                  </div>
                  <div className="back">
                    <i className="fa fa-clock-o"></i>
                    <h3>
                      Pedometer <br /> &nbsp;
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link href="#" className="box text-center">
                <div className="flipper">
                  <div className="front">
                    <i className="fa fa-paper-plane"></i>
                    <h3>
                      Messaging <br /> &nbsp;
                    </h3>
                  </div>
                  <div className="back">
                    <i className="fa fa-paper-plane"></i>
                    <h3>
                      Messaging <br /> &nbsp;
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-sm-4 col-md-3">
              <Link href="#" className="box text-center">
                <div className="flipper">
                  <div className="front">
                    <i className="fa fa-podcast"></i>
                    <h3>
                      Safe <br /> Zones
                    </h3>
                  </div>
                  <div className="back">
                    <i className="fa fa-podcast"></i>
                    <h3>
                      Safe <br /> Zones
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
