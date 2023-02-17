import React, { useState } from "react";

export default function About(props) {

    //   const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle = {
      color: props.mode ==='dark'? 'white': '#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
     
      

    }

 
  return (
         <div className="container" style={myStyle}>
      <h1>About Us</h1> 
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
              <strong> Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
             TextUtils gives you the way to analyse and enhance your text easily.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                 <strong> Free to use</strong>
                 </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body"  style={myStyle}>
                It is completely free to use and saves your time and money
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>  Browser Compatible and Mobile Responsive      </strong>    
                      </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body"  style={myStyle}>
              It is compatible on every browser and working perfectly in an any laptop, computer, mobile, ipad etc. 
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>

        </div> */}
      </div>

  );
}
