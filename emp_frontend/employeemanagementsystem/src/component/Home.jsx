import React from 'react';

function Home() {

    let userdata = JSON.parse(localStorage.getItem("userdetails"))
    return (
        <div>
            <h1 className="position-absolute top-50 start-50 translate-middle text-white" style={{ zIndex: 10, textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }} >
                Hello, {userdata.username}
            </h1>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ height: '700px' }}>
                    <div className="carousel-item active">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/carousel1.png`}
                            className="d-block w-100"
                            style={{ height: '100%', objectFit: 'cover' }}
                            alt="Slide 1"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Streamline Employee Management</h5>
                            <p>Our platform helps you manage your team efficiently and effectively.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/img/carousel2.png`} className="d-block w-100" style={{ height: '100%', objectFit: 'cover' }} alt="Employee management carousel slide 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Enhance Team Collaboration</h5>
                            <p>Track project progress and foster a collaborative work environment.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/img/carousel3.png`} className="d-block w-100" style={{ height: '100%', objectFit: 'cover' }} alt="Employee management carousel slide 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Boost Productivity & Performance</h5>
                            <p>Utilize performance tracking to help your team achieve their goals.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Home;