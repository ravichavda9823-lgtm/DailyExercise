import React from 'react'

function Gallery() {
  return (
    <div>
        <main>
  {/*? Hero Start */}
  <div className="slider-area2">
    <div className="slider-height2 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap hero-cap2 pt-70">
              <h2>Gallery</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/*? Gallery Area Start */}
  <div className="gallery-area">
    <div className="container-fluid ">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="gallery.html"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="gallery.html"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="gallery.html"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="gallery.html"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="gallery.html"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="box snake mb-30">
            <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>Muscle gaining </h3>
                <a href="gallery.html"><i className="ti-plus" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Gallery Area End */}
  {/* ? services-area */}
  <section className="services-area">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
          <div className="single-services mb-40">
            <div className="features-icon">
              <img src="assets/img/icon/icon1.svg" alt />
            </div>
            <div className="features-caption">
              <h3>Location</h3>
              <p>You’ll look at graphs and charts in Task One, how to approach </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
          <div className="single-services mb-40">
            <div className="features-icon">
              <img src="assets/img/icon/icon2.svg" alt />
            </div>
            <div className="features-caption">
              <h3>Phone</h3>
              <p>(90) 277 278 2566</p>
              <p>  (78) 267 256 2578</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
          <div className="single-services mb-40">
            <div className="features-icon">
              <img src="assets/img/icon/icon3.svg" alt />
            </div>
            <div className="features-caption">
              <h3>Email</h3>
              <p>jacson767@gmail.com</p>
              <p>contact56@zacsion.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

    </div>
  )
}

export default Gallery