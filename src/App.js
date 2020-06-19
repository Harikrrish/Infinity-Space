import React from 'react';
import './App.css';
import frontImage from './frontImage.jpg';
import comportOfYourHome from './comportOfYourHome.png';
import expertDesigners from './expertDesigners.png';
import live3DDesigns from './live3DDesigns.png';
import instantPricing from './instantPricing.png';
import kitchenImage1 from './images/kitchenImage1.png';
import kitchenImage2 from './images/kitchenImage2.png';
import kitchenImage3 from './images/kitchenImage3.png';
import kitchenImage4 from './images/kitchenImage4.png';
import bitmap from './images/Bitmap.png';
import bitmapRight from './images/Bitmap-right.png';
import infinitySpace from './images/infinity-space.jpg';

class App extends React.Component {

  state = {
    selectedTab: "DesignGallery",
    name: "",
    email: "",
    phone: "",
    pincode: "",
    isEmailValid: false,
    isPhoneValid: false,
    isPincodeValid: false,
    isNameValid: false
  };

  componentDidMount() {
  }

  onClickModularKitchen(selectedTab) {
    this.setState({ selectedTab });
  }

  onChangeInputField(inputField, value) {
    switch (inputField) {
      case "name":
        {
          let isNameValid = value && value.length > 3;
          this.setState({ name: value, isNameValid });
          break;
        }
      case "email":
        {
          let isEmailValid = false;
          let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (emailRegex.test(value)) {
            isEmailValid = true;
          }
          this.setState({ email: value, isEmailValid });
          break;
        }
      case "phone":
        {
          let regex = /^[0-9\b]+$/;
          if (value === '' || regex.test(value)) {
            let isPhoneValid = value && value.length == 10;
            this.setState({ phone: value, isPhoneValid });
          }
          break;
        }
      case "pincode":
        {
          let regex = /^[0-9\b]+$/;
          if (value === '' || regex.test(value)) {
            let isPincodeValid = value && value.length >= 5;
            this.setState({ pincode: value, isPincodeValid });
          }
          break;
        }
    }
  }

  bookFreeOnlineConsultation() {
    this.sendEmail();
  }

  sendEmail() {
    var data = {
      service_id: 'gmail',
      template_id: 'template_Gkif105b',
      user_id: 'user_ojAea3OFi1AI7jeQkp13O',
      template_params: {
        "reply_to": "balamurali@gmail.com",
        "customerName": this.state.name,
        "customerEmail": this.state.email,
        "customerPhone": this.state.phone
      }
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('https://api.emailjs.com/api/v1.0/email/send', requestOptions)
      .then(response => response && response.json());
    this.clearAllFields();
  }

  clearAllFields() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      pincode: "",
      isEmailValid: false,
      isPhoneValid: false,
      isPincodeValid: false,
      isNameValid: false
    })
  }

  // async componentDidMount() {
  //   const url = "https://ifsc.razorpay.com/";
  //   fetch(url).then(response => response.json()).then(data => {
  //     //this.ifsc(data);
  //   });
  // }

  // ifsc(data) {
  //   this.setState({ data });
  //   console.log(data);
  // }
  render() {
    return (
      <div>
        {this.state.selectedTab === 'DesignGallery' ? <div>
          <div className="home-banner">
            <div className="header">
              <ul className="greenwoods">
                <li className="greenwoodsheader"><img className="logo" src={infinitySpace}></img></li>
                <a className={this.state.selectedTab === 'DesignGallery' ? "activegreenwoods1stheader" : "greenwoods1stheader"} onClick={() => { this.onClickModularKitchen("DesignGallery") }}>Design Gallery</a>
                <a className={this.state.selectedTab === 'ModularKitchen' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("ModularKitchen") }}>Modular Kitchen</a>
                <a className={this.state.selectedTab === 'Bedroom' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("Bedroom") }}>Bedroom</a>
                <a className={this.state.selectedTab === 'OtherInteriors' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("OtherInteriors") }}>Other Interiors</a>
                <a className={this.state.selectedTab === 'RecentProjects' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("RecentProjects") }}>Recent Projects</a>
              </ul>
            </div>
            <div className="secondheader">
              <ul className="blackColour">Your safety is our priority. We're working to deliver Safe Home Interiors to you
        </ul>
            </div>
            <div className="container-64">
              <div className="row">
                <div className="col-sm-7">
                  <div className="home-banner-content">
                    <h1 className="title">Start your home interiors journey online, </h1>
                    <p className="description">
                      from the
                <span><b> comfort of your home</b></span>
                    </p>
                    <div className="hash-tag">
                      <button className="estimate-btn">Get Free Estimate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="safetyHeader">
            <div className="safetyHeadersvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-48 0 75.19 76.47"><style>{"\
        .cls-1{\
          fill:#ff4713;\
        }\
        .cls-2{\
          fill:#fff;;\
        }\
      "}</style><rect className="cls-1" x="-1.16" y="-0.53" width="90.86" height="90.74" /><path className="cls-2" d="M16.91,26.26a.72.72,0,0,1-.41-.14c-1.18-.86-2.72-2-4.18-3.3a13.1,13.1,0,0,1-1.92-1.95,11.08,11.08,0,0,1-1.87-4,16.66,16.66,0,0,1-.44-2.68C8,13.2,8,12.17,8,11.16V7.36a.62.62,0,0,1,.6-.66,22.36,22.36,0,0,0,6.25-1.39,16.67,16.67,0,0,0,1.71-.76.74.74,0,0,1,.68,0A20.24,20.24,0,0,0,22.35,6.3a24.23,24.23,0,0,0,2.89.4.61.61,0,0,1,.59.65c0,.59,0,1.19,0,1.78v1.23c0,.86,0,1.75,0,2.63a16.29,16.29,0,0,1-.56,4.09A10.93,10.93,0,0,1,23.34,21a14.25,14.25,0,0,1-1.78,1.78h0l-4.17,3.3A.76.76,0,0,1,16.91,26.26ZM9.08,10v1.22a29.45,29.45,0,0,0,.07,3,14.5,14.5,0,0,0,.41,2.5,10,10,0,0,0,1.68,3.59A13.11,13.11,0,0,0,13,22c1.34,1.18,2.76,2.25,3.89,3.08l4-3.13a12,12,0,0,0,1.63-1.63,9.74,9.74,0,0,0,1.74-3.55A15.62,15.62,0,0,0,24.76,13c0-.87,0-1.75,0-2.61V7.72a22.34,22.34,0,0,1-2.62-.39,20.84,20.84,0,0,1-5.22-1.77,16.87,16.87,0,0,1-1.67.74A23.47,23.47,0,0,1,9.08,7.72V10ZM25.16,7.76Z" /><polygon className="cls-2" points="15.93 17.96 13.45 15.48 14.04 14.89 15.93 16.78 20.74 11.97 21.33 12.57 15.93 17.96" /></svg>
            </div>
            <div className="safeInteriors">
              <h3>
                Safe Interiors by Infinity Space
            </h3>
              <p className="contactless">Contactless interior designing <br />
          Best hygiene & social distancing <br />
            Sealed & sanitised before handover
            </p>
            </div>
            <div className="safetyHeadersvg">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-45 4 90 60" >
                <style type="text/css">{"\
            .policy{\
              fill:#FFFFFF;\
            }\
            "}
                </style>
                <g>
                  <path className="policy" d="M41.3,35c-0.8-0.5-1.8-0.6-2.6,0c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0-0.1-0.1c-1-1-2-1.2-3.3-0.5
              c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c-0.7-0.9-1.7-1.2-2.8-0.9c0,0,0-0.1,0-0.1l0.1-1.8c0.1-1.3,0.1-2.6,0.2-3.9c0.1-1.5-1-2.6-2.5-2.7
              c0,0-0.1,0-0.1,0c-1.4,0-2.4,1.1-2.5,2.5c0,1-0.1,2-0.1,2.9L27.2,33c-0.1,1.4-0.1,2.8-0.2,4.2c0,0,0,0.1,0,0.1
              c-1.6-1-3.4-1.4-5.4-1.7c-1.1-0.2-2.2,0.3-2.9,1.3c-0.4,0.7-0.6,1.4-0.3,2c0.2,0.6,0.7,1,1.4,1.2c0.6,0.2,1.1,0.4,1.7,0.6l0.5,0.2
              c1.1,0.4,2,1,2.5,1.8c1.2,1.6,2.2,3.2,3.1,4.8c1,1.8,2.3,2.7,3.9,2.9c1.3,0.2,2.7,0.3,4.1,0.3c0.5,0,0.9,0,1.4-0.1
              c3-0.3,5-2.3,5.2-5.4c0.1-1.3,0.1-2.6,0.1-4c0-1.3,0.1-2.5,0.1-3.8C42.5,36.2,42.1,35.5,41.3,35z M31.4,29.2
              c-0.1,2.1-0.2,4.2-0.3,6.3c0,0.5,0,1-0.1,1.4c-0.1,0.7,0.3,0.8,0.5,0.8c0.2,0,0.3,0,0.4-0.1c0.2-0.1,0.2-0.4,0.2-0.6
              c0-0.2,0-0.5,0-0.7c0-0.5,0-0.9,0.1-1.4c0-0.2,0.1-0.3,0.3-0.4c0.7-0.2,1.2,0,1.7,0.5c0.1,0.1,0.1,0.2,0.1,0.4
              c0,0.6-0.1,1.2-0.1,1.8l0,0.4c0,0.2,0,0.4,0.2,0.6c0.1,0.1,0.2,0.2,0.4,0.2c0,0,0,0,0,0c0.4,0,0.6-0.3,0.6-0.7c0-0.3,0-0.6,0-0.8
              c0-0.4,0-0.8,0-1.3c0-0.2,0-0.2,0.2-0.3c0.5-0.2,1-0.2,1.5,0.1c0.5,0.3,0.6,0.6,0.6,1.2c-0.1,0.4-0.1,0.7-0.1,1.1
              c0,0.2,0,0.4,0,0.6c0,0.6,0.3,0.7,0.5,0.7c0.2,0,0.4,0,0.4-0.1c0.1-0.1,0.2-0.3,0.2-0.6c0-0.4,0-0.8,0.1-1.2l0-0.6
              c0-0.4,0.1-0.6,0.3-0.8c0.2-0.1,0.4-0.2,0.8-0.1c0.7,0.1,1.2,0.6,1.2,1.3c-0.1,2.7-0.2,5.4-0.3,8.2c0,1.2-0.5,2.2-1.4,3.1
              c-0.8,0.7-1.7,1-2.8,1.1c-1.5,0.1-3.1,0-5.2-0.3c-1.2-0.2-2.2-0.8-2.9-2.1c-1-1.7-2-3.3-3.2-4.9c-0.8-1-1.8-1.8-3.2-2.4
              c-0.5-0.2-1-0.4-1.5-0.6c-0.3-0.1-0.7-0.3-1-0.4c-0.5-0.2-0.6-0.5-0.4-0.9c0.3-0.8,0.9-1.2,1.6-1.2c0.1,0,0.2,0,0.3,0
              c1.9,0.4,4,0.8,5.7,2c0.3,0.2,0.5,0.2,0.7,0.1c0.2-0.1,0.3-0.4,0.3-0.8l0.1-1.5c0.1-2.9,0.3-5.9,0.4-8.8c0-0.6,0.3-1.1,0.8-1.3
              c0.5-0.3,1-0.2,1.6,0.1c0.4,0.3,0.6,0.7,0.6,1.3L31.4,29.2z" />
                  <g>
                    <g>
                      <path className="policy" d="M28,30.3c-5.7,0-10.4-4.7-10.4-10.4S22.2,9.5,28,9.5s10.4,4.7,10.4,10.4c0,4.1-2.4,7.8-6.1,9.5l-0.5-1.1
                  c3.3-1.5,5.4-4.8,5.4-8.4c0-5.1-4.1-9.2-9.2-9.2c-5.1,0-9.2,4.1-9.2,9.2s4.1,9.2,9.2,9.2V30.3z" />
                    </g>
                    <g>
                      <polygon className="policy" points="25.9,24.8 22.5,21.4 23.3,20.5 25.9,23.2 32.6,16.5 33.4,17.3 			" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="safeInteriors">
              <h3>
                Easy Booking Policy.
            </h3>
              <p className="contactless">Pay half the token amount <br />
          Relaxed cancellations <br />
          100% refund*
            </p>
            </div>
          </div>
          <h2 className="text-center">Why Meet Us Online</h2>
          <div className="underLine"></div>
          <div className="meetOnlineImage">
            <div className="item">
              <div>
                <img src={comportOfYourHome} ></img>
              </div>
              <div className="imgcaptions">
                <p><b>Comfort of your home</b></p>
                <p>Design interiors from the comfort of your home.</p>
              </div>
            </div>
            <div className="item">
              <div>
                <img className="expertImage" src={expertDesigners} ></img>
              </div>
              <div className="imgcaptions">
                <p><b>Expert designers</b></p>
                <p>Explore ideas & designs online with our experts.</p>
              </div>
            </div>
            <div className="item">
              <div>
                <img className="expertImage" src={live3DDesigns} ></img>
              </div>
              <div className="imgcaptions">
                <p><b>Live 3D designs</b></p>
                <p>Visualise home interiors for your floor plan.</p>
              </div>
            </div>
            <div className="item">
              <div>
                <img src={instantPricing} >
                </img></div>
              <div className="imgcaptions">
                <p><b>Instant pricing</b></p>
                <p>Enjoy full transparency and stay within budget.</p>
              </div>

            </div>
          </div>
          <div className="section easy-steps pt64 pb64 linecss">
            <div className="container-64">
              <div className="row">
                <div className="col-sm-12">
                  <div className="content">
                    <h3 className="heading text-center">Three Steps to Easy Home Interiors</h3>
                    <div className="row steps gutter-30">
                      <div className="col-sm-4">
                        <div className="step">
                          <i className="imgicondiscover"></i>
                          <h3>Discover</h3>
                          <p className="threestepspara">Meet your Infinity Space Design Expert online or<br /> at your home or at one of our Experience Centers.</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="step">
                          <i className="imgicondesign"></i>
                          <h3>Design</h3>
                          <p className="threestepspara">Co-create your interior design and get an<br /> instant quote, with our 3D visualisation tool, SpaceCraft.</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="step">
                          <i className="imgiconmovein"></i>
                          <h3>Move In</h3>
                          <p className="threestepspara">Move into your newly furnished home within 45<br /> days of finalising of your interior designs.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section easy-steps pb64 linecss"></div>
          <div className="section">
            <div className="container-64">
              <div className="trending slider-design">
                <h2 className="heading">Best Selling Kitchens <a href="https://www.homelane.com/modular-kitchen-designs" className="btn btn-warm-red-link pull-right">See all
          <svg viewBox="0 0 24 24" className="seeAllArrow">
                    <path fill="#ef4626" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a></h2>
                <div id="trending-kitchen-designs" className="carousel slide rag-carousel-lazy bulk-images" data-ride="carousel" data-interval="false">

                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div className="imageText">
                              L Shaped Modular Kitchen
                        </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage2}></img>
                            <div className="imageText">
                              Blue Pheonix Modular Kitchen
                        </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage3}></img>
                            <div className="imageText">
                              White Guitar Modular Kitchen
                        </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage4}></img>
                            <div className="imageText">
                              Dark Pheonix L Shaped Modular Kitchen
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section pt64">
            <div className="container-64">
              <div className="trending slider-design">
                <h2 className="heading">Best Selling Wardrobes <a href="https://www.homelane.com/modular-kitchen-designs" className="btn btn-warm-red-link pull-right">See all
          <svg viewBox="0 0 24 24" className="seeAllArrow">
                    <path fill="#ef4626" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a></h2>
                <div id="trending-kitchen-designs" className="carousel slide rag-carousel-lazy bulk-images" data-ride="carousel" data-interval="false">

                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div className="imageText">
                              L Shaped Modular Kitchen
                        </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage2}></img>
                            <div className="imageText">
                              Blue Pheonix Modular Kitchen
                        </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage3}></img>
                            <div className="imageText">
                              White Guitar Modular Kitchen
                        </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage4}></img>
                            <div className="imageText">
                              Dark Pheonix L Shaped Modular Kitchen
                        </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primry section-padding-xss" id="g-copyright">

            <div className="sudeo sudeo--right"><img className="w-right rag-lazy" src={bitmapRight} alt="Bitmap pattern"></img>
            </div>
            <div className="bottom-container">
              <div className="bottom-row features-container">

                <div className="features-container-interpreter"></div>
                <div className="col-md-6 col-lg-3 pb-4">
                  <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-quad">

                    <svg width="47px" height="45px" viewBox="0 0 242 256" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Warranty" transform="translate(0.125000, 0.868409)" fillRule="nonzero">
                          <path d="M109,237.131591 C110.000005,236.798256 111.916652,236.048263 114.75,234.881591 C117.583347,233.714918 119.833325,232.798261 121.5,232.131591 C138.500085,224.464886 151.33329,217.464956 160,211.131591 C170.66672,203.798221 179.166635,196.964956 185.5,190.631591 C203.166755,172.964836 212,150.631726 212,123.631591 L212,98.1315908 C212,92.7982308 214.66664,90.1315908 220,90.1315908 C225.33336,90.1315908 228,92.7982308 228,98.1315908 L228,123.631591 C228,154.631746 217.66677,180.798151 197,202.131591 C189.333295,209.798296 180.000055,217.298221 169,224.631591 C156.666605,233.298301 143.000075,240.798226 128,247.131591 C125.99999,247.798261 123.416682,248.714918 120.25,249.881591 C117.083318,251.048263 115.16667,251.798256 114.5,252.131591 C113.499995,252.464926 112.416673,252.881588 111.25,253.381591 C110.083327,253.881593 109.333335,254.131591 109,254.131591 C106.666655,254.798261 104.666675,254.631596 103,253.631591 C78.99988,242.298201 60.3334,231.131646 47,220.131591 C33.6666,209.131536 22.00005,195.631671 12,179.631591 C3.99996,167.298196 0,153.298336 0,137.631591 L0,50.6315908 C0,46.2982358 2.166645,43.6315958 6.5,42.6315908 C6.833335,42.6315908 7.166665,42.5482583 7.5,42.3815908 C7.833335,42.2149233 8.4166625,42.0482583 9.25,41.8815908 C10.0833375,41.7149233 10.83333,41.6315908 11.5,41.6315908 C16.83336,40.2982508 21.16665,39.2982608 24.5,38.6315908 C37.8334,35.2982408 50.999935,30.9649508 64,25.6315908 C82.66676,18.2982208 96.66662,10.4649658 106,2.13159076 C109.666685,-0.868424243 113.49998,-0.701759243 117.5,2.63159076 C117.833335,2.96492576 118.33333,3.29825576 119,3.63159076 C119.333335,3.96492576 120.999985,5.29824576 124,7.63159076 C130.6667,12.6316158 138.166625,16.9649058 146.5,20.6315908 C156.833385,25.2982808 167.99994,29.1315758 180,32.1315908 C185.33336,33.4649308 187.33334,36.6315658 186,41.6315908 C184.66666,47.2982858 181.33336,49.2982658 176,47.6315908 C165.666615,45.2982458 153.666735,41.2982858 140,35.6315908 C128.333275,29.9648958 119.83336,25.1316108 114.5,21.1315908 C113.83333,20.4649208 112.83334,19.7982608 111.5,19.1315908 C102.16662,26.1316258 88.333425,33.4648858 70,41.1315908 C55.99993,46.4649508 42.166735,50.7982408 28.5,54.1315908 C23.83331,55.4649308 19.83335,56.4649208 16.5,57.1315908 L16.5,137.631591 C16.5,150.298321 19.666635,161.464876 26,171.131591 C35.000045,185.464996 45.4166075,197.548208 57.25,207.381591 C69.0833925,217.214973 85.833225,227.298206 107.5,237.631591 C107.833335,237.298256 108.33333,237.131591 109,237.131591 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M227,27.1315908 C230.666685,23.1315708 234.49998,23.1315708 238.5,27.1315908 C242.50002,31.1316108 242.333355,34.9649058 238,38.6315908 L116,156.631591 C112.333315,160.964946 108.666685,160.964946 105,156.631591 C103.999995,155.964921 101.666685,153.798276 98,150.131591 C90.999965,143.131556 85.83335,138.131606 82.5,135.131591 L60.5,113.131591 C59.16666,111.798251 58.5,109.964936 58.5,107.631591 C58.5,105.298246 59.16666,103.298266 60.5,101.631591 C64.50002,97.9649058 68.333315,97.9649058 72,101.631591 L76.25,105.881591 C77.4166725,107.048263 78.9166575,108.464916 80.75,110.131591 C82.5833425,111.798266 84.666655,113.798246 87,116.131591 C89.333345,118.464936 91.666655,120.964911 94,123.631591 C97.33335,126.631606 102.499965,131.631556 109.5,138.631591 L110.5,139.631591 L227,27.1315908 Z" id="Path" fill="#FF9A00"></path>
                        </g>
                      </g>
                    </svg>
                    <figcaption>
                      <h4 className="fig-thumbnail__title">5-Year Warranty</h4>
                      <p className="fig-thumbnail__des">All our products come with a 5-year warranty for any manufacturing defects.</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="features-container-interpreter"></div>
                <div className="col-md-6 col-lg-3 pb-4">
                  <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-quad">

                    <svg width="47px" height="45px" viewBox="0 0 254 230" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Installation" transform="translate(0.821416, 0.249991)" fillRule="nonzero">
                          <path d="M125.928584,17.2500088 L12.428584,96.2500088 C8.09522902,99.2500238 4.59526402,98.5833638 1.92858402,94.2500088 C-1.07143098,90.5833238 -0.571435977,87.0833588 3.42858402,83.7500088 L121.428584,1.75000875 C124.761934,-0.58333625 127.761904,-0.58333625 130.428584,1.75000875 L248.928584,87.2500088 C252.928604,89.9166888 253.428599,93.4166538 250.428584,97.7500088 C247.428569,101.416694 243.928604,101.916689 239.928584,99.2500088 L125.928584,17.2500088 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M63.428584,19.2500088 C63.428584,17.2500088 64.1785765,15.5000162 65.678584,14.0000088 C67.1785915,12.5000013 69.095239,11.7500088 71.428584,11.7500088 C73.428584,11.7500088 75.1785765,12.5000013 76.678584,14.0000088 C78.1785915,15.5000162 78.928584,17.2500088 78.928584,19.2500088 L78.928584,42.2500088 C78.928584,47.2500338 76.428609,49.7500088 71.428584,49.7500088 C66.095224,49.7500088 63.428584,47.2500338 63.428584,42.2500088 L63.428584,19.2500088 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M71.428584,179.250009 C73.428584,179.250009 75.1785765,180.000001 76.678584,181.500009 C78.1785915,183.000016 78.928584,184.916664 78.928584,187.250009 C78.928584,189.250009 78.1785915,191.000001 76.678584,192.500009 C75.1785765,194.000016 73.428584,194.750009 71.428584,194.750009 L45.928584,194.750009 C43.928584,194.750009 42.1785915,194.000016 40.678584,192.500009 C39.1785765,191.000001 38.428584,189.250009 38.428584,187.250009 L38.428584,63.7500088 C38.428584,58.7499837 40.928559,56.2500088 45.928584,56.2500088 C50.928609,56.2500088 53.428584,58.7499837 53.428584,63.7500088 L53.428584,179.250009 L71.428584,179.250009 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M195.928584,63.7500088 C195.928584,58.7499837 198.428559,56.2500088 203.428584,56.2500088 C208.428609,56.2500088 210.928584,58.7499837 210.928584,63.7500088 L210.928584,86.7500088 C210.928584,88.7500088 210.178592,90.5000012 208.678584,92.0000088 C207.178577,93.5000163 205.428584,94.2500088 203.428584,94.2500088 C198.428559,94.2500088 195.928584,91.7500338 195.928584,86.7500088 L195.928584,63.7500088 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M225.428584,165.750009 C230.761944,169.083359 232.095264,173.583314 229.428584,179.250009 L214.928584,203.750009 C211.261899,209.416704 206.761944,210.583359 201.428584,207.250009 L200.928584,207.250009 C200.595249,207.250009 200.095254,207.083344 199.428584,206.750009 C195.761899,204.416664 191.928604,204.583329 187.928584,207.250009 C183.595229,209.583354 181.428584,212.916654 181.428584,217.250009 L181.428584,219.250009 C181.428584,221.916689 180.428594,224.333331 178.428584,226.500009 C176.428574,228.666686 173.928599,229.750009 170.928584,229.750009 L143.428584,229.750009 C140.761904,229.750009 138.345262,228.666686 136.178584,226.500009 C134.011907,224.333331 132.928584,221.916689 132.928584,219.250009 L132.928584,217.750009 C132.928584,214.083324 131.261934,210.916689 127.928584,208.250009 C127.595249,208.250009 127.095254,208.083344 126.428584,207.750009 L125.928584,207.750009 C121.928564,205.416664 118.095269,205.249999 114.428584,207.250009 C114.095249,207.583344 113.761919,207.750009 113.428584,207.750009 L112.428584,207.750009 C107.095224,211.083359 102.595269,209.750039 98.928584,203.750009 L84.928584,180.250009 C80.928564,174.583314 81.928554,169.750029 87.928584,165.750009 L88.928584,165.250009 L89.428584,164.750009 C93.761939,162.749999 95.928584,159.250034 95.928584,154.250009 L95.928584,153.750009 C95.928584,149.416654 93.928604,146.083354 89.928584,143.750009 L87.928584,142.750009 C82.261889,138.416654 81.261899,133.750034 84.928584,128.750009 L98.928584,104.250009 C102.928604,98.5833138 107.595224,97.4166588 112.928584,100.750009 L114.928584,101.750009 C118.928604,103.416684 122.761899,103.250019 126.428584,101.250009 C130.761939,98.5833287 132.928584,95.2500287 132.928584,91.2500088 L132.928584,88.7500088 C132.928584,85.7499937 134.011907,83.2500187 136.178584,81.2500088 C138.345262,79.2499988 140.761904,78.2500088 143.428584,78.2500088 L170.928584,78.2500088 C173.928599,78.2500088 176.428574,79.2499988 178.428584,81.2500088 C180.428594,83.2500187 181.428584,85.7499937 181.428584,88.7500088 L181.428584,91.2500088 C181.428584,95.2500287 183.261899,98.2499988 186.928584,100.250009 C187.261919,100.250009 187.428584,100.416674 187.428584,100.750009 L187.928584,100.750009 C188.261919,101.083344 188.595249,101.250009 188.928584,101.250009 C192.261934,102.916684 195.761899,102.750019 199.428584,100.750009 L200.428584,100.250009 C201.095254,99.5833387 201.928579,99.2500088 202.928584,99.2500088 C205.595264,98.2500038 207.928574,98.2500038 209.928584,99.2500088 C210.595254,99.5833438 211.261914,100.083339 211.928584,100.750009 C212.595254,101.083344 213.261914,101.583339 213.928584,102.250009 L215.428584,103.750009 L228.928584,127.750009 C232.928604,133.416704 231.761949,138.249989 225.428584,142.250009 L217.928584,146.750009 C217.928584,147.416679 218.011917,148.583334 218.178584,150.250009 C218.345252,151.916684 218.428584,153.083339 218.428584,153.750009 C218.428584,154.416679 218.345252,155.583334 218.178584,157.250009 C218.011917,158.916684 217.928584,160.250004 217.928584,161.250009 L225.428584,165.750009 Z M205.928584,171.250009 C202.928569,169.583334 201.761914,167.083359 202.428584,163.750009 L203.428584,153.750009 L202.428584,143.750009 C201.761914,140.416659 202.928569,137.916684 205.928584,136.250009 L213.928584,131.750009 L204.428584,115.250009 C196.761879,118.916694 188.928624,118.583364 180.928584,114.250009 C180.595249,113.916674 180.261919,113.750009 179.928584,113.750009 L178.928584,112.750009 C171.595214,108.749989 167.428589,102.250054 166.428584,93.2500088 L147.928584,93.2500088 C147.261914,102.250054 142.761959,109.249984 134.428584,114.250009 C125.761874,118.916699 117.428624,119.416694 109.428584,115.750009 L99.928584,132.250009 C107.261954,137.583369 110.928584,144.749964 110.928584,153.750009 L110.928584,154.250009 C110.928584,163.250054 107.261954,170.416649 99.928584,175.750009 L109.928584,192.750009 C116.928619,189.749994 124.428544,190.083324 132.428584,193.750009 L134.428584,194.750009 C142.428624,199.416699 146.928579,206.083299 147.928584,214.750009 L166.928584,214.750009 C167.595254,205.749964 172.095209,198.916699 180.428584,194.250009 C187.761954,189.583319 195.761874,188.916659 204.428584,192.250009 L213.928584,176.250009 L205.928584,171.250009 Z" id="Combined-Shape" fill="#FF9A00"></path>
                          <polygon id="Path" fill="#000000" points="206.928584 193.750009 206.928584 193.250009 205.928584 193.250009 205.428584 192.750009 205.428584 193.750009"></polygon>
                          <path d="M106.928584,194.250009 L108.928584,194.250009 L108.428584,193.250009 L107.928584,193.750009 C107.595249,193.750009 107.261919,193.916674 106.928584,194.250009 Z" id="Path" fill="#000000"></path>
                          <path d="M145.428584,143.250009 C148.761934,139.916659 152.595229,138.250009 156.928584,138.250009 C161.261939,138.250009 165.011902,139.833326 168.178584,143.000009 C171.345267,146.166691 172.928584,149.916654 172.928584,154.250009 C172.928584,158.583364 171.345267,162.333326 168.178584,165.500009 C165.011902,168.666691 161.261939,170.250009 156.928584,170.250009 C152.595229,170.250009 148.845267,168.666691 145.678584,165.500009 C142.511902,162.333326 140.928584,158.583364 140.928584,154.250009 C140.928584,149.916654 142.428569,146.250024 145.428584,143.250009 Z" id="Path" fill="#FF9A00"></path>
                        </g>
                      </g>
                    </svg>
                    <figcaption>
                      <h4 className="fig-thumbnail__title">45-day Installation</h4>
                      <p className="fig-thumbnail__des">Get your chosen products installed in 45 days, or we pay you rent. That�s a promise!</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="features-container-interpreter"></div>
                <div className="col-md-6 col-lg-3 pb-4">
                  <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-quad">

                    <svg width="47px" height="45px" viewBox="0 0 257 225" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Designers" transform="translate(0.875000, 0.500000)" fillRule="nonzero">
                          <path d="M165,177.5 L165,202.5 C165,208.50003 162.500025,213.583313 157.5,217.75 C152.499975,221.916687 146.6667,224 140,224 L25,224 C18.3333,224 12.500025,221.916687 7.5,217.75 C2.499975,213.583313 0,208.50003 0,202.5 L0,177.5 C0,164.1666 4.499955,151.666725 13.5,140 L18,135.5 C22.333355,130.499975 27.49997,126.33335 33.5,123 C47.833405,114.33329 64.166575,110 82.5,110 C101.16676,110 117.333265,114.33329 131,123 C133,124 135.99998,125.999985 140,129 C143.33335,131.333345 145.833325,133.666655 147.5,136 C149.5,138 150.83333,139.499995 151.5,140.5 C160.500045,151.500055 165,163.833265 165,177.5 Z M140,149.5 C139.33333,148.16666 138.33334,147.000005 137,146 C135.66666,143.99999 133.66668,142.166675 131,140.5 C129.66666,139.16666 127.33335,137.50001 124,135.5 C112.333275,128.16663 98.50008,124.5 82.5,124.5 C66.49992,124.5 52.666725,128.16663 41,135.5 C34.99997,139.50002 30.66668,142.83332 28,145.5 C27.33333,146.16667 26.33334,147.49999 25,149.5 C17.999965,158.16671 14.5,167.49995 14.5,177.5 L14.5,202.5 C14.5,204.166675 15.49999,205.749992 17.5,207.25 C19.50001,208.750008 21.999985,209.5 25,209.5 L140,209.5 C143.000015,209.5 145.49999,208.750008 147.5,207.25 C149.50001,205.749992 150.5,204.166675 150.5,202.5 L150.5,177.5 C150.5,166.83328 147.000035,157.50004 140,149.5 Z" id="Combined-Shape" fill="#FF9A00"></path>
                          <path d="M115.5,14 C124.83338,23.000045 129.5,33.999935 129.5,47 C129.5,60.000065 124.916712,71.0832875 115.75,80.25 C106.583288,89.4167125 95.500065,94 82.5,94 C69.499935,94 58.4167125,89.4167125 49.25,80.25 C40.0832875,71.0832875 35.5,60.000065 35.5,47 C35.5,33.999935 40.0832875,22.9167125 49.25,13.75 C58.4167125,4.5832875 69.499935,0 82.5,0 C95.500065,0 106.499955,4.66662 115.5,14 Z M105.5,70 C111.833365,63.666635 115,56.000045 115,47 C115,37.999955 111.833365,30.333365 105.5,24 C99.166635,17.666635 91.500045,14.5 82.5,14.5 C73.499955,14.5 65.833365,17.666635 59.5,24 C53.166635,30.333365 50,37.999955 50,47 C50,56.000045 53.166635,63.666635 59.5,70 C65.833365,76.333365 73.499955,79.5 82.5,79.5 C91.500045,79.5 99.166635,76.333365 105.5,70 Z" id="Combined-Shape" fill="#FF9A00"></path>
                          <path d="M229,27.5 C237.00004,35.50004 241,45.16661 241,56.5 C241,67.83339 237.00004,77.49996 229,85.5 C220.99996,93.50004 211.33339,97.5 200,97.5 C188.66661,97.5 179.00004,93.50004 171,85.5 C162.99996,77.49996 159,67.83339 159,56.5 C159,45.16661 162.99996,35.50004 171,27.5 C179.00004,19.49996 188.66661,15.5 200,15.5 C211.33339,15.5 220.99996,19.49996 229,27.5 Z M218.5,75.5 C223.83336,70.16664 226.5,63.83337 226.5,56.5 C226.5,49.16663 223.916692,42.9166925 218.75,37.75 C213.583308,32.5833075 207.33337,30 200,30 C192.66663,30 186.416692,32.5833075 181.25,37.75 C176.083308,42.9166925 173.5,49.16663 173.5,56.5 C173.5,63.83337 176.083308,70.0833075 181.25,75.25 C186.416692,80.4166925 192.66663,83 200,83 C207.33337,83 213.499975,80.500025 218.5,75.5 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                          <path d="M179.5,130.5 C174.83331,132.166675 171.666675,130.833355 170,126.5 C167.666655,122.166645 168.83331,119.00001 173.5,117 C181.833375,113.333315 190.66662,111.5 200,111.5 C215.33341,111.5 228.33328,115.83329 239,124.5 C250.33339,133.83338 256,144.999935 256,158 L256,174 C256,181.000035 253.166695,186.83331 247.5,191.5 C241.833305,196.16669 235.00004,198.5 227,198.5 L203.5,198.5 C198.83331,198.5 196.5,196.16669 196.5,191.5 C196.5,186.499975 198.83331,184 203.5,184 L227,184 C231.00002,184 234.416652,183.00001 237.25,181 C240.083347,178.99999 241.5,176.66668 241.5,174 L241.5,158 C241.5,149.33329 237.666705,142.00003 230,136 C221.666625,129.3333 211.666725,126 200,126 C192.333295,126 185.50003,127.499985 179.5,130.5 Z" id="Path" fill="#FFFFFF"></path>
                        </g>
                      </g>
                    </svg>
                    <figcaption>
                      <h4 className="fig-thumbnail__title">900+ Expert Designers</h4>
                      <p className="fig-thumbnail__des">Create your dream home, fitting your lifestyle, with the help of our top designers.</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="features-container-interpreter"></div>
                <div className="col-md-6 col-lg-3 pb-0 pb-md-4">
                  <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-quad">

                    <svg width="47px" height="45px" viewBox="0 0 250 257" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Service" transform="translate(0.000000, 0.916665)" fillRule="nonzero">
                          <path d="M227.5,206.583335 L175,150.083335 C171.66665,146.083315 171.833315,142.58335 175.5,139.583335 C179.166685,135.91665 182.833315,136.083315 186.5,140.083335 L238.5,196.083335 C246.166705,204.41671 249.833335,213.41662 249.5,223.083335 L249.5,224.083335 C249.166665,224.41667 249,225.249995 249,226.583335 C248.666665,227.250005 248.5,227.999997 248.5,228.833335 C248.5,229.666672 248.333335,230.416665 248,231.083335 C246.66666,237.083365 243.66669,242.166647 239,246.333335 C234.33331,250.500022 229.00003,253.41666 223,255.083335 C209.333265,257.750015 198.000045,253.750055 189,243.083335 L135.5,185.583335 C132.16665,181.91665 132.333315,178.25002 136,174.583335 C140.00002,171.58332 143.66665,171.749985 147,175.083335 L200.5,233.083335 C205.83336,239.4167 212.16663,241.75001 219.5,240.083335 C226.83337,238.41666 231.333325,234.250035 233,227.583335 C233.333335,226.916665 233.5,225.916675 233.5,224.583335 C233.833335,223.58333 234,222.58334 234,221.583335 C234.333335,216.916645 232.16669,211.916695 227.5,206.583335 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M215,214.583335 C218.666685,214.583335 220.5,216.583315 220.5,220.583335 C220.5,224.583355 218.50002,226.583335 214.5,226.583335 C210.833315,226.583335 209,224.41669 209,220.083335 C209,216.41665 210.99998,214.583335 215,214.583335 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M92,66.5833347 C96.00002,52.5832647 93.500045,39.7500597 84.5,28.0833347 C77.8333,20.4166297 68.83339,16.2500047 57.5,15.5833347 L57,15.5833347 C56.33333,15.5833347 56,15.7499997 56,16.0833347 C55.33333,17.0833397 55.33333,17.9166647 56,18.5833347 L69,32.5833347 C71.66668,35.2500147 73,37.9166547 73,40.5833347 C73,42.5833447 72.166675,44.4166597 70.5,46.0833347 L46,68.0833347 C44.999995,69.4166747 43.333345,70.0833347 41,70.0833347 L40.5,70.0833347 C38.166655,70.0833347 36.33334,69.4166747 35,68.0833347 L19,51.5833347 C18.666665,51.2499997 18.16667,51.0833347 17.5,51.0833347 L16.5,51.5833347 C15.83333,51.5833347 15.5,52.4166597 15.5,54.0833347 C15.5,64.0833847 18.8333,72.9166297 25.5,80.5833347 C36.83339,92.5833947 49.999925,96.0833597 65,91.0833347 C65.333335,91.0833347 65.666665,91.0000022 66,90.8333347 C66.333335,90.6666672 66.666665,90.5833347 67,90.5833347 L67.5,90.5833347 C70.500015,90.5833347 72.833325,92.0833197 74.5,95.0833347 L86,106.583335 C89.666685,110.25002 89.666685,113.749985 86,117.083335 C82.333315,120.75002 78.666685,120.75002 75,117.083335 L65,107.083335 C44.666565,111.083355 27.8334,105.58341 14.5,90.5833347 C4.833285,79.9166147 1.13686838e-13,67.5834047 1.13686838e-13,53.5833347 L1.13686838e-13,52.5833347 C1.000005,44.2499597 4.999965,39.0833447 12,37.0833347 C19.000035,34.0833197 24.999975,35.4166397 30,41.0833347 L41,52.0833347 L54.5,39.5833347 L44.5,28.5833347 C39.499975,23.2499747 38.499985,17.0833697 41.5,10.0833347 C44.500015,2.74996473 50.166625,-0.583335266 58.5,0.0833347338 C74.166745,1.08333973 86.66662,7.24994473 96,18.5833347 C108.333395,33.5834097 112.000025,50.0832447 107,68.0833347 L117.5,78.5833347 C121.166685,82.2500197 121.166685,85.9166497 117.5,89.5833347 C114.16665,93.2500197 110.666685,93.2500197 107,89.5833347 L95,77.5833347 C91.999985,75.9166597 90.5,73.5833497 90.5,70.5833347 C90.5,68.9166597 90.999995,67.5833397 92,66.5833347 Z" id="Path" fill="#FFFFFF"></path>
                          <path d="M99.5,162.083335 L22.5,239.083335 C18.833315,242.75002 15.166685,242.75002 11.5,239.083335 C7.833315,235.41665 7.833315,231.75002 11.5,228.083335 L89,151.083335 L80.5,142.083335 C77.16665,138.749985 77.16665,135.25002 80.5,131.583335 L188,25.0833347 C194.00003,19.0833047 201.166625,16.1666672 209.5,16.3333347 C217.833375,16.5000022 224.833305,19.5833047 230.5,25.5833347 C235.83336,31.5833647 238.416668,38.4999622 238.25,46.3333347 C238.083332,54.1667072 235.33336,60.9166397 230,66.5833347 L123,175.083335 C118.99998,178.75002 115.166685,178.75002 111.5,175.083335 L99.5,162.083335 Z M218.5,55.5833347 C224.833365,49.2499697 225.00003,42.7500347 219,36.0833347 C216.33332,33.4166547 213.00002,32.0000022 209,31.8333347 C204.99998,31.6666672 201.66668,32.9166547 199,35.5833347 L97,137.083335 L117.5,158.583335 L218.5,55.5833347 Z" id="Combined-Shape" fill="#FF9A00"></path>
                        </g>
                      </g>
                    </svg>
                    <figcaption>
                      <h4 className="fig-thumbnail__title">Post-Installation Service</h4>
                      <p className="fig-thumbnail__des">Enjoy unwavering support and services from our skilled team for up to 5 years. </p>
                    </figcaption>
                  </figure>
                </div>
              </div >
            </div >
            <div className="sudeo sudeo--left">
              <img className="asyncAsset rag-lazy" src={bitmap} alt="Bitmap pattern">
              </img>
            </div>
          </div>
          <div className="banner-form pull-right" id="meet-designer-singup">
            <span className="closeMeetUp_popUp">x</span>
            <div className="img-heading"> <h2 className="form-heading">Meet our Designer Online</h2></div>
            <div id="banner-consultaion-form" className="customizeform2 signUpForm">
              <div className="form-group">
                <input type="text" maxLength="25" className="form-control" name="name" placeholder="Name" value={this.state.name} onChange={(e) => { this.onChangeInputField('name', e.target.value) }}></input>
                {this.state.isNameValid && <svg viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>}
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="log_email" placeholder="Email" value={this.state.email} onChange={(e) => { this.onChangeInputField('email', e.target.value) }}></input>
                {this.state.isEmailValid && <svg viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>}
              </div>
              <div className="form-group form-check">
                <input type="tel" className="form-control signUpForm" name="phone" maxLength="10" placeholder="Mobile Number" value={this.state.phone} onChange={(e) => { this.onChangeInputField('phone', e.target.value) }} data-form-selector="#banner-consultaion-form"></input>
                {this.state.isPhoneValid && <svg viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>}
              </div>
              <div className="form-group">
                <input type="tel" maxLength="6" className="form-control" name="pincode" placeholder="Current Residence Pincode" value={this.state.pincode} onChange={(e) => { this.onChangeInputField('pincode', e.target.value) }}></input>
                {this.state.isPincodeValid && <svg viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>}
              </div>
              <button disabled={!this.state.isNameValid || !this.state.isEmailValid || !this.state.isPhoneValid || !this.state.isPincodeValid} className={(!this.state.isNameValid || !this.state.isEmailValid || !this.state.isPhoneValid || !this.state.isPincodeValid) ? "form-group btn-block-disable" : "form-group btn-block"} onClick={() => { this.bookFreeOnlineConsultation() }}>Book Free Online Consultation</button>
            </div>
          </div>
          <div className="footerDescription">
            <img className="logo" src={infinitySpace}></img>
            <p>At Infinity Space, we bring together functionality and aesthetics to provide homeowners with customised
            and efficient home designs. Our designers specialise in home interior designs and home décor,
            and help you create a personalised home to suit your lifestyle. From sophisticated living room
            designs to space-saving and clutter-free interior designs, we are here to help you find the best
            home decor and home design to match your needs and style. All our products come with a 5-year warranty
            along with unwavering support and maintenance services. Explore thousands of inspiring interior
          designs or get a free estimate – it's all here on InfinitySpace.com, your one stop for complete home interiors.</p>
          </div>
          <div className="bottomFooter">
            <ul className="greenwoods">
              <li className="footerText">Infinity Space Pvt. Ltd. © 2020</li>
              <li className="footerTextSocial">
                <a className="footer-social-links__item" href="https://www.facebook.com/infisdecor" target="_blank">

                  <svg fill="#3b5998" width="16" height="16" viewBox="0 0 138.5 256.5">
                    <path id="Facebook" d="M192-256H159q-28,0-44.75,17.25T97.5-193v29H64q-5,0-5,5.5v42q0,5.5,5,5.5H97.5V-5q0,5.5,5,5.5h44q5,0,5-5.5V-111h39q5.5,0,5.5-5.5v-42a5.406,5.406,0,0,0-1.5-4,5.406,5.406,0,0,0-4-1.5h-39v-24.5q0-9.5,3.75-13.75T170-206.5h22q5.5,0,5.5-5v-39Q197.5-256,192-256Z" transform="translate(-59 256)" />
                  </svg>
                </a>
              </li>
              <li className="footerTextMail"><a className="footer-contact__item" href="mailto:balamurali@gmail.com" title="balamurali@gmail.com">
                <svg fill="#FFFFFF" width="16" height="16" viewBox="0 -50 310 200" className="mright5">
                  <path id="Mail" d="M234.5-224H21.5a20.749,20.749,0,0,0-15.25,6.25A20.749,20.749,0,0,0,0-202.5v149A20.749,20.749,0,0,0,6.25-38.25,20.749,20.749,0,0,0,21.5-32h213a20.749,20.749,0,0,0,15.25-6.25A20.749,20.749,0,0,0,256-53.5v-149a20.749,20.749,0,0,0-6.25-15.25A20.749,20.749,0,0,0,234.5-224Zm-213,10.5h213a3.838,3.838,0,0,1,1.5.5h.5l-103,83.5a10.833,10.833,0,0,1-11,0L19.5-213H20A3.838,3.838,0,0,1,21.5-213.5Zm224,160a10.58,10.58,0,0,1-3.25,7.75,10.58,10.58,0,0,1-7.75,3.25H21.5a10.58,10.58,0,0,1-7.75-3.25A10.58,10.58,0,0,1,10.5-53.5v-149a8.057,8.057,0,0,1,1-3.5l105,85a19.556,19.556,0,0,0,11.5,3.5,19.385,19.385,0,0,0,11-3l1-.5,104.5-85a8.058,8.058,0,0,1,1,3.5Z" transform="translate(0 224)" />
                </svg>balamurali@gmail.com</a></li>
              <li className="footerTextMobile"><a className="footer-contact__item" href="tel:8438334285" title="8438334285">
                <svg fill="#FFFFFF" width="16" height="16" viewBox="-10 -10 320 210" className="mright5">
                  <path id="Phone" d="M235.5-88A152.36,152.36,0,0,1,190-95q-12.5-4-20.5,4l-29,22A171.936,171.936,0,0,1,69-140.5L90.5-169q9-8.5,5-20.5a144.552,144.552,0,0,1-7.5-46A19.755,19.755,0,0,0,82-250a19.755,19.755,0,0,0-14.5-6h-47A19.755,19.755,0,0,0,6-250a19.755,19.755,0,0,0-6,14.5Q0-138,69-69T235.5,0A19.755,19.755,0,0,0,250-6a19.755,19.755,0,0,0,6-14.5v-47A19.755,19.755,0,0,0,250-82,19.755,19.755,0,0,0,235.5-88ZM242-20.5q0,6.5-6.5,6.5Q144-14,79-79T14-235.5q0-6.5,6.5-6.5h47q6.5,0,6.5,6.5a154.106,154.106,0,0,0,8,50q1,4-2.5,7.5L55-145.5q-2.5,3-.5,7.5,15,29.5,34.5,49t49,34.5q4.5,2,7.5-.5L179-80.5q2.5-2.5,6.5-1.5a151.535,151.535,0,0,0,50,8.5q6.5,0,6.5,6Z" transform="translate(0 256)" />
                </svg>8438334285</a></li>
            </ul>
          </div>
        </div >
          :
          this.state.selectedTab === 'ModularKitchen' ?
            <div>
              <div className="header">
                <ul className="greenwoods">
                  <li className="greenwoodsheader"><img className="logo" src={infinitySpace}></img></li>
                  <a className={this.state.selectedTab === 'DesignGallery' ? "activegreenwoods1stheader" : "greenwoods1stheader"} onClick={() => { this.onClickModularKitchen("DesignGallery") }}>Design Gallery</a>
                  <a className={this.state.selectedTab === 'ModularKitchen' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("ModularKitchen") }}>Modular Kitchen</a>
                  <a className={this.state.selectedTab === 'Bedroom' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("Bedroom") }}>Bedroom</a>
                  <a className={this.state.selectedTab === 'OtherInteriors' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("OtherInteriors") }}>Other Interiors</a>
                  <a className={this.state.selectedTab === 'RecentProjects' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("RecentProjects") }}>Recent Projects</a>
                </ul>
              </div>
              <div className="section easy-steps pb64 linecss"></div>
              <div className="modularKitchencontainer">
                <h2 className="modularKitchenHeading">Modular Kitchen Designs</h2>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-inner" role="listbox">
                  <div className="item">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="kitchenImage">
                          <img className="product" src={kitchenImage1}></img>
                          <div>
                            Nature Bliss Straight Modular Kitchen
                        </div>
                          <div>
                            Size | 13' X 12'
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section easy-steps pb64"></div>
              <div className="bg-primry section-padding-xss" id="g-copyright">
                <div className="sudeo sudeo--right"><img className="w-right rag-lazy" src={bitmapRight} alt="Bitmap pattern"></img>
                </div>
                <div className="bottom-container">
                  <div className="bottom-row features-container">
                    <div className="features-container-interpreter"></div>
                    <div className="col-md-6 col-lg-3 pb-4">
                      <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-quad">
                        <svg width="47px" height="45px" viewBox="0 0 242 256" version="1.1">
                          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Warranty" transform="translate(0.125000, 0.868409)" fillRule="nonzero">
                              <path d="M109,237.131591 C110.000005,236.798256 111.916652,236.048263 114.75,234.881591 C117.583347,233.714918 119.833325,232.798261 121.5,232.131591 C138.500085,224.464886 151.33329,217.464956 160,211.131591 C170.66672,203.798221 179.166635,196.964956 185.5,190.631591 C203.166755,172.964836 212,150.631726 212,123.631591 L212,98.1315908 C212,92.7982308 214.66664,90.1315908 220,90.1315908 C225.33336,90.1315908 228,92.7982308 228,98.1315908 L228,123.631591 C228,154.631746 217.66677,180.798151 197,202.131591 C189.333295,209.798296 180.000055,217.298221 169,224.631591 C156.666605,233.298301 143.000075,240.798226 128,247.131591 C125.99999,247.798261 123.416682,248.714918 120.25,249.881591 C117.083318,251.048263 115.16667,251.798256 114.5,252.131591 C113.499995,252.464926 112.416673,252.881588 111.25,253.381591 C110.083327,253.881593 109.333335,254.131591 109,254.131591 C106.666655,254.798261 104.666675,254.631596 103,253.631591 C78.99988,242.298201 60.3334,231.131646 47,220.131591 C33.6666,209.131536 22.00005,195.631671 12,179.631591 C3.99996,167.298196 0,153.298336 0,137.631591 L0,50.6315908 C0,46.2982358 2.166645,43.6315958 6.5,42.6315908 C6.833335,42.6315908 7.166665,42.5482583 7.5,42.3815908 C7.833335,42.2149233 8.4166625,42.0482583 9.25,41.8815908 C10.0833375,41.7149233 10.83333,41.6315908 11.5,41.6315908 C16.83336,40.2982508 21.16665,39.2982608 24.5,38.6315908 C37.8334,35.2982408 50.999935,30.9649508 64,25.6315908 C82.66676,18.2982208 96.66662,10.4649658 106,2.13159076 C109.666685,-0.868424243 113.49998,-0.701759243 117.5,2.63159076 C117.833335,2.96492576 118.33333,3.29825576 119,3.63159076 C119.333335,3.96492576 120.999985,5.29824576 124,7.63159076 C130.6667,12.6316158 138.166625,16.9649058 146.5,20.6315908 C156.833385,25.2982808 167.99994,29.1315758 180,32.1315908 C185.33336,33.4649308 187.33334,36.6315658 186,41.6315908 C184.66666,47.2982858 181.33336,49.2982658 176,47.6315908 C165.666615,45.2982458 153.666735,41.2982858 140,35.6315908 C128.333275,29.9648958 119.83336,25.1316108 114.5,21.1315908 C113.83333,20.4649208 112.83334,19.7982608 111.5,19.1315908 C102.16662,26.1316258 88.333425,33.4648858 70,41.1315908 C55.99993,46.4649508 42.166735,50.7982408 28.5,54.1315908 C23.83331,55.4649308 19.83335,56.4649208 16.5,57.1315908 L16.5,137.631591 C16.5,150.298321 19.666635,161.464876 26,171.131591 C35.000045,185.464996 45.4166075,197.548208 57.25,207.381591 C69.0833925,217.214973 85.833225,227.298206 107.5,237.631591 C107.833335,237.298256 108.33333,237.131591 109,237.131591 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M227,27.1315908 C230.666685,23.1315708 234.49998,23.1315708 238.5,27.1315908 C242.50002,31.1316108 242.333355,34.9649058 238,38.6315908 L116,156.631591 C112.333315,160.964946 108.666685,160.964946 105,156.631591 C103.999995,155.964921 101.666685,153.798276 98,150.131591 C90.999965,143.131556 85.83335,138.131606 82.5,135.131591 L60.5,113.131591 C59.16666,111.798251 58.5,109.964936 58.5,107.631591 C58.5,105.298246 59.16666,103.298266 60.5,101.631591 C64.50002,97.9649058 68.333315,97.9649058 72,101.631591 L76.25,105.881591 C77.4166725,107.048263 78.9166575,108.464916 80.75,110.131591 C82.5833425,111.798266 84.666655,113.798246 87,116.131591 C89.333345,118.464936 91.666655,120.964911 94,123.631591 C97.33335,126.631606 102.499965,131.631556 109.5,138.631591 L110.5,139.631591 L227,27.1315908 Z" id="Path" fill="#FF9A00"></path>
                            </g>
                          </g>
                        </svg>
                        <figcaption>
                          <h4 className="fig-thumbnail__title">5-Year Warranty</h4>
                          <p className="fig-thumbnail__des">All our products come with a 5-year warranty for any manufacturing defects.</p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="features-container-interpreter"></div>
                    <div className="col-md-6 col-lg-3 pb-4">
                      <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-quad">

                        <svg width="47px" height="45px" viewBox="0 0 254 230" version="1.1">
                          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Installation" transform="translate(0.821416, 0.249991)" fillRule="nonzero">
                              <path d="M125.928584,17.2500088 L12.428584,96.2500088 C8.09522902,99.2500238 4.59526402,98.5833638 1.92858402,94.2500088 C-1.07143098,90.5833238 -0.571435977,87.0833588 3.42858402,83.7500088 L121.428584,1.75000875 C124.761934,-0.58333625 127.761904,-0.58333625 130.428584,1.75000875 L248.928584,87.2500088 C252.928604,89.9166888 253.428599,93.4166538 250.428584,97.7500088 C247.428569,101.416694 243.928604,101.916689 239.928584,99.2500088 L125.928584,17.2500088 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M63.428584,19.2500088 C63.428584,17.2500088 64.1785765,15.5000162 65.678584,14.0000088 C67.1785915,12.5000013 69.095239,11.7500088 71.428584,11.7500088 C73.428584,11.7500088 75.1785765,12.5000013 76.678584,14.0000088 C78.1785915,15.5000162 78.928584,17.2500088 78.928584,19.2500088 L78.928584,42.2500088 C78.928584,47.2500338 76.428609,49.7500088 71.428584,49.7500088 C66.095224,49.7500088 63.428584,47.2500338 63.428584,42.2500088 L63.428584,19.2500088 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M71.428584,179.250009 C73.428584,179.250009 75.1785765,180.000001 76.678584,181.500009 C78.1785915,183.000016 78.928584,184.916664 78.928584,187.250009 C78.928584,189.250009 78.1785915,191.000001 76.678584,192.500009 C75.1785765,194.000016 73.428584,194.750009 71.428584,194.750009 L45.928584,194.750009 C43.928584,194.750009 42.1785915,194.000016 40.678584,192.500009 C39.1785765,191.000001 38.428584,189.250009 38.428584,187.250009 L38.428584,63.7500088 C38.428584,58.7499837 40.928559,56.2500088 45.928584,56.2500088 C50.928609,56.2500088 53.428584,58.7499837 53.428584,63.7500088 L53.428584,179.250009 L71.428584,179.250009 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M195.928584,63.7500088 C195.928584,58.7499837 198.428559,56.2500088 203.428584,56.2500088 C208.428609,56.2500088 210.928584,58.7499837 210.928584,63.7500088 L210.928584,86.7500088 C210.928584,88.7500088 210.178592,90.5000012 208.678584,92.0000088 C207.178577,93.5000163 205.428584,94.2500088 203.428584,94.2500088 C198.428559,94.2500088 195.928584,91.7500338 195.928584,86.7500088 L195.928584,63.7500088 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M225.428584,165.750009 C230.761944,169.083359 232.095264,173.583314 229.428584,179.250009 L214.928584,203.750009 C211.261899,209.416704 206.761944,210.583359 201.428584,207.250009 L200.928584,207.250009 C200.595249,207.250009 200.095254,207.083344 199.428584,206.750009 C195.761899,204.416664 191.928604,204.583329 187.928584,207.250009 C183.595229,209.583354 181.428584,212.916654 181.428584,217.250009 L181.428584,219.250009 C181.428584,221.916689 180.428594,224.333331 178.428584,226.500009 C176.428574,228.666686 173.928599,229.750009 170.928584,229.750009 L143.428584,229.750009 C140.761904,229.750009 138.345262,228.666686 136.178584,226.500009 C134.011907,224.333331 132.928584,221.916689 132.928584,219.250009 L132.928584,217.750009 C132.928584,214.083324 131.261934,210.916689 127.928584,208.250009 C127.595249,208.250009 127.095254,208.083344 126.428584,207.750009 L125.928584,207.750009 C121.928564,205.416664 118.095269,205.249999 114.428584,207.250009 C114.095249,207.583344 113.761919,207.750009 113.428584,207.750009 L112.428584,207.750009 C107.095224,211.083359 102.595269,209.750039 98.928584,203.750009 L84.928584,180.250009 C80.928564,174.583314 81.928554,169.750029 87.928584,165.750009 L88.928584,165.250009 L89.428584,164.750009 C93.761939,162.749999 95.928584,159.250034 95.928584,154.250009 L95.928584,153.750009 C95.928584,149.416654 93.928604,146.083354 89.928584,143.750009 L87.928584,142.750009 C82.261889,138.416654 81.261899,133.750034 84.928584,128.750009 L98.928584,104.250009 C102.928604,98.5833138 107.595224,97.4166588 112.928584,100.750009 L114.928584,101.750009 C118.928604,103.416684 122.761899,103.250019 126.428584,101.250009 C130.761939,98.5833287 132.928584,95.2500287 132.928584,91.2500088 L132.928584,88.7500088 C132.928584,85.7499937 134.011907,83.2500187 136.178584,81.2500088 C138.345262,79.2499988 140.761904,78.2500088 143.428584,78.2500088 L170.928584,78.2500088 C173.928599,78.2500088 176.428574,79.2499988 178.428584,81.2500088 C180.428594,83.2500187 181.428584,85.7499937 181.428584,88.7500088 L181.428584,91.2500088 C181.428584,95.2500287 183.261899,98.2499988 186.928584,100.250009 C187.261919,100.250009 187.428584,100.416674 187.428584,100.750009 L187.928584,100.750009 C188.261919,101.083344 188.595249,101.250009 188.928584,101.250009 C192.261934,102.916684 195.761899,102.750019 199.428584,100.750009 L200.428584,100.250009 C201.095254,99.5833387 201.928579,99.2500088 202.928584,99.2500088 C205.595264,98.2500038 207.928574,98.2500038 209.928584,99.2500088 C210.595254,99.5833438 211.261914,100.083339 211.928584,100.750009 C212.595254,101.083344 213.261914,101.583339 213.928584,102.250009 L215.428584,103.750009 L228.928584,127.750009 C232.928604,133.416704 231.761949,138.249989 225.428584,142.250009 L217.928584,146.750009 C217.928584,147.416679 218.011917,148.583334 218.178584,150.250009 C218.345252,151.916684 218.428584,153.083339 218.428584,153.750009 C218.428584,154.416679 218.345252,155.583334 218.178584,157.250009 C218.011917,158.916684 217.928584,160.250004 217.928584,161.250009 L225.428584,165.750009 Z M205.928584,171.250009 C202.928569,169.583334 201.761914,167.083359 202.428584,163.750009 L203.428584,153.750009 L202.428584,143.750009 C201.761914,140.416659 202.928569,137.916684 205.928584,136.250009 L213.928584,131.750009 L204.428584,115.250009 C196.761879,118.916694 188.928624,118.583364 180.928584,114.250009 C180.595249,113.916674 180.261919,113.750009 179.928584,113.750009 L178.928584,112.750009 C171.595214,108.749989 167.428589,102.250054 166.428584,93.2500088 L147.928584,93.2500088 C147.261914,102.250054 142.761959,109.249984 134.428584,114.250009 C125.761874,118.916699 117.428624,119.416694 109.428584,115.750009 L99.928584,132.250009 C107.261954,137.583369 110.928584,144.749964 110.928584,153.750009 L110.928584,154.250009 C110.928584,163.250054 107.261954,170.416649 99.928584,175.750009 L109.928584,192.750009 C116.928619,189.749994 124.428544,190.083324 132.428584,193.750009 L134.428584,194.750009 C142.428624,199.416699 146.928579,206.083299 147.928584,214.750009 L166.928584,214.750009 C167.595254,205.749964 172.095209,198.916699 180.428584,194.250009 C187.761954,189.583319 195.761874,188.916659 204.428584,192.250009 L213.928584,176.250009 L205.928584,171.250009 Z" id="Combined-Shape" fill="#FF9A00"></path>
                              <polygon id="Path" fill="#000000" points="206.928584 193.750009 206.928584 193.250009 205.928584 193.250009 205.428584 192.750009 205.428584 193.750009"></polygon>
                              <path d="M106.928584,194.250009 L108.928584,194.250009 L108.428584,193.250009 L107.928584,193.750009 C107.595249,193.750009 107.261919,193.916674 106.928584,194.250009 Z" id="Path" fill="#000000"></path>
                              <path d="M145.428584,143.250009 C148.761934,139.916659 152.595229,138.250009 156.928584,138.250009 C161.261939,138.250009 165.011902,139.833326 168.178584,143.000009 C171.345267,146.166691 172.928584,149.916654 172.928584,154.250009 C172.928584,158.583364 171.345267,162.333326 168.178584,165.500009 C165.011902,168.666691 161.261939,170.250009 156.928584,170.250009 C152.595229,170.250009 148.845267,168.666691 145.678584,165.500009 C142.511902,162.333326 140.928584,158.583364 140.928584,154.250009 C140.928584,149.916654 142.428569,146.250024 145.428584,143.250009 Z" id="Path" fill="#FF9A00"></path>
                            </g>
                          </g>
                        </svg>
                        <figcaption>
                          <h4 className="fig-thumbnail__title">45-day Installation</h4>
                          <p className="fig-thumbnail__des">Get your chosen products installed in 45 days, or we pay you rent. That�s a promise!</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="features-container-interpreter"></div>
                    <div className="col-md-6 col-lg-3 pb-4">
                      <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-quad">

                        <svg width="47px" height="45px" viewBox="0 0 257 225" version="1.1">
                          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Designers" transform="translate(0.875000, 0.500000)" fillRule="nonzero">
                              <path d="M165,177.5 L165,202.5 C165,208.50003 162.500025,213.583313 157.5,217.75 C152.499975,221.916687 146.6667,224 140,224 L25,224 C18.3333,224 12.500025,221.916687 7.5,217.75 C2.499975,213.583313 0,208.50003 0,202.5 L0,177.5 C0,164.1666 4.499955,151.666725 13.5,140 L18,135.5 C22.333355,130.499975 27.49997,126.33335 33.5,123 C47.833405,114.33329 64.166575,110 82.5,110 C101.16676,110 117.333265,114.33329 131,123 C133,124 135.99998,125.999985 140,129 C143.33335,131.333345 145.833325,133.666655 147.5,136 C149.5,138 150.83333,139.499995 151.5,140.5 C160.500045,151.500055 165,163.833265 165,177.5 Z M140,149.5 C139.33333,148.16666 138.33334,147.000005 137,146 C135.66666,143.99999 133.66668,142.166675 131,140.5 C129.66666,139.16666 127.33335,137.50001 124,135.5 C112.333275,128.16663 98.50008,124.5 82.5,124.5 C66.49992,124.5 52.666725,128.16663 41,135.5 C34.99997,139.50002 30.66668,142.83332 28,145.5 C27.33333,146.16667 26.33334,147.49999 25,149.5 C17.999965,158.16671 14.5,167.49995 14.5,177.5 L14.5,202.5 C14.5,204.166675 15.49999,205.749992 17.5,207.25 C19.50001,208.750008 21.999985,209.5 25,209.5 L140,209.5 C143.000015,209.5 145.49999,208.750008 147.5,207.25 C149.50001,205.749992 150.5,204.166675 150.5,202.5 L150.5,177.5 C150.5,166.83328 147.000035,157.50004 140,149.5 Z" id="Combined-Shape" fill="#FF9A00"></path>
                              <path d="M115.5,14 C124.83338,23.000045 129.5,33.999935 129.5,47 C129.5,60.000065 124.916712,71.0832875 115.75,80.25 C106.583288,89.4167125 95.500065,94 82.5,94 C69.499935,94 58.4167125,89.4167125 49.25,80.25 C40.0832875,71.0832875 35.5,60.000065 35.5,47 C35.5,33.999935 40.0832875,22.9167125 49.25,13.75 C58.4167125,4.5832875 69.499935,0 82.5,0 C95.500065,0 106.499955,4.66662 115.5,14 Z M105.5,70 C111.833365,63.666635 115,56.000045 115,47 C115,37.999955 111.833365,30.333365 105.5,24 C99.166635,17.666635 91.500045,14.5 82.5,14.5 C73.499955,14.5 65.833365,17.666635 59.5,24 C53.166635,30.333365 50,37.999955 50,47 C50,56.000045 53.166635,63.666635 59.5,70 C65.833365,76.333365 73.499955,79.5 82.5,79.5 C91.500045,79.5 99.166635,76.333365 105.5,70 Z" id="Combined-Shape" fill="#FF9A00"></path>
                              <path d="M229,27.5 C237.00004,35.50004 241,45.16661 241,56.5 C241,67.83339 237.00004,77.49996 229,85.5 C220.99996,93.50004 211.33339,97.5 200,97.5 C188.66661,97.5 179.00004,93.50004 171,85.5 C162.99996,77.49996 159,67.83339 159,56.5 C159,45.16661 162.99996,35.50004 171,27.5 C179.00004,19.49996 188.66661,15.5 200,15.5 C211.33339,15.5 220.99996,19.49996 229,27.5 Z M218.5,75.5 C223.83336,70.16664 226.5,63.83337 226.5,56.5 C226.5,49.16663 223.916692,42.9166925 218.75,37.75 C213.583308,32.5833075 207.33337,30 200,30 C192.66663,30 186.416692,32.5833075 181.25,37.75 C176.083308,42.9166925 173.5,49.16663 173.5,56.5 C173.5,63.83337 176.083308,70.0833075 181.25,75.25 C186.416692,80.4166925 192.66663,83 200,83 C207.33337,83 213.499975,80.500025 218.5,75.5 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                              <path d="M179.5,130.5 C174.83331,132.166675 171.666675,130.833355 170,126.5 C167.666655,122.166645 168.83331,119.00001 173.5,117 C181.833375,113.333315 190.66662,111.5 200,111.5 C215.33341,111.5 228.33328,115.83329 239,124.5 C250.33339,133.83338 256,144.999935 256,158 L256,174 C256,181.000035 253.166695,186.83331 247.5,191.5 C241.833305,196.16669 235.00004,198.5 227,198.5 L203.5,198.5 C198.83331,198.5 196.5,196.16669 196.5,191.5 C196.5,186.499975 198.83331,184 203.5,184 L227,184 C231.00002,184 234.416652,183.00001 237.25,181 C240.083347,178.99999 241.5,176.66668 241.5,174 L241.5,158 C241.5,149.33329 237.666705,142.00003 230,136 C221.666625,129.3333 211.666725,126 200,126 C192.333295,126 185.50003,127.499985 179.5,130.5 Z" id="Path" fill="#FFFFFF"></path>
                            </g>
                          </g>
                        </svg>
                        <figcaption>
                          <h4 className="fig-thumbnail__title">900+ Expert Designers</h4>
                          <p className="fig-thumbnail__des">Create your dream home, fitting your lifestyle, with the help of our top designers.</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="features-container-interpreter"></div>
                    <div className="col-md-6 col-lg-3 pb-0 pb-md-4">
                      <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-quad">

                        <svg width="47px" height="45px" viewBox="0 0 250 257" version="1.1">
                          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Service" transform="translate(0.000000, 0.916665)" fillRule="nonzero">
                              <path d="M227.5,206.583335 L175,150.083335 C171.66665,146.083315 171.833315,142.58335 175.5,139.583335 C179.166685,135.91665 182.833315,136.083315 186.5,140.083335 L238.5,196.083335 C246.166705,204.41671 249.833335,213.41662 249.5,223.083335 L249.5,224.083335 C249.166665,224.41667 249,225.249995 249,226.583335 C248.666665,227.250005 248.5,227.999997 248.5,228.833335 C248.5,229.666672 248.333335,230.416665 248,231.083335 C246.66666,237.083365 243.66669,242.166647 239,246.333335 C234.33331,250.500022 229.00003,253.41666 223,255.083335 C209.333265,257.750015 198.000045,253.750055 189,243.083335 L135.5,185.583335 C132.16665,181.91665 132.333315,178.25002 136,174.583335 C140.00002,171.58332 143.66665,171.749985 147,175.083335 L200.5,233.083335 C205.83336,239.4167 212.16663,241.75001 219.5,240.083335 C226.83337,238.41666 231.333325,234.250035 233,227.583335 C233.333335,226.916665 233.5,225.916675 233.5,224.583335 C233.833335,223.58333 234,222.58334 234,221.583335 C234.333335,216.916645 232.16669,211.916695 227.5,206.583335 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M215,214.583335 C218.666685,214.583335 220.5,216.583315 220.5,220.583335 C220.5,224.583355 218.50002,226.583335 214.5,226.583335 C210.833315,226.583335 209,224.41669 209,220.083335 C209,216.41665 210.99998,214.583335 215,214.583335 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M92,66.5833347 C96.00002,52.5832647 93.500045,39.7500597 84.5,28.0833347 C77.8333,20.4166297 68.83339,16.2500047 57.5,15.5833347 L57,15.5833347 C56.33333,15.5833347 56,15.7499997 56,16.0833347 C55.33333,17.0833397 55.33333,17.9166647 56,18.5833347 L69,32.5833347 C71.66668,35.2500147 73,37.9166547 73,40.5833347 C73,42.5833447 72.166675,44.4166597 70.5,46.0833347 L46,68.0833347 C44.999995,69.4166747 43.333345,70.0833347 41,70.0833347 L40.5,70.0833347 C38.166655,70.0833347 36.33334,69.4166747 35,68.0833347 L19,51.5833347 C18.666665,51.2499997 18.16667,51.0833347 17.5,51.0833347 L16.5,51.5833347 C15.83333,51.5833347 15.5,52.4166597 15.5,54.0833347 C15.5,64.0833847 18.8333,72.9166297 25.5,80.5833347 C36.83339,92.5833947 49.999925,96.0833597 65,91.0833347 C65.333335,91.0833347 65.666665,91.0000022 66,90.8333347 C66.333335,90.6666672 66.666665,90.5833347 67,90.5833347 L67.5,90.5833347 C70.500015,90.5833347 72.833325,92.0833197 74.5,95.0833347 L86,106.583335 C89.666685,110.25002 89.666685,113.749985 86,117.083335 C82.333315,120.75002 78.666685,120.75002 75,117.083335 L65,107.083335 C44.666565,111.083355 27.8334,105.58341 14.5,90.5833347 C4.833285,79.9166147 1.13686838e-13,67.5834047 1.13686838e-13,53.5833347 L1.13686838e-13,52.5833347 C1.000005,44.2499597 4.999965,39.0833447 12,37.0833347 C19.000035,34.0833197 24.999975,35.4166397 30,41.0833347 L41,52.0833347 L54.5,39.5833347 L44.5,28.5833347 C39.499975,23.2499747 38.499985,17.0833697 41.5,10.0833347 C44.500015,2.74996473 50.166625,-0.583335266 58.5,0.0833347338 C74.166745,1.08333973 86.66662,7.24994473 96,18.5833347 C108.333395,33.5834097 112.000025,50.0832447 107,68.0833347 L117.5,78.5833347 C121.166685,82.2500197 121.166685,85.9166497 117.5,89.5833347 C114.16665,93.2500197 110.666685,93.2500197 107,89.5833347 L95,77.5833347 C91.999985,75.9166597 90.5,73.5833497 90.5,70.5833347 C90.5,68.9166597 90.999995,67.5833397 92,66.5833347 Z" id="Path" fill="#FFFFFF"></path>
                              <path d="M99.5,162.083335 L22.5,239.083335 C18.833315,242.75002 15.166685,242.75002 11.5,239.083335 C7.833315,235.41665 7.833315,231.75002 11.5,228.083335 L89,151.083335 L80.5,142.083335 C77.16665,138.749985 77.16665,135.25002 80.5,131.583335 L188,25.0833347 C194.00003,19.0833047 201.166625,16.1666672 209.5,16.3333347 C217.833375,16.5000022 224.833305,19.5833047 230.5,25.5833347 C235.83336,31.5833647 238.416668,38.4999622 238.25,46.3333347 C238.083332,54.1667072 235.33336,60.9166397 230,66.5833347 L123,175.083335 C118.99998,178.75002 115.166685,178.75002 111.5,175.083335 L99.5,162.083335 Z M218.5,55.5833347 C224.833365,49.2499697 225.00003,42.7500347 219,36.0833347 C216.33332,33.4166547 213.00002,32.0000022 209,31.8333347 C204.99998,31.6666672 201.66668,32.9166547 199,35.5833347 L97,137.083335 L117.5,158.583335 L218.5,55.5833347 Z" id="Combined-Shape" fill="#FF9A00"></path>
                            </g>
                          </g>
                        </svg>
                        <figcaption>
                          <h4 className="fig-thumbnail__title">Post-Installation Service</h4>
                          <p className="fig-thumbnail__des">Enjoy unwavering support and services from our skilled team for up to 5 years. </p>
                        </figcaption>
                      </figure>
                    </div>
                  </div >
                </div >
                <div className="sudeo sudeo--left">
                  <img className="asyncAsset rag-lazy" src={bitmap} alt="Bitmap pattern">
                  </img>
                </div>
              </div>
              <div className="footerDescription">
                <img className="logo" src={infinitySpace}></img>
                <p>At Infinity Space, we bring together functionality and aesthetics to provide homeowners with customised
                and efficient home designs. Our designers specialise in home interior designs and home décor,
                and help you create a personalised home to suit your lifestyle. From sophisticated living room
                designs to space-saving and clutter-free interior designs, we are here to help you find the best
                home decor and home design to match your needs and style. All our products come with a 5-year warranty
                along with unwavering support and maintenance services. Explore thousands of inspiring interior
          designs or get a free estimate – it's all here on InfinitySpace.com, your one stop for complete home interiors.</p>
              </div>
              <div className="bottomFooter">
                <ul className="greenwoods">
                  <li className="footerText">Infinity Space Pvt. Ltd. © 2020</li>
                  <li className="footerTextSocial">
                    <a className="footer-social-links__item" href="https://www.facebook.com/infisdecor" target="_blank">

                      <svg fill="#3b5998" width="16" height="16" viewBox="0 0 138.5 256.5">
                        <path id="Facebook" d="M192-256H159q-28,0-44.75,17.25T97.5-193v29H64q-5,0-5,5.5v42q0,5.5,5,5.5H97.5V-5q0,5.5,5,5.5h44q5,0,5-5.5V-111h39q5.5,0,5.5-5.5v-42a5.406,5.406,0,0,0-1.5-4,5.406,5.406,0,0,0-4-1.5h-39v-24.5q0-9.5,3.75-13.75T170-206.5h22q5.5,0,5.5-5v-39Q197.5-256,192-256Z" transform="translate(-59 256)" />
                      </svg>
                    </a>
                  </li>
                  <li className="footerTextMail"><a className="footer-contact__item" href="mailto:balamurali@gmail.com" title="balamurali@gmail.com">
                    <svg fill="#FFFFFF" width="16" height="16" viewBox="0 -50 310 200" className="mright5">
                      <path id="Mail" d="M234.5-224H21.5a20.749,20.749,0,0,0-15.25,6.25A20.749,20.749,0,0,0,0-202.5v149A20.749,20.749,0,0,0,6.25-38.25,20.749,20.749,0,0,0,21.5-32h213a20.749,20.749,0,0,0,15.25-6.25A20.749,20.749,0,0,0,256-53.5v-149a20.749,20.749,0,0,0-6.25-15.25A20.749,20.749,0,0,0,234.5-224Zm-213,10.5h213a3.838,3.838,0,0,1,1.5.5h.5l-103,83.5a10.833,10.833,0,0,1-11,0L19.5-213H20A3.838,3.838,0,0,1,21.5-213.5Zm224,160a10.58,10.58,0,0,1-3.25,7.75,10.58,10.58,0,0,1-7.75,3.25H21.5a10.58,10.58,0,0,1-7.75-3.25A10.58,10.58,0,0,1,10.5-53.5v-149a8.057,8.057,0,0,1,1-3.5l105,85a19.556,19.556,0,0,0,11.5,3.5,19.385,19.385,0,0,0,11-3l1-.5,104.5-85a8.058,8.058,0,0,1,1,3.5Z" transform="translate(0 224)" />
                    </svg>balamurali@gmail.com</a></li>
                  <li className="footerTextMobile"><a className="footer-contact__item" href="tel:8438334285" title="8438334285">
                    <svg fill="#FFFFFF" width="16" height="16" viewBox="-10 -10 320 210" className="mright5">
                      <path id="Phone" d="M235.5-88A152.36,152.36,0,0,1,190-95q-12.5-4-20.5,4l-29,22A171.936,171.936,0,0,1,69-140.5L90.5-169q9-8.5,5-20.5a144.552,144.552,0,0,1-7.5-46A19.755,19.755,0,0,0,82-250a19.755,19.755,0,0,0-14.5-6h-47A19.755,19.755,0,0,0,6-250a19.755,19.755,0,0,0-6,14.5Q0-138,69-69T235.5,0A19.755,19.755,0,0,0,250-6a19.755,19.755,0,0,0,6-14.5v-47A19.755,19.755,0,0,0,250-82,19.755,19.755,0,0,0,235.5-88ZM242-20.5q0,6.5-6.5,6.5Q144-14,79-79T14-235.5q0-6.5,6.5-6.5h47q6.5,0,6.5,6.5a154.106,154.106,0,0,0,8,50q1,4-2.5,7.5L55-145.5q-2.5,3-.5,7.5,15,29.5,34.5,49t49,34.5q4.5,2,7.5-.5L179-80.5q2.5-2.5,6.5-1.5a151.535,151.535,0,0,0,50,8.5q6.5,0,6.5,6Z" transform="translate(0 256)" />
                    </svg>8438334285</a></li>
                </ul>
              </div>
            </div>
            :
            this.state.selectedTab === 'Bedroom' ?
              <div>
                <div className="header">
                  <ul className="greenwoods">
                    <li className="greenwoodsheader"><img className="logo" src={infinitySpace}></img></li>
                    <a className={this.state.selectedTab === 'DesignGallery' ? "activegreenwoods1stheader" : "greenwoods1stheader"} onClick={() => { this.onClickModularKitchen("DesignGallery") }}>Design Gallery</a>
                    <a className={this.state.selectedTab === 'ModularKitchen' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("ModularKitchen") }}>Modular Kitchen</a>
                    <a className={this.state.selectedTab === 'Bedroom' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("Bedroom") }}>Bedroom</a>
                    <a className={this.state.selectedTab === 'OtherInteriors' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("OtherInteriors") }}>Other Interiors</a>
                    <a className={this.state.selectedTab === 'RecentProjects' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("RecentProjects") }}>Recent Projects</a>
                  </ul>
                </div>
                <div className="section easy-steps pb64 linecss"></div>
                <div className="modularKitchencontainer">
                  <h2 className="modularKitchenHeading">Modular Kitchen Designs</h2>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-inner" role="listbox">
                    <div className="item">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="kitchenImage">
                            <img className="product" src={kitchenImage1}></img>
                            <div>
                              Nature Bliss Straight Modular Kitchen
                      </div>
                            <div>
                              Size | 13' X 12'
                      </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section easy-steps pb64"></div>
                <div className="bg-primry section-padding-xss" id="g-copyright">
                  <div className="sudeo sudeo--right"><img className="w-right rag-lazy" src={bitmapRight} alt="Bitmap pattern"></img>
                  </div>
                  <div className="bottom-container">
                    <div className="bottom-row features-container">
                      <div className="features-container-interpreter"></div>
                      <div className="col-md-6 col-lg-3 pb-4">
                        <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-quad">
                          <svg width="47px" height="45px" viewBox="0 0 242 256" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Warranty" transform="translate(0.125000, 0.868409)" fillRule="nonzero">
                                <path d="M109,237.131591 C110.000005,236.798256 111.916652,236.048263 114.75,234.881591 C117.583347,233.714918 119.833325,232.798261 121.5,232.131591 C138.500085,224.464886 151.33329,217.464956 160,211.131591 C170.66672,203.798221 179.166635,196.964956 185.5,190.631591 C203.166755,172.964836 212,150.631726 212,123.631591 L212,98.1315908 C212,92.7982308 214.66664,90.1315908 220,90.1315908 C225.33336,90.1315908 228,92.7982308 228,98.1315908 L228,123.631591 C228,154.631746 217.66677,180.798151 197,202.131591 C189.333295,209.798296 180.000055,217.298221 169,224.631591 C156.666605,233.298301 143.000075,240.798226 128,247.131591 C125.99999,247.798261 123.416682,248.714918 120.25,249.881591 C117.083318,251.048263 115.16667,251.798256 114.5,252.131591 C113.499995,252.464926 112.416673,252.881588 111.25,253.381591 C110.083327,253.881593 109.333335,254.131591 109,254.131591 C106.666655,254.798261 104.666675,254.631596 103,253.631591 C78.99988,242.298201 60.3334,231.131646 47,220.131591 C33.6666,209.131536 22.00005,195.631671 12,179.631591 C3.99996,167.298196 0,153.298336 0,137.631591 L0,50.6315908 C0,46.2982358 2.166645,43.6315958 6.5,42.6315908 C6.833335,42.6315908 7.166665,42.5482583 7.5,42.3815908 C7.833335,42.2149233 8.4166625,42.0482583 9.25,41.8815908 C10.0833375,41.7149233 10.83333,41.6315908 11.5,41.6315908 C16.83336,40.2982508 21.16665,39.2982608 24.5,38.6315908 C37.8334,35.2982408 50.999935,30.9649508 64,25.6315908 C82.66676,18.2982208 96.66662,10.4649658 106,2.13159076 C109.666685,-0.868424243 113.49998,-0.701759243 117.5,2.63159076 C117.833335,2.96492576 118.33333,3.29825576 119,3.63159076 C119.333335,3.96492576 120.999985,5.29824576 124,7.63159076 C130.6667,12.6316158 138.166625,16.9649058 146.5,20.6315908 C156.833385,25.2982808 167.99994,29.1315758 180,32.1315908 C185.33336,33.4649308 187.33334,36.6315658 186,41.6315908 C184.66666,47.2982858 181.33336,49.2982658 176,47.6315908 C165.666615,45.2982458 153.666735,41.2982858 140,35.6315908 C128.333275,29.9648958 119.83336,25.1316108 114.5,21.1315908 C113.83333,20.4649208 112.83334,19.7982608 111.5,19.1315908 C102.16662,26.1316258 88.333425,33.4648858 70,41.1315908 C55.99993,46.4649508 42.166735,50.7982408 28.5,54.1315908 C23.83331,55.4649308 19.83335,56.4649208 16.5,57.1315908 L16.5,137.631591 C16.5,150.298321 19.666635,161.464876 26,171.131591 C35.000045,185.464996 45.4166075,197.548208 57.25,207.381591 C69.0833925,217.214973 85.833225,227.298206 107.5,237.631591 C107.833335,237.298256 108.33333,237.131591 109,237.131591 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M227,27.1315908 C230.666685,23.1315708 234.49998,23.1315708 238.5,27.1315908 C242.50002,31.1316108 242.333355,34.9649058 238,38.6315908 L116,156.631591 C112.333315,160.964946 108.666685,160.964946 105,156.631591 C103.999995,155.964921 101.666685,153.798276 98,150.131591 C90.999965,143.131556 85.83335,138.131606 82.5,135.131591 L60.5,113.131591 C59.16666,111.798251 58.5,109.964936 58.5,107.631591 C58.5,105.298246 59.16666,103.298266 60.5,101.631591 C64.50002,97.9649058 68.333315,97.9649058 72,101.631591 L76.25,105.881591 C77.4166725,107.048263 78.9166575,108.464916 80.75,110.131591 C82.5833425,111.798266 84.666655,113.798246 87,116.131591 C89.333345,118.464936 91.666655,120.964911 94,123.631591 C97.33335,126.631606 102.499965,131.631556 109.5,138.631591 L110.5,139.631591 L227,27.1315908 Z" id="Path" fill="#FF9A00"></path>
                              </g>
                            </g>
                          </svg>
                          <figcaption>
                            <h4 className="fig-thumbnail__title">5-Year Warranty</h4>
                            <p className="fig-thumbnail__des">All our products come with a 5-year warranty for any manufacturing defects.</p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="features-container-interpreter"></div>
                      <div className="col-md-6 col-lg-3 pb-4">
                        <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-quad">

                          <svg width="47px" height="45px" viewBox="0 0 254 230" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Installation" transform="translate(0.821416, 0.249991)" fillRule="nonzero">
                                <path d="M125.928584,17.2500088 L12.428584,96.2500088 C8.09522902,99.2500238 4.59526402,98.5833638 1.92858402,94.2500088 C-1.07143098,90.5833238 -0.571435977,87.0833588 3.42858402,83.7500088 L121.428584,1.75000875 C124.761934,-0.58333625 127.761904,-0.58333625 130.428584,1.75000875 L248.928584,87.2500088 C252.928604,89.9166888 253.428599,93.4166538 250.428584,97.7500088 C247.428569,101.416694 243.928604,101.916689 239.928584,99.2500088 L125.928584,17.2500088 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M63.428584,19.2500088 C63.428584,17.2500088 64.1785765,15.5000162 65.678584,14.0000088 C67.1785915,12.5000013 69.095239,11.7500088 71.428584,11.7500088 C73.428584,11.7500088 75.1785765,12.5000013 76.678584,14.0000088 C78.1785915,15.5000162 78.928584,17.2500088 78.928584,19.2500088 L78.928584,42.2500088 C78.928584,47.2500338 76.428609,49.7500088 71.428584,49.7500088 C66.095224,49.7500088 63.428584,47.2500338 63.428584,42.2500088 L63.428584,19.2500088 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M71.428584,179.250009 C73.428584,179.250009 75.1785765,180.000001 76.678584,181.500009 C78.1785915,183.000016 78.928584,184.916664 78.928584,187.250009 C78.928584,189.250009 78.1785915,191.000001 76.678584,192.500009 C75.1785765,194.000016 73.428584,194.750009 71.428584,194.750009 L45.928584,194.750009 C43.928584,194.750009 42.1785915,194.000016 40.678584,192.500009 C39.1785765,191.000001 38.428584,189.250009 38.428584,187.250009 L38.428584,63.7500088 C38.428584,58.7499837 40.928559,56.2500088 45.928584,56.2500088 C50.928609,56.2500088 53.428584,58.7499837 53.428584,63.7500088 L53.428584,179.250009 L71.428584,179.250009 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M195.928584,63.7500088 C195.928584,58.7499837 198.428559,56.2500088 203.428584,56.2500088 C208.428609,56.2500088 210.928584,58.7499837 210.928584,63.7500088 L210.928584,86.7500088 C210.928584,88.7500088 210.178592,90.5000012 208.678584,92.0000088 C207.178577,93.5000163 205.428584,94.2500088 203.428584,94.2500088 C198.428559,94.2500088 195.928584,91.7500338 195.928584,86.7500088 L195.928584,63.7500088 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M225.428584,165.750009 C230.761944,169.083359 232.095264,173.583314 229.428584,179.250009 L214.928584,203.750009 C211.261899,209.416704 206.761944,210.583359 201.428584,207.250009 L200.928584,207.250009 C200.595249,207.250009 200.095254,207.083344 199.428584,206.750009 C195.761899,204.416664 191.928604,204.583329 187.928584,207.250009 C183.595229,209.583354 181.428584,212.916654 181.428584,217.250009 L181.428584,219.250009 C181.428584,221.916689 180.428594,224.333331 178.428584,226.500009 C176.428574,228.666686 173.928599,229.750009 170.928584,229.750009 L143.428584,229.750009 C140.761904,229.750009 138.345262,228.666686 136.178584,226.500009 C134.011907,224.333331 132.928584,221.916689 132.928584,219.250009 L132.928584,217.750009 C132.928584,214.083324 131.261934,210.916689 127.928584,208.250009 C127.595249,208.250009 127.095254,208.083344 126.428584,207.750009 L125.928584,207.750009 C121.928564,205.416664 118.095269,205.249999 114.428584,207.250009 C114.095249,207.583344 113.761919,207.750009 113.428584,207.750009 L112.428584,207.750009 C107.095224,211.083359 102.595269,209.750039 98.928584,203.750009 L84.928584,180.250009 C80.928564,174.583314 81.928554,169.750029 87.928584,165.750009 L88.928584,165.250009 L89.428584,164.750009 C93.761939,162.749999 95.928584,159.250034 95.928584,154.250009 L95.928584,153.750009 C95.928584,149.416654 93.928604,146.083354 89.928584,143.750009 L87.928584,142.750009 C82.261889,138.416654 81.261899,133.750034 84.928584,128.750009 L98.928584,104.250009 C102.928604,98.5833138 107.595224,97.4166588 112.928584,100.750009 L114.928584,101.750009 C118.928604,103.416684 122.761899,103.250019 126.428584,101.250009 C130.761939,98.5833287 132.928584,95.2500287 132.928584,91.2500088 L132.928584,88.7500088 C132.928584,85.7499937 134.011907,83.2500187 136.178584,81.2500088 C138.345262,79.2499988 140.761904,78.2500088 143.428584,78.2500088 L170.928584,78.2500088 C173.928599,78.2500088 176.428574,79.2499988 178.428584,81.2500088 C180.428594,83.2500187 181.428584,85.7499937 181.428584,88.7500088 L181.428584,91.2500088 C181.428584,95.2500287 183.261899,98.2499988 186.928584,100.250009 C187.261919,100.250009 187.428584,100.416674 187.428584,100.750009 L187.928584,100.750009 C188.261919,101.083344 188.595249,101.250009 188.928584,101.250009 C192.261934,102.916684 195.761899,102.750019 199.428584,100.750009 L200.428584,100.250009 C201.095254,99.5833387 201.928579,99.2500088 202.928584,99.2500088 C205.595264,98.2500038 207.928574,98.2500038 209.928584,99.2500088 C210.595254,99.5833438 211.261914,100.083339 211.928584,100.750009 C212.595254,101.083344 213.261914,101.583339 213.928584,102.250009 L215.428584,103.750009 L228.928584,127.750009 C232.928604,133.416704 231.761949,138.249989 225.428584,142.250009 L217.928584,146.750009 C217.928584,147.416679 218.011917,148.583334 218.178584,150.250009 C218.345252,151.916684 218.428584,153.083339 218.428584,153.750009 C218.428584,154.416679 218.345252,155.583334 218.178584,157.250009 C218.011917,158.916684 217.928584,160.250004 217.928584,161.250009 L225.428584,165.750009 Z M205.928584,171.250009 C202.928569,169.583334 201.761914,167.083359 202.428584,163.750009 L203.428584,153.750009 L202.428584,143.750009 C201.761914,140.416659 202.928569,137.916684 205.928584,136.250009 L213.928584,131.750009 L204.428584,115.250009 C196.761879,118.916694 188.928624,118.583364 180.928584,114.250009 C180.595249,113.916674 180.261919,113.750009 179.928584,113.750009 L178.928584,112.750009 C171.595214,108.749989 167.428589,102.250054 166.428584,93.2500088 L147.928584,93.2500088 C147.261914,102.250054 142.761959,109.249984 134.428584,114.250009 C125.761874,118.916699 117.428624,119.416694 109.428584,115.750009 L99.928584,132.250009 C107.261954,137.583369 110.928584,144.749964 110.928584,153.750009 L110.928584,154.250009 C110.928584,163.250054 107.261954,170.416649 99.928584,175.750009 L109.928584,192.750009 C116.928619,189.749994 124.428544,190.083324 132.428584,193.750009 L134.428584,194.750009 C142.428624,199.416699 146.928579,206.083299 147.928584,214.750009 L166.928584,214.750009 C167.595254,205.749964 172.095209,198.916699 180.428584,194.250009 C187.761954,189.583319 195.761874,188.916659 204.428584,192.250009 L213.928584,176.250009 L205.928584,171.250009 Z" id="Combined-Shape" fill="#FF9A00"></path>
                                <polygon id="Path" fill="#000000" points="206.928584 193.750009 206.928584 193.250009 205.928584 193.250009 205.428584 192.750009 205.428584 193.750009"></polygon>
                                <path d="M106.928584,194.250009 L108.928584,194.250009 L108.428584,193.250009 L107.928584,193.750009 C107.595249,193.750009 107.261919,193.916674 106.928584,194.250009 Z" id="Path" fill="#000000"></path>
                                <path d="M145.428584,143.250009 C148.761934,139.916659 152.595229,138.250009 156.928584,138.250009 C161.261939,138.250009 165.011902,139.833326 168.178584,143.000009 C171.345267,146.166691 172.928584,149.916654 172.928584,154.250009 C172.928584,158.583364 171.345267,162.333326 168.178584,165.500009 C165.011902,168.666691 161.261939,170.250009 156.928584,170.250009 C152.595229,170.250009 148.845267,168.666691 145.678584,165.500009 C142.511902,162.333326 140.928584,158.583364 140.928584,154.250009 C140.928584,149.916654 142.428569,146.250024 145.428584,143.250009 Z" id="Path" fill="#FF9A00"></path>
                              </g>
                            </g>
                          </svg>
                          <figcaption>
                            <h4 className="fig-thumbnail__title">45-day Installation</h4>
                            <p className="fig-thumbnail__des">Get your chosen products installed in 45 days, or we pay you rent. That�s a promise!</p>
                          </figcaption>
                        </figure>
                      </div>

                      <div className="features-container-interpreter"></div>
                      <div className="col-md-6 col-lg-3 pb-4">
                        <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-quad">

                          <svg width="47px" height="45px" viewBox="0 0 257 225" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Designers" transform="translate(0.875000, 0.500000)" fillRule="nonzero">
                                <path d="M165,177.5 L165,202.5 C165,208.50003 162.500025,213.583313 157.5,217.75 C152.499975,221.916687 146.6667,224 140,224 L25,224 C18.3333,224 12.500025,221.916687 7.5,217.75 C2.499975,213.583313 0,208.50003 0,202.5 L0,177.5 C0,164.1666 4.499955,151.666725 13.5,140 L18,135.5 C22.333355,130.499975 27.49997,126.33335 33.5,123 C47.833405,114.33329 64.166575,110 82.5,110 C101.16676,110 117.333265,114.33329 131,123 C133,124 135.99998,125.999985 140,129 C143.33335,131.333345 145.833325,133.666655 147.5,136 C149.5,138 150.83333,139.499995 151.5,140.5 C160.500045,151.500055 165,163.833265 165,177.5 Z M140,149.5 C139.33333,148.16666 138.33334,147.000005 137,146 C135.66666,143.99999 133.66668,142.166675 131,140.5 C129.66666,139.16666 127.33335,137.50001 124,135.5 C112.333275,128.16663 98.50008,124.5 82.5,124.5 C66.49992,124.5 52.666725,128.16663 41,135.5 C34.99997,139.50002 30.66668,142.83332 28,145.5 C27.33333,146.16667 26.33334,147.49999 25,149.5 C17.999965,158.16671 14.5,167.49995 14.5,177.5 L14.5,202.5 C14.5,204.166675 15.49999,205.749992 17.5,207.25 C19.50001,208.750008 21.999985,209.5 25,209.5 L140,209.5 C143.000015,209.5 145.49999,208.750008 147.5,207.25 C149.50001,205.749992 150.5,204.166675 150.5,202.5 L150.5,177.5 C150.5,166.83328 147.000035,157.50004 140,149.5 Z" id="Combined-Shape" fill="#FF9A00"></path>
                                <path d="M115.5,14 C124.83338,23.000045 129.5,33.999935 129.5,47 C129.5,60.000065 124.916712,71.0832875 115.75,80.25 C106.583288,89.4167125 95.500065,94 82.5,94 C69.499935,94 58.4167125,89.4167125 49.25,80.25 C40.0832875,71.0832875 35.5,60.000065 35.5,47 C35.5,33.999935 40.0832875,22.9167125 49.25,13.75 C58.4167125,4.5832875 69.499935,0 82.5,0 C95.500065,0 106.499955,4.66662 115.5,14 Z M105.5,70 C111.833365,63.666635 115,56.000045 115,47 C115,37.999955 111.833365,30.333365 105.5,24 C99.166635,17.666635 91.500045,14.5 82.5,14.5 C73.499955,14.5 65.833365,17.666635 59.5,24 C53.166635,30.333365 50,37.999955 50,47 C50,56.000045 53.166635,63.666635 59.5,70 C65.833365,76.333365 73.499955,79.5 82.5,79.5 C91.500045,79.5 99.166635,76.333365 105.5,70 Z" id="Combined-Shape" fill="#FF9A00"></path>
                                <path d="M229,27.5 C237.00004,35.50004 241,45.16661 241,56.5 C241,67.83339 237.00004,77.49996 229,85.5 C220.99996,93.50004 211.33339,97.5 200,97.5 C188.66661,97.5 179.00004,93.50004 171,85.5 C162.99996,77.49996 159,67.83339 159,56.5 C159,45.16661 162.99996,35.50004 171,27.5 C179.00004,19.49996 188.66661,15.5 200,15.5 C211.33339,15.5 220.99996,19.49996 229,27.5 Z M218.5,75.5 C223.83336,70.16664 226.5,63.83337 226.5,56.5 C226.5,49.16663 223.916692,42.9166925 218.75,37.75 C213.583308,32.5833075 207.33337,30 200,30 C192.66663,30 186.416692,32.5833075 181.25,37.75 C176.083308,42.9166925 173.5,49.16663 173.5,56.5 C173.5,63.83337 176.083308,70.0833075 181.25,75.25 C186.416692,80.4166925 192.66663,83 200,83 C207.33337,83 213.499975,80.500025 218.5,75.5 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                                <path d="M179.5,130.5 C174.83331,132.166675 171.666675,130.833355 170,126.5 C167.666655,122.166645 168.83331,119.00001 173.5,117 C181.833375,113.333315 190.66662,111.5 200,111.5 C215.33341,111.5 228.33328,115.83329 239,124.5 C250.33339,133.83338 256,144.999935 256,158 L256,174 C256,181.000035 253.166695,186.83331 247.5,191.5 C241.833305,196.16669 235.00004,198.5 227,198.5 L203.5,198.5 C198.83331,198.5 196.5,196.16669 196.5,191.5 C196.5,186.499975 198.83331,184 203.5,184 L227,184 C231.00002,184 234.416652,183.00001 237.25,181 C240.083347,178.99999 241.5,176.66668 241.5,174 L241.5,158 C241.5,149.33329 237.666705,142.00003 230,136 C221.666625,129.3333 211.666725,126 200,126 C192.333295,126 185.50003,127.499985 179.5,130.5 Z" id="Path" fill="#FFFFFF"></path>
                              </g>
                            </g>
                          </svg>
                          <figcaption>
                            <h4 className="fig-thumbnail__title">900+ Expert Designers</h4>
                            <p className="fig-thumbnail__des">Create your dream home, fitting your lifestyle, with the help of our top designers.</p>
                          </figcaption>
                        </figure>
                      </div>

                      <div className="features-container-interpreter"></div>
                      <div className="col-md-6 col-lg-3 pb-0 pb-md-4">
                        <figure className="fig-thumbnail" data-aos="fade-up" data-aos-duration="700" data-aos-easing="ease-in-quad">

                          <svg width="47px" height="45px" viewBox="0 0 250 257" version="1.1">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Service" transform="translate(0.000000, 0.916665)" fillRule="nonzero">
                                <path d="M227.5,206.583335 L175,150.083335 C171.66665,146.083315 171.833315,142.58335 175.5,139.583335 C179.166685,135.91665 182.833315,136.083315 186.5,140.083335 L238.5,196.083335 C246.166705,204.41671 249.833335,213.41662 249.5,223.083335 L249.5,224.083335 C249.166665,224.41667 249,225.249995 249,226.583335 C248.666665,227.250005 248.5,227.999997 248.5,228.833335 C248.5,229.666672 248.333335,230.416665 248,231.083335 C246.66666,237.083365 243.66669,242.166647 239,246.333335 C234.33331,250.500022 229.00003,253.41666 223,255.083335 C209.333265,257.750015 198.000045,253.750055 189,243.083335 L135.5,185.583335 C132.16665,181.91665 132.333315,178.25002 136,174.583335 C140.00002,171.58332 143.66665,171.749985 147,175.083335 L200.5,233.083335 C205.83336,239.4167 212.16663,241.75001 219.5,240.083335 C226.83337,238.41666 231.333325,234.250035 233,227.583335 C233.333335,226.916665 233.5,225.916675 233.5,224.583335 C233.833335,223.58333 234,222.58334 234,221.583335 C234.333335,216.916645 232.16669,211.916695 227.5,206.583335 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M215,214.583335 C218.666685,214.583335 220.5,216.583315 220.5,220.583335 C220.5,224.583355 218.50002,226.583335 214.5,226.583335 C210.833315,226.583335 209,224.41669 209,220.083335 C209,216.41665 210.99998,214.583335 215,214.583335 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M92,66.5833347 C96.00002,52.5832647 93.500045,39.7500597 84.5,28.0833347 C77.8333,20.4166297 68.83339,16.2500047 57.5,15.5833347 L57,15.5833347 C56.33333,15.5833347 56,15.7499997 56,16.0833347 C55.33333,17.0833397 55.33333,17.9166647 56,18.5833347 L69,32.5833347 C71.66668,35.2500147 73,37.9166547 73,40.5833347 C73,42.5833447 72.166675,44.4166597 70.5,46.0833347 L46,68.0833347 C44.999995,69.4166747 43.333345,70.0833347 41,70.0833347 L40.5,70.0833347 C38.166655,70.0833347 36.33334,69.4166747 35,68.0833347 L19,51.5833347 C18.666665,51.2499997 18.16667,51.0833347 17.5,51.0833347 L16.5,51.5833347 C15.83333,51.5833347 15.5,52.4166597 15.5,54.0833347 C15.5,64.0833847 18.8333,72.9166297 25.5,80.5833347 C36.83339,92.5833947 49.999925,96.0833597 65,91.0833347 C65.333335,91.0833347 65.666665,91.0000022 66,90.8333347 C66.333335,90.6666672 66.666665,90.5833347 67,90.5833347 L67.5,90.5833347 C70.500015,90.5833347 72.833325,92.0833197 74.5,95.0833347 L86,106.583335 C89.666685,110.25002 89.666685,113.749985 86,117.083335 C82.333315,120.75002 78.666685,120.75002 75,117.083335 L65,107.083335 C44.666565,111.083355 27.8334,105.58341 14.5,90.5833347 C4.833285,79.9166147 1.13686838e-13,67.5834047 1.13686838e-13,53.5833347 L1.13686838e-13,52.5833347 C1.000005,44.2499597 4.999965,39.0833447 12,37.0833347 C19.000035,34.0833197 24.999975,35.4166397 30,41.0833347 L41,52.0833347 L54.5,39.5833347 L44.5,28.5833347 C39.499975,23.2499747 38.499985,17.0833697 41.5,10.0833347 C44.500015,2.74996473 50.166625,-0.583335266 58.5,0.0833347338 C74.166745,1.08333973 86.66662,7.24994473 96,18.5833347 C108.333395,33.5834097 112.000025,50.0832447 107,68.0833347 L117.5,78.5833347 C121.166685,82.2500197 121.166685,85.9166497 117.5,89.5833347 C114.16665,93.2500197 110.666685,93.2500197 107,89.5833347 L95,77.5833347 C91.999985,75.9166597 90.5,73.5833497 90.5,70.5833347 C90.5,68.9166597 90.999995,67.5833397 92,66.5833347 Z" id="Path" fill="#FFFFFF"></path>
                                <path d="M99.5,162.083335 L22.5,239.083335 C18.833315,242.75002 15.166685,242.75002 11.5,239.083335 C7.833315,235.41665 7.833315,231.75002 11.5,228.083335 L89,151.083335 L80.5,142.083335 C77.16665,138.749985 77.16665,135.25002 80.5,131.583335 L188,25.0833347 C194.00003,19.0833047 201.166625,16.1666672 209.5,16.3333347 C217.833375,16.5000022 224.833305,19.5833047 230.5,25.5833347 C235.83336,31.5833647 238.416668,38.4999622 238.25,46.3333347 C238.083332,54.1667072 235.33336,60.9166397 230,66.5833347 L123,175.083335 C118.99998,178.75002 115.166685,178.75002 111.5,175.083335 L99.5,162.083335 Z M218.5,55.5833347 C224.833365,49.2499697 225.00003,42.7500347 219,36.0833347 C216.33332,33.4166547 213.00002,32.0000022 209,31.8333347 C204.99998,31.6666672 201.66668,32.9166547 199,35.5833347 L97,137.083335 L117.5,158.583335 L218.5,55.5833347 Z" id="Combined-Shape" fill="#FF9A00"></path>
                              </g>
                            </g>
                          </svg>
                          <figcaption>
                            <h4 className="fig-thumbnail__title">Post-Installation Service</h4>
                            <p className="fig-thumbnail__des">Enjoy unwavering support and services from our skilled team for up to 5 years. </p>
                          </figcaption>
                        </figure>
                      </div>
                    </div >
                  </div >
                  <div className="sudeo sudeo--left">
                    <img className="asyncAsset rag-lazy" src={bitmap} alt="Bitmap pattern">
                    </img>
                  </div>
                </div>
                <div className="footerDescription">
                  <img className="logo" src={infinitySpace}></img>
                  <p>At Infinity Space, we bring together functionality and aesthetics to provide homeowners with customised
                  and efficient home designs. Our designers specialise in home interior designs and home décor,
                  and help you create a personalised home to suit your lifestyle. From sophisticated living room
                  designs to space-saving and clutter-free interior designs, we are here to help you find the best
                  home decor and home design to match your needs and style. All our products come with a 5-year warranty
                  along with unwavering support and maintenance services. Explore thousands of inspiring interior
        designs or get a free estimate – it's all here on InfinitySpace.com, your one stop for complete home interiors.</p>
                </div>
                <div className="bottomFooter">
                  <ul className="greenwoods">
                    <li className="footerText">Infinity Space Pvt. Ltd. © 2020</li>
                    <li className="footerTextSocial">
                      <a className="footer-social-links__item" href="https://www.facebook.com/infisdecor" target="_blank">

                        <svg fill="#3b5998" width="16" height="16" viewBox="0 0 138.5 256.5">
                          <path id="Facebook" d="M192-256H159q-28,0-44.75,17.25T97.5-193v29H64q-5,0-5,5.5v42q0,5.5,5,5.5H97.5V-5q0,5.5,5,5.5h44q5,0,5-5.5V-111h39q5.5,0,5.5-5.5v-42a5.406,5.406,0,0,0-1.5-4,5.406,5.406,0,0,0-4-1.5h-39v-24.5q0-9.5,3.75-13.75T170-206.5h22q5.5,0,5.5-5v-39Q197.5-256,192-256Z" transform="translate(-59 256)" />
                        </svg>
                      </a>
                    </li>
                    <li className="footerTextMail"><a className="footer-contact__item" href="mailto:balamurali@gmail.com" title="balamurali@gmail.com">
                      <svg fill="#FFFFFF" width="16" height="16" viewBox="0 -50 310 200" className="mright5">
                        <path id="Mail" d="M234.5-224H21.5a20.749,20.749,0,0,0-15.25,6.25A20.749,20.749,0,0,0,0-202.5v149A20.749,20.749,0,0,0,6.25-38.25,20.749,20.749,0,0,0,21.5-32h213a20.749,20.749,0,0,0,15.25-6.25A20.749,20.749,0,0,0,256-53.5v-149a20.749,20.749,0,0,0-6.25-15.25A20.749,20.749,0,0,0,234.5-224Zm-213,10.5h213a3.838,3.838,0,0,1,1.5.5h.5l-103,83.5a10.833,10.833,0,0,1-11,0L19.5-213H20A3.838,3.838,0,0,1,21.5-213.5Zm224,160a10.58,10.58,0,0,1-3.25,7.75,10.58,10.58,0,0,1-7.75,3.25H21.5a10.58,10.58,0,0,1-7.75-3.25A10.58,10.58,0,0,1,10.5-53.5v-149a8.057,8.057,0,0,1,1-3.5l105,85a19.556,19.556,0,0,0,11.5,3.5,19.385,19.385,0,0,0,11-3l1-.5,104.5-85a8.058,8.058,0,0,1,1,3.5Z" transform="translate(0 224)" />
                      </svg>balamurali@gmail.com</a></li>
                    <li className="footerTextMobile"><a className="footer-contact__item" href="tel:8438334285" title="8438334285">
                      <svg fill="#FFFFFF" width="16" height="16" viewBox="-10 -10 320 210" className="mright5">
                        <path id="Phone" d="M235.5-88A152.36,152.36,0,0,1,190-95q-12.5-4-20.5,4l-29,22A171.936,171.936,0,0,1,69-140.5L90.5-169q9-8.5,5-20.5a144.552,144.552,0,0,1-7.5-46A19.755,19.755,0,0,0,82-250a19.755,19.755,0,0,0-14.5-6h-47A19.755,19.755,0,0,0,6-250a19.755,19.755,0,0,0-6,14.5Q0-138,69-69T235.5,0A19.755,19.755,0,0,0,250-6a19.755,19.755,0,0,0,6-14.5v-47A19.755,19.755,0,0,0,250-82,19.755,19.755,0,0,0,235.5-88ZM242-20.5q0,6.5-6.5,6.5Q144-14,79-79T14-235.5q0-6.5,6.5-6.5h47q6.5,0,6.5,6.5a154.106,154.106,0,0,0,8,50q1,4-2.5,7.5L55-145.5q-2.5,3-.5,7.5,15,29.5,34.5,49t49,34.5q4.5,2,7.5-.5L179-80.5q2.5-2.5,6.5-1.5a151.535,151.535,0,0,0,50,8.5q6.5,0,6.5,6Z" transform="translate(0 256)" />
                      </svg>8438334285</a></li>
                  </ul>
                </div>
              </div>
              :
              this.state.selectedTab === 'OtherInteriors' ?
                <div>

                </div>
                :
                <div>
                  <div className="header">
                    <ul className="greenwoods">
                      <li className="greenwoodsheader"><img className="logo" src={infinitySpace}></img></li>
                      <a className={this.state.selectedTab === 'DesignGallery' ? "activegreenwoods1stheader" : "greenwoods1stheader"} onClick={() => { this.onClickModularKitchen("DesignGallery") }}>Design Gallery</a>
                      <a className={this.state.selectedTab === 'ModularKitchen' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("ModularKitchen") }}>Modular Kitchen</a>
                      <a className={this.state.selectedTab === 'Bedroom' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("Bedroom") }}>Bedroom</a>
                      <a className={this.state.selectedTab === 'OtherInteriors' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("OtherInteriors") }}>Other Interiors</a>
                      <a className={this.state.selectedTab === 'RecentProjects' ? "activegreenwoodsheader" : "greenwoodsheader"} onClick={() => { this.onClickModularKitchen("RecentProjects") }}>Recent Projects</a>
                    </ul>
                  </div>
                  <div className="section easy-steps pb64 linecss"></div>
                  <section className="our-banner"> 
                    <div>
                    </div>
                  </section>
                </div>
        }
      </div>

    );
  }
}

export default App;
