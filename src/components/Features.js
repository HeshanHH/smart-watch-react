import React from "react";
//import "../App.css";
import { Button } from "./Button";
import "./Features.css";
import { Link } from "react-router-dom";
import feature03 from "../image/iPhone XR, XS Max, 11 – 1.png";
import feature01 from "../image/iPhone XR, XS Max, 11 – 3.png";
import feature02 from "../image/iPhone XR, XS Max, 11 – 2.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //     });
  //     AOS.refresh();
  //   }, []);

  //   function refreshAos() {
  //     AOS.init({
  //       duration: 1000,
  //     });
  //     AOS.refresh();
  //   }
  return (
    <>
      <br /> <br />
      <div className="tabs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center" data-aos="fade-up">
                FEATURES
              </h2>
              <div className="p-heading p-large" data-aos="fade-up">
                Communicate With Your Kids- Voice Calling / Video Calling /
                Messaging - Talk to your child and
                <br />
                let them talk to you and your loved ones anytime, anywhere.
                <br />
                Your child can call, text, send photos and voice messages to
                friends, grandparents, aunts, uncles and cousins.
              </div>
            </div>
          </div>

          <div className="row">
            <ul className="nav nav-tabs" data-aos="fade-up">
              {/* <li className="nav-item" onClick={() => refreshAos()}> */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="nav-tab-1"
                  data-toggle="tab"
                  href="#tab-1"
                >
                  <i className="fa fa-cog"></i>
                  CONFIGURING
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  id="nav-tab-2"
                  data-toggle="tab"
                  href="#tab-2"
                >
                  <i className="fa fa-binocular"></i>
                  TRACKING
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  id="nav-tab-3"
                  data-toggle="tab"
                  href="#tab-3"
                >
                  <i className="fa fa-search"></i>
                  MONITORING
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card left-pane first">
                        <div className="card-body" data-aos="fade-right">
                          <div className="text-wrapper">
                            <h4 className="card-title">Alarms</h4>
                            <p>
                              Make sure you child doesn't miss anything
                              again.Create and set up alarms, to easily remind
                              your kids of specific events/duties..
                            </p>
                          </div>
                          <div className="card-icon">
                            <i className="fa fa-diamond"></i>
                          </div>
                        </div>
                      </div>

                      <div className="card left-pane ">
                        <div className="card-body" data-aos="fade-right">
                          <div className="text-wrapper">
                            <h4 className="card-title">className Mode</h4>
                            <p>
                              Watch doesn't disturb className times.Set up times
                              when watch can't receive calls to stop it
                              disturbing school times, or being a distraction.
                            </p>
                          </div>
                          <div className="card-icon">
                            <i className="fa fa-check-square-o"></i>
                          </div>
                        </div>
                      </div>

                      <div className="card left-pane first">
                        <div className="card-body" data-aos="fade-right">
                          <div className="text-wrapper">
                            <h4 className="card-title">SOS Function</h4>
                            <p>
                              {" "}
                              Know if your child is in distress.In an emergency
                              your child can simply press an SOS button to let
                              you know they need help, and the watch
                              automatically calls the emergency contact setup
                              within the App.
                            </p>
                          </div>
                          <div className="card-icon">
                            <i className="fa fa-clock-o"></i>
                          </div>
                        </div>
                      </div>

                      <div className="card left-pane first">
                        <div className="card-body" data-aos="fade-right">
                          <div className="text-wrapper">
                            <h4 className="card-title">Safe Zones</h4>
                            <p>
                              Create Safe Zones to keep your child safe.Make
                              your home, school and any other places you want
                              into Safe Zones and know immediately when your
                              child leaves them.
                            </p>
                          </div>
                          <div className="card-icon">
                            <i className="fa fa-podcast"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up">
                      <img src={feature01} className="img-fluid" alt="watch" />
                    </div>

                    <div className="col-lg-4">
                      <div className="card right-pane first">
                        <div className="card-body" data-aos="fade-left">
                          <div className="card-icon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <div className="text-wrapper">
                            <h4 className="card-title">Calendar input</h4>
                            <p>
                              Configure the calander with your smartphone and
                              sync data. Add events, add task and add reminders{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card right-pane">
                        <div className="card-body" data-aos="fade-left">
                          <div className="card-icon">
                            <i className="fa fa-bookmark"></i>
                          </div>
                          <div className="text-wrapper">
                            <h4 className="card-title">Pedometer</h4>
                            <p>
                              Keep track of how active your child is.Know your
                              kid's steps through the Pedometer feature on your
                              Smart Phone Watch, and easily set up goals for
                              them to achieve.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card right-pane first">
                        <div className="card-body" data-aos="fade-left">
                          <div className="card-icon">
                            <i className="fa fa-podcast"></i>
                          </div>
                          <div className="text-wrapper">
                            <h4 className="card-title">Touch Screen</h4>
                            <p>
                              Easily flick through the watch's screen.Intuitive
                              touch screen displays allows kids to quickly and
                              easily navigate through the menu options.{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card right-pane first">
                        <div className="card-body" data-aos="fade-left">
                          <div className="card-icon">
                            <i className="fa fa-heart"></i>
                          </div>
                          <div className="text-wrapper">
                            <h4 className="card-title">GPS Tracking</h4>
                            <p>
                              Track your child at any time. Anywhere in the
                              world.Using the Leefine app, you can see your
                              child's location on a map at any time, anywhere in
                              the world. Featuring full GPS Tracking, even if
                              your kid is travelling overseas, you can still
                              check their location.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="tab-2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4" data-aos="fade-right">
                      <img src={feature02} alt="watch2" className="img-fluid" />
                    </div>

                    <div className="col-md-8">
                      <div className="text-area">
                        <h3 data-aos="fade-left">
                          Gives Parents Peace Of Mind{" "}
                        </h3>
                        <br /> <br />
                        <p data-aos="fade-left">
                          GPS Tracking / Safe Zones / SOS / Secure Data - See
                          your child's location on a map at any time, set safe
                          zones, SOS button lets you know if they need help.
                        </p>
                      </div>
                      <br /> <br />
                      <div className="icon-cards-area">
                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-cube"></i>
                          </div>
                          <div className="card-body">
                            <h4>Alarms</h4>
                            <p>
                              Make sure you child doesn't miss anything
                              again.Create and set up alarms, to easily remind
                              your kids of specific events/duties.
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-bookmark"></i>
                          </div>
                          <div className="card-body">
                            <h4>SOS Function</h4>
                            <p>
                              Know if your child is in distress.In an emergency
                              your child can simply press an SOS button to let
                              you know they need help, and the watch
                              automatically calls the emergency contact setup
                              within the App.
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <div className=" card-body">
                            <h4>GPS Tracking</h4>
                            <p>
                              {" "}
                              Track your child at any time. Anywhere in the
                              world.Using the Leefine app, you can see your
                              child's location on a map at any time, anywhere in
                              the world. Featuring full GPS Tracking, even if
                              your kid is travelling overseas, you can still
                              check their location.{" "}
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-heart"></i>
                          </div>
                          <div className=" card-body">
                            <h4>Voice Calling</h4>
                            <p>
                              Talk to your child, let them talk to you. Anytime.
                              Anywhere.The kid's smart watch phone allows your
                              child to make and receive calls from a parent
                              controlled contact list. You decide who your child
                              can call or be called by; granny and grandad yes,
                              but no strangers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="tab-3">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <br /> <br />
                      <div className="icon-cards-area">
                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-calendar"></i>
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">Calendar input</h4>
                            <p>
                              Configure the calander with your smartphone and
                              sync data. Add events, add task and add reminders{" "}
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-file"></i>
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">Pedometer</h4>
                            <p>
                              Keep track of how active your child is.Know your
                              kid's steps through the Pedometer feature on your
                              Smart Phone Watch, and easily set up goals for
                              them to achieve.
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-cube"></i>
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">Built-In Camera</h4>
                            <p>
                              The Smart phone watch has a built in camera which
                              allows your kids to take photos that they can then
                              share with their loved ones.
                            </p>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-icon">
                            <i className="fa fa-bookmark"></i>
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">GPS Tracking</h4>
                            <p>
                              Track your child at any time. Anywhere in the
                              world.Using the Leefine app, you can see your
                              child's location on a map at any time, anywhere in
                              the world. Featuring full GPS Tracking, even if
                              your kid is travelling overseas, you can still
                              check their location.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-area">
                        <h3>Monitoring Tools Evaluation</h3>
                        <p>
                          - Touch Screen / Waterproof / Parent Controlled App -
                          Easy to use, waterproof up to 1 metre depth for 30
                          minutes, customisable for a cool new look and settings
                          controlled by parents from iOS/Android compatible App.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <img
                        src={feature03}
                        alt="watch 4"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
