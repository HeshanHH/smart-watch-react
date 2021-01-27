import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import img01 from "../image/Smart-Sports-Watch-PNG.png";
import img02 from "../image/580b585b2edbce24c47b27bb.png";
import img03 from "../image/Apple-Watch-Series-3-PNG-Image.png";

export default function HeroSection() {
  // const stickNavbar = (e) => {

  //     // var scrl = $(window).scrollTop();
  //     // if(scrl < 60){
  //     //     $('.header-1').removeClass('fixedbar');
  //     // }else{
  //     //     $('.header-1').addClass('fixedbar');
  //     // }
  // }

  var slides;
  function myFunction(e) {
    console.log(e);
    slides = e;
  }

  var slideIndex = 1;
  //showSlides(slideIndex);

  function plusSlides(n) {
    //showSlides(slideIndex +=n);
  }

  // var sli = window.addEventListener("load", ()=>{
  //     return document.getElementsByClassName('myslides');
  // });

  function showSlides(n) {
    var i;
    //var slides = document.querySelectorAll('myslides');
    //var slides = ReactDOM.findDOMNode()document.getElementById('myslides');
    //var slides = React.ReactDOM.findDOMNode(abcd).getElementsByClassName('myslides').length;
    //var slides =  document.getElementsByClassName('myslides')
    //var slides = this.refs.abcd.getAttribute('myslides');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  // listning to the window resizing for the button functions
  //window.addEventListener('scroll',stickNavbar);

  return (
    <>
      <div
        className="slideshow-container"
        onLoad={() => myFunction(document.getElementsByClassName("myslides"))}
        onScroll={() => myFunction(document.getElementsByClassName("myslides"))}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="myslides" id="myslides">
          <h2>
            QINMI <br />
            WATCH <br />
            <span>SERIES 6</span>
          </h2>
          <img src={img01} className="p_img" alt="slider-01" />
          <div className="p_detail">
            <h3>
              QINMI
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star "></i>
            </h3>
            <h4>Smart Watch Series 6</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              id.
            </p>
            <ul>
              <li>
                <i className="fa fa-angle-right"></i>
                Lorem ipsum dolor sit amet.
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                Lorem ipsum dolor sit amet.
              </li>
            </ul>

            <select>
              <option style={{ background: "gold" }} value="size">
                GOLD
              </option>
              <option style={{ background: "red" }} value="gold">
                RED
              </option>
              <option style={{ background: "green" }} value="green">
                GREEN
              </option>
              <option style={{ background: "blue" }} value="blue">
                BLUE
              </option>
              <option style={{ background: "cyan" }} value="cyan">
                CYAN
              </option>
            </select>

            <Link href="">Add to Cart</Link>
            <span>$390</span>
          </div>
        </div>
        <div className="myslides">
          <h2>
            QINMI <br />
            WATCH <br />
            <span>SERIES 6</span>
          </h2>
          <img src={img02} className="p_img" alt="slider-01" />
          <div className="p_detail">
            <h3>
              QINMI
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star "></i>
            </h3>
            <h4>Smart Watch Series 6</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              id.
            </p>
            <ul>
              <li>
                <i className="fa fa-angle-right"></i>
                Lorem ipsum dolor sit amet.
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                Lorem ipsum dolor sit amet.
              </li>
            </ul>

            <select>
              <option style={{ background: "gold" }} value="size">
                GOLD
              </option>
              <option style={{ background: "red" }} value="gold">
                RED
              </option>
              <option style={{ background: "green" }} value="green">
                GREEN
              </option>
              <option style={{ background: "blue" }} value="blue">
                BLUE
              </option>
              <option style={{ background: "cyan" }} value="cyan">
                CYAN
              </option>
            </select>

            <Link href="">Add to Cart</Link>
            <span>$190</span>
          </div>
        </div>

        <div className="myslides">
          <h2>
            QINMI <br />
            WATCH <br />
            <span>SERIES 6</span>
          </h2>
          <img src={img02} className="p_img" alt="slider-01" />
          <div className="p_detail">
            <h3>
              QINMI
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star rate"></i>
              <i className="fa fa-star "></i>
            </h3>
            <h4>Smart Watch Series 6</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              id.
            </p>
            <ul>
              <li>
                <i className="fa fa-angle-right"></i>
                Lorem ipsum dolor sit amet.
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                Lorem ipsum dolor sit amet.
              </li>
            </ul>

            <select>
              <option style={{ background: "gold" }} value="size">
                GOLD
              </option>
              <option style={{ background: "red" }} value="gold">
                RED
              </option>
              <option style={{ background: "green" }} value="green">
                GREEN
              </option>
              <option style={{ background: "blue" }} value="blue">
                BLUE
              </option>
              <option style={{ background: "cyan" }} value="cyan">
                CYAN
              </option>
            </select>

            <Link href="">Add to Cart</Link>
            <span>$290</span>
          </div>
        </div>
        <Link className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </Link>
        <Link className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </Link>
        <div></div>
      </div>
    </>
  );
}
