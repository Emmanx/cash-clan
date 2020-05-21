import React, { useEffect } from 'react'
import styled from 'styled-components'

import Swiper from 'swiper'
import 'swiper/css/swiper.css'

import cityGirls from '../../images/banners/CITY-GIRLS-WEBSITE-BANNER.jpg'
import lilBaby from '../../images/banners/Lil-Baby-Website-Banner.jpg'
import raerae from '../../images/banners/Rae-Rae-Banne.jpg'
import tiana from '../../images/banners/Tiana-Major9-Website-Banner-2.jpg'
import vince from '../../images/banners/Vicne-Staples-Banner.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  [class^='swiper-button-'] {
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .swiper-slide {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .swiper-container {
    width: 80%;
    height: 100vh;
    -webkit-transition: opacity 0.6s ease, -webkit-transform 0.3s ease;
    transition: opacity 0.6s ease, -webkit-transform 0.3s ease;
    transition: opacity 0.6s ease, transform 0.3s ease;
    transition: opacity 0.6s ease, transform 0.3s ease,
      -webkit-transform 0.3s ease;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .swiper-container.main-slider {
    @media (max-width: 480px) {
      height: 70vh;
    }
  }
  .swiper-container.nav-slider {
    width: 20%;
    padding-left: 5px;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .swiper-container.nav-slider .swiper-slide {
    cursor: pointer;
    opacity: 0.4;
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }
  .swiper-container.nav-slider .swiper-slide.swiper-slide-active {
    opacity: 1;
  }
  .swiper-container.nav-slider .swiper-slide .content {
    width: 100%;
  }
  .swiper-container.nav-slider .swiper-slide .content .title {
    font-size: 20px;
  }
  .swiper-container:hover .swiper-button-prev,
  .swiper-container:hover .swiper-button-next {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
  .swiper-container.loading {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-slide {
    overflow: hidden;
  }
  .swiper-slide .slide-bgimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;

    @media (max-width: 480px) {
      /* background-position-x: right; */
    }
  }
  .swiper-slide .entity-img {
    display: none;
  }
  .swiper-slide .content {
    position: absolute;
    top: 40%;
    left: 0;
    width: 50%;
    padding-left: 5%;
    color: #fff;
  }
  .swiper-slide .content .title {
    font-size: 7rem;
    font-weight: bold;
    /* margin-bottom: 30px; */

    @media (max-width: 480px) {
      font-size: 4.5rem;
    }
  }
  .swiper-slide .content .caption {
    display: block;
    font-size: 13px;
    line-height: 1.4;
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
    -webkit-transition: opacity 0.3s ease, -webkit-transform 0.7s ease;
    transition: opacity 0.3s ease, -webkit-transform 0.7s ease;
    transition: opacity 0.3s ease, transform 0.7s ease;
    transition: opacity 0.3s ease, transform 0.7s ease,
      -webkit-transform 0.7s ease;
  }
  .swiper-slide .content .caption.show {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  [class^='swiper-button-'] {
    width: 44px;
    opacity: 0;
    visibility: hidden;
  }

  .swiper-button-prev {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
  }

  .swiper-button-next {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
  }
`

function Slider() {
  useEffect(() => {
    let mainSliderSelector = '.main-slider',
      navSliderSelector = '.nav-slider',
      interleaveOffset = 0.5

    // Main Slider
    let mainSliderOptions = {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          this.autoplay.stop()
        },
        imagesReady: function () {
          this.el.classList.remove('loading')
          this.autoplay.start()
        },
        progress: function () {
          let swiper = this
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
              innerOffset = swiper.width * interleaveOffset,
              innerTranslate = slideProgress * innerOffset

            swiper.slides[i].querySelector('.slide-bgimg').style.transform =
              'translateX(' + innerTranslate + 'px)'
          }
        },
        touchStart: function () {
          let swiper = this
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = ''
          }
        },
        setTransition: function (speed) {
          let swiper = this
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + 'ms'
            swiper.slides[i].querySelector('.slide-bgimg').style.transition =
              speed + 'ms'
          }
        },
      },
    }
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions)

    // Navigation Slider
    let navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 10,
      speed: 1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function () {
          this.el.classList.remove('loading')
        },
        click: function () {
          mainSlider.autoplay.stop()
        },
      },
    }
    let navSlider = new Swiper(navSliderSelector, navSliderOptions)

    // Matching sliders
    mainSlider.controller.control = navSlider
    navSlider.controller.control = mainSlider
  }, [])

  return (
    <Wrapper>
      <div className="swiper-container main-slider loading">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${vince})`,
              }}
            >
              <img alt="slider item" src={vince} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Vince Staples</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${cityGirls})`,
              }}
            >
              <img alt="slider item" src={cityGirls} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">City Girls</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${tiana})`,
              }}
            >
              <img alt="slider item" src={tiana} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Tiana</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${lilBaby})`,
              }}
            >
              <img alt="slider item" src={lilBaby} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Lil Baby</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${raerae})`,
              }}
            >
              <img alt="slider item" src={raerae} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Rae Rae</p>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>

      <div className="swiper-container nav-slider loading">
        <div className="swiper-wrapper" role="navigation">
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${vince})`,
              }}
            >
              <img alt="slider item" src={vince} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Vince Staples</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${cityGirls})`,
              }}
            >
              <img alt="slider item" src={cityGirls} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">City Girls</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${tiana})`,
              }}
            >
              <img alt="slider item" src={tiana} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Tiana</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${lilBaby})`,
              }}
            >
              <img alt="slider item" src={lilBaby} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Lil Baby</p>
            </div>
          </div>
          <div className="swiper-slide">
            <figure
              className="slide-bgimg"
              style={{
                backgroundImage: `url(${raerae})`,
              }}
            >
              <img alt="slider item" src={raerae} className="entity-img" />
            </figure>
            <div className="content">
              <p className="title">Rae Rae</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Slider
