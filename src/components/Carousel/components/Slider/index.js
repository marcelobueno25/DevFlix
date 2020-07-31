/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
      color: ${({ color }) => color}
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }

  .slick-slide {
    transition: .8s;
  }

  .slick-slide:hover {
    transform: scale(1.2);
    order: 10;
    z-index: 10;
    margin: 0 2em;
    transition: .5s;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ color, children }) => (
  <Container color={color}>
    <SlickSlider {...{
      dots: false,
      accessibility: true,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Slider;
