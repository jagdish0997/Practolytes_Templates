import React from 'react'
import '../index.css';
import img1 from '../img/logo-small.png'
import img2 from '../img/xmain-home-slide-2-img-3.png.pagespeed.ic.q0Fy0PIpJY.png'
import img3 from '../img/xmain-home-slide-2-img-4.png.pagespeed.ic.VH9aVl_q6O.png'
import img4 from '../img/xmain-home-rev-slider-background-1.png.pagespeed.ic.ePh9XmpvZu.png';
import img5 from '../img/xmain-home-rev-slider-background-2.png.pagespeed.ic.Omwb8OVEeB.png';
import img6 from '../img/xmain-home-slide-2-img-6.png.pagespeed.ic.o0P5Xfgb5V.png';
import img7 from '../img/xmain-home-slide-2-img-7.png.pagespeed.ic.XJ5p3ty_cF.png';
import img8 from '../img/xmain-home-slide-2-img-5.png.pagespeed.ic.sYEFn0Y3eg.png';
import img9 from '../img/download (14).png';
import img10 from '../img/Increases-Revenue-01-1-1.png';
import img11 from '../img/Decrease-Cost-01-1-1.png';
import img12 from '../img/Simplifies-Workflow-01-1-1.png';
import img13 from '../img/Medical-Billing-01.png';
import img14 from '../img/Eligibility-and-Benefits-Verification-01.png';
import img15 from '../img/Pre-Authorization-01.png'
import img16 from '../img/Credentialing-01.png';
import img17 from '../img/Medical-Coding-01.png';
import img18 from '../img/Compliance-Audit-01.png';
import img19 from '../img/Practice-Consulting-01.png';
import img20 from '../img/Contract-Negotiation-01.png';
import img21 from '../img/Medical-Transcription-01.png';
import img22 from '../img/botttom-banner-2-1.jpg';
import img23 from '../img/3-1.jpg';
import img24 from '../img/1-1.jpg';
import img25 from '../img/2-1.jpg';
import scr from '../img/scr.png';
import img26 from '../img/Why-Should-You-Incorporate-Eligibility-Verification-in-RCM_-768x432.png';
import img27 from '../img/Why-Should-You-Incorporate-Eligibility-Verification-in-RCM_-768x432.png';
import img28 from '../img/Tips-to-enhance-the-Urgent-Care-growth-768x432.png';
import img29 from '../img/Specialty-Healthcare-Challenges-in-RCM-768x432.png';
import img30 from '../img/download (3).png';
import img31 from '../img/Footer-inverse-logo.png';
import img32 from '../img/advancedbiller-logo-PlatinumPartner-1-1-300x85.png';



const Practo_Templates = () => {

  return (
    <>
      <div>
        <nav className="navbar navhide navhide-for-768 py-1 navbarClr " >

          <div className='col-log-8'>
            <a className="nav-link active  fnt1" aria-current="page" href="#">One-Stop Solution For Revenue Cycle Management Services</a>
          </div>
          <div className='col-log-2'>
            <form className="d-flex m-3" role="search">
              <a className="fnt1" aria-current="page" href="#">Client Login</a>
            </form>
          </div>
        </nav>
        <nav className="navbar navbar-expand-md navbar-fixed bg-light m-0 fixed-top sticky-top stickyCls"   >
        <button class="navbar-toggler  togg" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars fa-2x"></span>
          </button>
          <div className="container-fluid ">
            <img className='NavImpImg' src={img1} style={{ height: "85px" }}></img>
            <div className="collapse navbar-collapse ms-5 marginCon" id="navbarSupportedContent">
              <ul className="navbar-nav  marginTxt">
                <li className="nav-item">
                  <a className="nav-link active  fnt" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fnt" href="#">ABOUT US</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link fnt" href="#">SERVICES</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link fnt" href="#">SPECIALITIES</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link fnt" href="#">ADVANCEDMD</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link fnt" href="#">RESOURSE</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link fnt" href="#">BLOGS</a>
                </li>
              </ul>
            </div>
            <form className="d-flex m-3" role="search">
              <button className="btn  btnStl  " style={{ borderRadius: "30px" }} type="submit">TALK TO US</button>
            </form>
          </div>
        </nav>




        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top sticky-top">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}


        <br></br>
        <div className='container-fluid  m-3' >
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='row'>

                  <div className='column text-center' style={{ marginLeft: "325px" }}>
                    <img className="d-block w-100 alignImg text-center" style={{ height: "400px" }} src={img4} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "325px", position: "absolute" }}>
                    <img className="d-block w-100 alignImg text-center" style={{ height: "400px" }} src={img5} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "325px", position: "absolute", right: "896px", top: "244px" }}>
                    <img className="d-block w-100 alignImg text-center" style={{ height: "157px" }} src={img6} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "325px", position: "absolute", right: "285px", top: "242px" }}>
                    <img className="d-block w-100 alignImg text-center" style={{ height: "163px" }} src={img8} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "325px", position: "absolute", right: "229px", top: "347px" }}>
                    <img className="d-block w-100 alignImg text-center image" style={{ height: "54px" }} src={img9} alt="First slide" />
                  </div>

                  <div className='column text-center    fimg ' style={{ marginLeft: "325px", position: "absolute", top: "148px", right: "757px" }}>
                    <img className="d-block w-100  mySlides w3-animate-left fcimg" src={img2} alt="First slide" style={{ height: "254px" }} />
                  </div>
                  <div className='column simg' style={{ marginLeft: "325px", position: "absolute", top: "100px", right: "418px" }}>
                    <img className="d-block w-100 mySlides w3-animate-right scimg " src={img3} alt="Second Slide" style={{ height: "300px" }} />
                  </div>
                  <div className='column text-center' style={{ marginLeft: "325px", position: "absolute", right: "881px", top: "310px" }}>
                    <img className="d-block w-100 alignImg text-center" style={{ height: "90px" }} src={img7} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "325px", marginTop: "-382px" }}>
                    <img className="d-block w-100 alignImg text-center img-rotate" style={{ height: "52px" }} src={img30} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "688px", marginTop: "-382px" }}>
                    <img className="d-block w-100 alignImg text-center img-rotate" style={{ height: "52px" }} src={img30} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "307px", marginTop: "-285px" }}>
                    <img className="d-block w-100 alignImg text-center img-rotate" style={{ height: "39px" }} src={img30} alt="First slide" />
                  </div>

                  <div className='column text-center displayImg' style={{ marginLeft: "148px", marginTop: "-285px" }}>
                    <img className="d-block w-100 alignImg text-center zoom-in-zoom-out" style={{ height: "48px" }} src={img30} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "974px", marginTop: "-295px" }}>
                    <img className="d-block w-100 alignImg text-center zoom-in-zoom-out" style={{ height: "30px" }} src={img30} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "213px", marginTop: "-99px" }}>
                    <img className="d-block w-100 alignImg text-center zoom-in-zoom-out" style={{ height: "22px" }} src={img30} alt="First slide" />
                  </div>

                  <div className='column text-center' style={{ marginLeft: "65px", marginTop: "-362px" }}>
                    <img className="d-block w-100 alignImg text-center img-rotate" style={{ height: "22px" }} src={img30} alt="First slide" />
                  </div>

                  <div className='column text-center  textAlign' style={{ marginLeft: "380px", marginTop: "-412px" }}>
                    <p className="d-block w-100 alignImg text-center skillPara" >Skilled Medical Coding Team</p>
                  </div>

                </div>
              </div>
              {/* <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide"/>
    </div> */}
            </div>
            <a className="carousel-control-prev  backImg" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon backdesign" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next backImg" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon backdesign" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className='container mt-5'>
            <h1 className='headingFont' style={{ marginLeft: "3px" }}>Grow Your Business With Our End-To-End Revenue Cycle <br />Management Solutions.</h1>
            <br></br>
            <h5 className='headingFont1'>One Stop Revenue Cycle Management solution with expert guidance to navigate through complex healthcare processes and improve workflow efficiency.</h5>
            <button className="btn  btnStl m-5" style={{ borderRadius: "30px" }} type="submit">TALK TO US</button>
          </div>
        </div>





        <div className='m-2 styleDiv styleDiv2 '>
          <br></br>
          <div className='text-center'>
            <p className='trans'>Transforming Businesses</p>
            <p className='parapracto'>Practolytics is one of the leading multi-specialty billing company serving more than 28+ medical specialities.</p>
          </div>
          <br></br>
          <div className='container-fluid' id='arrow' style={{ marginLeft: "-8px" }} >
            <br></br>
            <div className='row row1'>
              <div className='card  boxContx' >
                <div className='card-header' style={{ borderRadius: "12px" }}>
                  <p className='p5m'>5M</p>
                  <br></br>
                  <p className='pdata'>Claims processed annually</p>
                </div>
              </div>

              <div className='card  boxContx' >
                <div className='card-header'>
                  <p className='p5m'>31</p>
                  <br></br>
                  <p className='pdata'>State Covered</p>
                </div>
              </div>

              <div className='card  boxContx' >
                <div className='card-header'>
                  <p className='p5m'>100%</p>
                  <br></br>
                  <p className='pdata'>HIPAA Compliant</p>
                </div>
              </div>

              <div className='card  boxContx' >
                <div className='card-header'>
                  <p className='p5m'>1400+</p>
                  <br></br>
                  <p className='pdata'>Active Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section How we can Help */}
        <div className='text-center'>
          <div className='text-center m-5'>
            <p className='help'>How We Help</p>
            <p className='child-help'>Enabling end-to-end revenue cycle management optimization</p>
          </div>
        </div>

        <div className='text-center'>
          <div className='row row2'>
            <div className='card-Newbox  boxContx' >
              <div className='card-header-new'>
                <img className='imgcls' src={img10} />
                <p className='increStl'>Increase Revenue</p>
              </div>
            </div>

            <div className='card-Newbox  boxContx' >
              <div className='card-header-new'>
                <img className='imgcls' src={img11} />
                <p className='increStl'>Decrease Costs</p>
              </div>
            </div>

            <div className='card-Newbox  boxContx' >
              <div className='card-header-new'>
                <img className='imgcls' src={img12} />
                <p className='increStl'>Simplify Workflows</p>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center chngdiv'>
          <p className='child-help1'>With changing business priorities & evolving challenges, our skilled workforce & rich industry experience help you stay ahead.</p>
          <br></br>
          <button className="btn  btnStl  " style={{ borderRadius: "30px" }} type="submit">READ MORE</button>
        </div>



        <section className='servCls'>
          <div className='container-fluid coldiv'>
            <div className='text-center divsty m-5'>
              <br></br>
              <p className='servStyl '>Our Services</p>
              <div className='container mr' id='arrow' >
                <br></br>
                <div className='text-center'>
                  <div className='row row3'>
                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img13} />
                        <br></br>
                        <p className='pdataNew'>Medical Billing</p>
                        <p className='m-5 paraNew'>Our meticulous approach to delivering healthcare revenue cycle services allows clients to focus entirely on patient care. & credentialing statuses.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right'></i>  </span>
                        </a>
                      </div>
                    </div>

                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img14} />
                        <br></br>
                        <p className='pdataNew'>Eligibility & Benefits Verifications</p>
                        <p className='m-5 paraNew'>To ensure that the practices see the right set of patients based on the provider contracts.maintain accurate credentialing statuses.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right '></i>  </span>
                        </a>
                      </div>
                    </div>

                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img15} />
                        <br></br>
                        <p className='pdataNew'>Pre-Authorizations</p>
                        <p className='m-5 paraNew'>To ensure that all the procedures/treatments gets pre-authorized by the Insurances to avoid any reimbursement issues.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right '></i>  </span>
                        </a>
                      </div>
                    </div>
                  </div>


                  <div className='row row3'>
                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img16} />
                        <br></br>
                        <p className='pdataNew'>Credentialing</p>
                        <p className='m-5 paraNew'>As a part of our medical credentialing services, we assist businesses by coordinating with insurance companies to initiate and maintain accurate credentialing statuses. & maintain accurate.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right '></i>  </span>
                        </a>
                      </div>
                    </div>

                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img17} />
                        <br></br>
                        <p className='pdataNew'>Medical Coding</p>
                        <p className='m-5 paraNew'>Our medical coding solutions are certified by AAPC and AHIMA to ensure quality, compliance and maximum reimbursement.maintain accurate credentialing statuses.maintain accurate.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right '></i>  </span>
                        </a>
                      </div>
                    </div>

                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img18} />
                        <br></br>
                        <p className='pdataNew'>Compliance Audits</p>
                        <p className='m-5 paraNew'>We offer 360 degree compliance medical auditing services that reduce denials, ensure regulatory compliance and adhere to all government protocols.maintain accurate credentialing statuses.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right'></i>  </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='row row3'>
                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img19} />
                        <br></br>
                        <p className='pdataNew'>Practice Consulting</p>
                        <p className='m-5 paraNew'>From starting a new practice to analyzing and fixing process gaps, we provide medical practice consulting services to help you optimize billing and clinical operations. any reimbursement issues.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right'></i>  </span>
                        </a>
                      </div>
                    </div>

                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img20} />
                        <br></br>
                        <p className='pdataNew'>Contract Negotiation</p>
                        <p className='m-5 paraNew'>We help the healthcare providers to renegotiate their reimbursements/contracts with the insurance companies by building a case study based on their specialties and demographics.</p>
                        <a href='www.google.com'>
                          <span className='btn'>READ MORE<i className='fa fa-arrow-right '></i>  </span>
                        </a>
                      </div>
                    </div>

                    <div className='card3  boxContx' >
                      <div className='card-header3'>
                        <img className='m-3 imgsz' src={img21} />
                        <br></br>
                        <p className='pdataNew'>Medical Transcription</p>
                        <p className='m-5 paraNew'>With industry-leading speech recognition technology, our medical transcription services reduce human errors and shorten TAT from days to hours.maintain accurate credentialing statuses.</p>
                        <a href='www.google.com'>
                          <span className='btn fntread tab'>READ MORE  <i className='fa fa-arrow-right '></i>  </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='text-center resDiv'>
          <div id="carouselExampleCaptions" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators carousel-indicator1">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img22} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block marginText">
                  <p className='text-center cust'>Customer Story</p>
                  <br></br>
                  <p className='text-center custpara '>We have had horrible experiences with billing companies until we moved to Practolytics. Practolytics handled a very tough transition swiftly and without missing a beat and we were up and billing again in 3 weeks. The staff have always been super accommodating and responsive to queries and requirements. Sometimes the craziest questions have been answered in an extraordinary way. They have always executed the processes with swiftness and precision. With Practolytics as our billing partner, our revenue has improved significantly.</p>
                  <br>
                  </br>
                  <br></br>
                  <br />
                  <p className='text-center tanya'>Tanya-Owner</p>
                  <p className='text-center ceo'>CREO,VIRGINIA</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img22} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p className='text-center cust'>Customer Story</p>
                  <br></br>
                  <p className='text-center custpara '>We have outsourced our billing to Practolytics for the last 5 years. They have been very helpful and instrumental in our continued growth. They are always available to answer any questions that we have and assist our team. Their response time is great, and I would recommend them to anyone who would like to see their business revenue increase.</p>
                  <br>
                  </br>
                  <br></br>
                  <br />
                  <p className='text-center tanya'>Dr. Martha Livingston – CEO</p>
                  <p className='text-center ceo'>San Antonio Counseling and Behavioral Center, Texas</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img22} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <p className='text-center cust'>Customer Story</p>
                  <br></br>
                  <p className='text-center custpara '>Practolytics has been a huge help for Personic HealthCare. They have done an amazing job for us and have been available at any given time for any questions that we might have. Within the billing industry, our experience with Practolytics has been a revelation. I would highly recommend Practolytics for any medical practice which wants 5 star service level.</p>
                  <br>
                  </br>
                  <br></br>
                  <br />
                  <p className='text-center tanya'>Pamela Kufahl - COO/CFO</p>
                  <p className='text-center ceo'>KPM Management Services, Atlanta</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <section>
        <div className='text-center divClr'>
          <br></br>
          <p className='whyC'>Why Our Client Love Us</p>
          <br>
          </br>
          <button className="btn  btnStl  " style={{ borderRadius: "30px" }} type="submit">KNOW MORE </button>
          <br></br>
          <br></br>
        </div>
        </section>

        <section>
          <div className='container'>
            <div className='text-center'>
              <div className='row' style={{ marginLeft: "-236px" }}>
                <div className='col-md-4 m-5'>
                  <div className='paraadj'>
                  <p className='text-left readyPara'>
                    Are you Ready To Grow Your <br /> Bussiness ?
                  </p>
                  <p className='text-left parades'>
                    Learn all about our one-stop solution for revenue optimization. With proven technology solutions, we can improve efficiency and productivity of each area of your practice.
                  </p>
                  </div>
                  <button className="btn  btnStl btncen " style={{ borderRadius: "30px" }} type="submit">TALK TO US</button>

                </div>
                <div className='col-md-8'>
                  <div className='text-center'>
                    <img className='imgScr' src={scr} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='backsec'>
          <div className='container-fluid'>
            <div className='text-center divLast'>
              <div className='tex-center'>
                <br></br>
                <div className='text-center are'>
                  <p className='paralast m-5'>Are You On A Look Out For Industry Updates?</p>
                </div>
                <div className='text-center stay'>
                  <p className='parachildlast'>Stay updated and join the conversation with the latest facts.</p>
                </div>
              </div>
              <div className='text-center'>
                <div className='row row90'>
                  <div className='card-Newbox1  boxContx m-5' >
                    <div className='card-header-new'>
                      <img className='imgcls imgheight' style={{ height: "199px" }} src={img26} />
                      <br></br>
                      <br></br>
                      <p className='text-left titlepara'> Why Should You Incorporate Eligibility Verification in RCM?</p>
                      <p className='text-left respara'>Eligibility verification is the process of checking the patient’s insurance details to verify coverage and benefits under the patient’s plan.</p>
                    </div>
                  </div>

                  <div className='card-Newbox1  boxContx  m-5' >
                    <div className='card-header-new'>
                      <img className='imgcls imgheight' style={{ height: "199px" }} src={img28} />
                      <br></br>
                      <br></br>
                      <p className='text-left titlepara'> Tips to Enhance the Urgent Care Growth and Improve Patient Volume</p>
                      <p className='text-left respara'>Here are a few ways how Urgent Care facilities can improve their business growth and increase patient volume. </p>
                    </div>
                  </div>

                  <div className='card-Newbox1  boxContx m-5' >
                    <div className='card-header-new'>
                      <img className='imgcls imgheight' style={{ height: "199px" }} src={img29} />
                      <br></br>
                      <br></br>
                      <p className='text-left titlepara'> Challenges Faced by Specialty Healthcare Facilities While Optimizing RCM</p>
                      <p className='text-left respara'>To ensure successful revenue cycle management, healthcare organizations must work towards strategic goals. </p>
                    </div>
                  </div>

                </div>
              </div>
              <button className="btncenlast newbtn " style={{ borderRadius: "30px" }} type="submit">READ MORE BLOGS</button>
            </div>
          </div>
        </section>

        <div className='container'>
          <div className='text-center'>
            <div className='row rowloop'>
              <div className='col-md-6 m-5' style={{ maxWidth: "43%" }}>
                <p className='text-left readyPara1'>
                  Stay In The Loop
                </p>
                <p className='text-left parades'>Sign up for our monthly newsletter</p>
                <p className='text-left parades elepara' >By subscribing, I consent to the processing of the personal data that I provide  as described in the privacy policy.</p>
              </div>
              <div className='col-md-6' >
                <div className='text-center impCen m-5'>
                  <input className='inptBox' type="type" placeholder="            ENTER YOUR EMAIL ADDRESS"></input>
                  <br></br>
                  <button className="btn  btnStl btncen btncen2 " style={{ borderRadius: "30px" }} type="submit">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className='foot'>
          <div className='container'>
            <div className='row rowfoot'>
              <div className='col-lg-5 mt-5'>
                <div className='prbimg'>
                  <img className='' style={{ marginLeft: "-396px" }} src={img31} />
                </div>
                <div>
                  <p className='text-left footpara mt-4'>Practolytics is a 20+ year old healthcare technology and management company. We provide end to end solutions to eliminate revenue cycle management inefficiencies, maximize revenue and consistently deliver optimum results.</p>
                </div>
                <ul class="social-menu mt-5">
                  <li><a href="https://facebook.com/"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="https://linkedin.com/"><i class="fab fa-linkedin"></i></a></li>
                  <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://instagram.com/"><i class="fab fa-instagram"></i> </a></li>
                  <li><a href="https://youtube.com/"><i class="fab fa-youtube"></i> </a></li>
                </ul>
                <br></br>
                <img className='footimglst' style={{ marginLeft: "-255px", height: "89px" }} src={img32} />
              </div>
              <div className='col-lg-3 elelst' style={{ marginLeft: "-77px" }}>
                <p className='text-left footserpara mt-5'>Services</p>
                <ul class="mt-3 listCls" style={{ listStyleType: "none" }}>
                  <li>RCM SERVICES</li>
                  <li className='listspc'>MEDICAL BUILDING</li>
                  <li className='listspc'>ELIGIBILITY AND BENEFITS VERIFICATION</li>
                  <li className='listspc'>PRE-AUTHORIZATIONS</li>
                  <li className='listspc'>CREDENTIALING</li>
                  <li className='listspc'>MEDICAL CODING</li>
                  <li className='listspc'>COMPLIANCE AUDITS</li>
                  <li className='listspc'>PRACTICE CONSULTING</li>
                  <li className='listspc'>CONTRACT NEGOTIATION</li>
                  <li className='listspc'>MEDICAL TRANSCRIPTION</li>
                </ul>
              </div>
              <div className='col-lg-4' style={{ marginLeft: "77px" }}>
                <div className='loc'><p className='text-left footserpara1 mt-5'>Locations</p></div>

                <ul class="mt-3 listCls" style={{ listStyleType: "none" }}>
                  <li style={{ fontWeight: "bold", fontSize: "16px" }}>Columbia</li>
                  <li className='listspc1 cenlst'>Suite # 222, One Harbison Way,</li>
                  <li className='listspc1 cenlst'>Columbia, SC- 29212.</li>
                  <li className='listspc1 cenlst'>sales@practolytics.com</li>
                  <li className='listspc1 cenlst'>+(803) 932-9624</li>
                  <br></br>
                  <br></br>
                  <li className='listspc1 cenlst' style={{ fontWeight: "bold", fontSize: "16px" }}>Atlanta</li>
                  <li className='listspc1 cenlst'>Suite # 200, 5076 Winters Chapel Road,</li>
                  <li className='listspc1 cenlst'>Atlanta, GA- 30360.</li>
                  <li className='listspc1 cenlst'>sales@practolytics.com</li>
                  <li className='listspc1 cenlst'>+(800) 783-2080</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className='footchild'>
          <div className='container'>
            <div className='text-center'>
              <br></br>
              <p className='prvc'>PRIVACY POLICY  |  FAQs  |  TESTIMONIALS  </p>
              <p className='prvc1'>© COPYRIGHT 2022. ALL RIGHTS RESERVED BY PRACTOLYTICS</p>
              <br></br>

            </div>
          </div>
        </footer>
     

      </div>

    </>

  )
}

export default Practo_Templates
