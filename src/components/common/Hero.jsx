import React from 'react'
import styled from 'styled-components'

import lilbaby from '../../images/banners/Lil-Baby-Website-Banner.jpg'

const Wrapper = styled.div`
  .fnc-slider {
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    height: 100vh;

    @media (max-width: 480px) {
      height: 70vh;
    }
  }

  .fnc-slider__slides {
    position: relative;
    height: 100%;
    -webkit-transition: -webkit-transform 1s 0.6666666667s;
    transition: -webkit-transform 1s 0.6666666667s;
    transition: transform 1s 0.6666666667s;
    transition: transform 1s 0.6666666667s, -webkit-transform 1s 0.6666666667s;
  }

  .fnc-slider .m--blend-green .fnc-slide__inner {
    background: url(${(props) => props.image || lilbaby});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
  }

  .fnc-slider .m--blend-green .fnc-slide__mask-inner {
    background-color: rgb(206, 152, 41);
  }

  .fnc-slide {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .fnc-slide__inner {
    position: relative;
    height: 100%;
    background-size: cover;
    background-position: center top;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .fnc-slide__mask {
    overflow: hidden;
    z-index: 1;
    position: absolute;
    right: 60%;
    top: 15%;
    width: 50.25vh;
    height: 67vh;
    margin-right: -90px;
    -webkit-clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      0 100%,
      0 0,
      6vh 0,
      6vh 61vh,
      44vh 61vh,
      44vh 6vh,
      6vh 6vh
    );
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      0 100%,
      0 0,
      6vh 0,
      6vh 61vh,
      44vh 61vh,
      44vh 6vh,
      6vh 6vh
    );
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
  }

  .fnc-slide__mask-inner {
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100vw;
    height: 100vh;
    margin-left: -50vw;
    margin-top: -50vh;
    background-size: cover;
    background-position: center center;
    background-blend-mode: luminosity;

    @media (max-width: 768px) {
      left: 35%;
    }

    @media (max-width: 480px) {
      left: 20%;
    }
  }

  .fnc-slide__content {
    z-index: 2;
    position: absolute;
    left: 40%;
    top: 40%;

    @media (max-width: 768px) {
      left: 25%;
    }

    @media (max-width: 480px) {
      left: 10%;
    }
  }
  .fnc-slide__heading {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .fnc-slide__heading-line {
    overflow: hidden;
    position: relative;
    padding-right: 20px;
    font-size: 100px;
    font-weight: 700;
    color: #fff;
    word-spacing: 10px;

    @media (max-width: 768px) {
      font-size: 8rem;
    }

    @media (max-width: 480px) {
      font-size: 6rem;
    }
  }
  .fnc-slide__heading-line:nth-child(2) {
    padding-left: 30px;
  }

  .fnc-slide__heading-line span {
    display: block;
  }
`

function Hero({ line1, line2, image }) {
  return (
    <Wrapper image={image}>
      <div className="demo-cont">
        <div className="fnc-slider example-slider">
          <div className="fnc-slider__slides">
            <div className="fnc-slide m--blend-green m--active-slide">
              <div className="fnc-slide__inner">
                <div className="fnc-slide__mask">
                  <div className="fnc-slide__mask-inner"></div>
                </div>
                <div className="fnc-slide__content">
                  <h2 className="fnc-slide__heading">
                    <div className="fnc-slide__heading-line">
                      <span>{line1}</span>
                    </div>
                    <div className="fnc-slide__heading-line">
                      <span>{line2}</span>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero
