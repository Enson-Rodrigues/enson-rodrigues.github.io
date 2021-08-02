import React, { Component } from 'react';
import bupalogo from './images/bupa-logo.svg';
import "./sass/dist/reset.css"
import "./sass/dist/maintenance.css"

class Maintenance extends Component {

  componentDidMount(){
    document.title = "Bupa.co.uk maintenance page ";
    
    var acc = document.getElementsByClassName("accordion");
    console.log(acc.length);

    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var accordionPanel = this.nextElementSibling;

        if (accordionPanel.style.maxHeight) {
          accordionPanel.style.maxHeight = null;
        } else {
          accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
        }
      });
    }
  }

  render() {
  return (
    <div id="bupa-wrapper">
    <header className="layer1">
        <div className="vessel">
          <img className="bupaLogo" width="80" height="80" src={bupalogo} alt="bupa-logo"/>
        </div>
    </header>
    <section className="layer2">
        <div className="vessel">
          <h1>We’re updating our website.</h1>
          <h2 className="marginTo25">We apologise for any inconvenience caused.</h2>
          <p className="marginTo25 mobmarTo15">Our website is currently undergoing some essential maintenance, we’re hoping to have it back up and running soon.</p>
          <p className="marginTo25">Please use the numbers provided if you need to get in touch, and we'll be happy to help.</p>
        </div>
    </section>
    <section className="layer3">
        <div className="vessel">
          <h2 className="accordion">
              <span>Insurance products</span>
              <span className="arrow">
                <p></p>
              </span>
          </h2>
          <div className="accordionPanel lightBlue">
              <div className="contactBlock blockTwo">
                <div className="innerContactBlock marginRight15By2">
                    <h3>Health insurance</h3>
                    <div className="contactDetails">
                      <p>For individuals</p>
                      <strong>0800 606 570</strong>
                    </div>
                    <div className="contactDetails">
                      <p>For businesses with 2 to 250 employees</p>
                      <strong>0345 266 8974</strong>
                    </div>
                    <div className="contactDetails">
                      <p>For businesses with more than 250 employees</p>
                      <strong>0345 303 0830</strong>
                    </div>
                </div>
              </div>
              <div className="contactBlock blockTwo">
                <div className="innerContactBlock marginLeft15By2">
                    <h3>Intermediaries</h3>
                    <div className="contactDetails">
                      <p>For individuals</p>
                      <strong>0800 33 2000</strong>
                    </div>
                    <div className="contactDetails">
                      <p>For businesses with 2 to 250 employees</p>
                      <strong>0800 33 2000</strong>
                    </div>
                    <div className="contactDetails">
                      <p>For businesses with more than 250 employees</p>
                      <strong>0345 303 0830</strong>
                    </div>
                </div>
              </div>
              <div className="contactBlock blockThree">
                <div className="innerContactBlock marginTop15 marginRight15By2">
                    <h3>Travel insurance</h3>
                    <div className="contactDetails">
                      <strong>0800 001 022</strong>
                    </div>
                </div>
              </div>
              <div className="contactBlock blockThree">
                <div className="innerContactBlock marginTop15 marginLeft15By2 marginRight15By2">
                    <h3>Member enquiries</h3>
                    <div className="contactDetails">
                      <strong>0345 60 90 111</strong>
                    </div>
                </div>
              </div>
              <div className="contactBlock blockThree">
                <div className="innerContactBlock marginTop15 marginLeft15By2">
                    <h3>Dental insurance</h3>
                    <div className="contactDetails">
                      <strong>0345 600 4779</strong>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section className="layer4">
        <div className="vessel">
          <h2 className="accordion">
              <span>Pay as you go treatments</span>
              <span className="arrow">
                <p></p>
              </span>
          </h2>
          <div className="accordionPanel lightGrey">
              <div className="contactBlock blockThree">
                <div className="innerContactBlock marginRight15By2">
                    <h3>Private GP, health assessments and musculoskeletal services</h3>
                    <div className="contactDetails">
                      <strong>0800 66 5577</strong>
                    </div>
                </div>
              </div>
              <div className="contactBlock blockThree">
                <div className="innerContactBlock marginLeft15By2 marginRight15By2">
                    <h3>Bupa Dental Care</h3>
                    <div className="contactDetails">
                      <strong>To access our dental services, please contact your local practice. You can search for your local practice online to find their contact information.</strong>
                    </div>
                </div>
              </div>
              <div className="contactBlock blockThree">
                <div className="innerContactBlock marginLeft15By2">
                    <h3>Care homes</h3>
                    <div className="contactDetails">
                      <strong>0800 00 1010</strong>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section className="layer5">
        <div className="vessel">
          <p className="termsCondition">Telephone and opening times vary. We may record or monitor our calls.</p>
        </div>
    </section>
    <footer className="layer6">
        <div className="vessel">
          <img className="bupaLogo" width="71.84" height="73" src={bupalogo} alt="bupa-logo"/>
        </div>
    </footer>
  </div>
  );
  }
}

export default Maintenance;
