import React, { Component } from "react";
import homepage from "../assets/images/homepage1.jpeg";

class ChetanInfoRight extends Component {
  render() {
    return (
      <>
        <header class="bg-gradient text-dark py-2" style={{backgroundColor:'#F0FFFF'}}>
          <div class="container">
            <div class="row">
              
              <div class="col-md-9">
                <h1>{this.props.name}</h1>
                <h5>{this.props.dese}</h5>
                {/* <p class="border-top pt-2">
            <div className='conatiner'>
            <div className='row'> 
            <div className='col'>
                </div>  
            </div>
            </div>
        </p> */}
                <nav class=" text-drak-50 mb-5">
                  <div class="container">
                    <div class="row p-3">
                      <div class="col-md pb-2 pb-md-0">
                        <svg
                          width="1em"
                          height="1.5em"
                          viewBox="0 0 16 16"
                          class="bi bi-envelope"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                          />
                        </svg>
                        <a href={this.props.email} class="text-dark ml-2">
                        {this.props.email}
                        </a>
                      </div>
                      <div class="col-md text-md-center pb-2 pb-md-0">
                        <svg
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 16 16"
                          class="bi bi-globe"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
                          />
                        </svg>
                        <a href={this.props.gitHub}class="text-dark ml-2">
                         {this.props.gitHub}
                        </a>
                      </div>
                      <div class="col-md text-md-right">
                        <svg
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 16 16"
                          class="bi bi-telephone-fill"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                          />
                        </svg>
                        <a href= {this.props.mobile} class="text-drak ml-2">
                         {this.props.mobile}
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="col-md-3 text-left text-md-center mb-2">
                <img
                  class="rounded-circle img-fluid"
                  src={this.props.photo}
                  alt="Profile Photo"
                />
              </div>
            </div>
          </div>
        </header>
<hr/>
        

      </>
    );
  }
}

export default ChetanInfoRight;
