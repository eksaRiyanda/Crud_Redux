import React, { Component, } from "react";
import Slider from "react-slick";
import './beranda.css'
import Img1 from './Img/1.jpg'
import Img2 from './Img/2.jpg'
import Img3 from './Img/3.jpg'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <>
        <br/><br/>
    <div className="card text-center">
        <div className="card-header">
        <h1> Beranda</h1>
        </div>
        <div className="card-body">
                    <div>

                    <Slider {...settings}>
                      <div className='ytb'>
                      <img src={Img1}className="d-block w-100 " width='500px' height='250px' alt="..." />
                      </div>
                      <div className='ytb'>
                      <img src={Img2}className="d-block w-100 " width='500px' height='250px' alt="..." />
                      </div>
                      <div className='ytb'>
                      <img src={Img3}className="d-block w-100 " width='500px' height='250px' alt="..." />
                      </div>
                      <div className='ytb'>
                      <img src={Img2}className="d-block w-100 " width='500px' height='250px' alt="..." />
                      </div>
                      <div>Total Har</div>
                    </Slider>
                  </div>
        </div>


        <div className="container">
        <div className="row align-items-start">
                  <div className="card text-center" style={{width: '18rem'}}>
                    <div className="card-body">
                    <div className="col">
                        <h3>Jumlah Barang</h3>
                        <p>0 Barang</p>
                      </div>
                    </div>
                  </div>

                  <div className="card text-center" style={{width: '18rem'}}>
                    <div className="card-body">
                    <div className="col">
                        <h3>Total Harga</h3>
                        <p>Rp.0.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="card text-center" style={{width: '20rem'}}>
                    <div className="card-body">
                    <div className="col">
                        <h3>Kategori Elektronik</h3>
                        <p>0 Barang</p>
                      </div>
                    </div>
                  </div>
        </div>
      </div>
      </div>



    <div className="card text-center">
        <div className="card-header">
        <h1> Youtube</h1>
        </div>
        <div className="card-body">
                    <div>

                    <Slider {...settings}>
                      <div className='ytb'>
                      <iframe className='ytbitem' id="player" type="text/html" width="400" height="250"
                        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                        frameborder="0"></iframe>
                      </div>
                      <div className='ytb'>
                      <iframe className='ytbitem' id="player" type="text/html" width="400" height="250"
                        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                        frameborder="0"></iframe>
                      </div>
                      <div className='ytb'>
                      <iframe className='ytbitem' id="player" type="text/html" width="400" height="250"
                        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                        frameborder="0"></iframe>
                      </div>
                      <div className='ytb'>
                      <iframe className='ytbitem' id="player" type="text/html" width="400" height="250"
                        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                        frameborder="0"></iframe>
                      </div>
                      <div className='ytb'>
                      <iframe className='ytbitem' id="player" type="text/html" width="400" height="250"
                        src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                        frameborder="0"></iframe>
                      </div>
                    </Slider>
                  </div>
        </div>
      </div>

        


    <div className="card text-center">
        <div className="card-header">
        <h1> Maps</h1>
        </div>
        <div className="card-body">
              <div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508443.9220066261!2d105.0157812328125!3d-5.383682000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dac03d097843%3A0x6bb59f4ba9a84e8c!2sPT.MICRODATA%20INDONESIA%20%7C%20SOFTWARE%20DEVELOPER!5e0!3m2!1sen!2sid!4v1628078700200!5m2!1sen!2sid" width="1000" height="500" style={{border: 0}} allowFullScreen loading="lazy" />
                </div>
            </div>
        </div>
      </div>
<br/><br/><br/><br/>
        <center>        
          <div className="card-header">
        <h1> .........</h1>
        </div>
        </center>


      </>
    );
  }
}