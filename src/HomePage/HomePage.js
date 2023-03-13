import './HomePage.css';
import React from 'react';
// import smIcon from '../images/smIcon.png';
import Profile1 from '../images/Profile1.png'

function HomePage() {
    // handleClick = () => {
    //     document.querySelector(".card-btn").addEventListener("click", () => {
    //         document.querySelector(".container").classList.toggle("change");
    //         console.log('You clicked.');
    //     }
    // }
    return (
        <div>
            {/* <img src={smIcon} alt="smIcon" className='smIcon-profile' /> */}
            <button lassName="add-btn" >
            <span className="add-me-btn">Add Me</span>
                <i className="add"></i>
            </button>
            <div className='container'>
                <div className='card'>
                    <div className="card-bio">
                        <div className="img-wrapper">
                            <img src= {Profile1} alt="Person" />
                        </div>
                        <div className="person-info">
                            <h3>Dolly Singh</h3>
                            <h4>@d011y_S1ngh</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <button className="card-btn" >
                            <span className="card-btn-contact">Contact Me</span>
                            <i className="fas fa-angle-up"></i>
                        </button>

                    </div>
                    <div className="card-contact">
                        <h4>Contact Me</h4>
                    </div>
                    <div className="card-social email">
                        <div className="icon-wrapper">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Email</h4>
                            <p>rajpootdolly07@gmail.com</p>
                        </div>
                        <span>{'>'}</span>
                    </div>
                    <div className="card-social insta">
                        <div className="icon-wrapper">
                            <i className="fab fa-facebook-square"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Instagram</h4>
                            <p>Dolly Singh</p>
                        </div>
                        <span>{'>'}</span>
                    </div>
                    <div className="card-social linkedin">
                        <div className="icon-wrapper">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="contact-details">
                            <h4>LinkedIn</h4>
                            <p>@d011ys1ngh</p>
                        </div>
                        <span>{'>'}</span>
                    </div>
                    <div className="card-social facebook">
                        <div className="icon-wrapper">
                            <i className="fab fa-facebook-square"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Facebook</h4>
                            <p>@d011y_s1ngh</p>
                        </div>
                        <span>{'>'}</span>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default HomePage;