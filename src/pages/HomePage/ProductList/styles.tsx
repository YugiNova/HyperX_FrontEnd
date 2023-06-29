import { Button } from "antd";
import Slider from "react-slick";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  align-items: center;
`;

export const Title = styled.h1`
    grid-column:1/2;
    grid-template-rows:1/2;
    margin: 0;
`

export const SliderButton = styled.div`
    grid-column:2/3;
    grid-template-rows:1/2;
    text-align: right;
    margin: 0 -0.25rem;
`

export const ButtonCustom = styled(Button)`
    grid-column:2/3;
    grid-template-rows:1/2;
    text-align: right;
    width: auto;
    height: auto;

    margin: 0 0.25rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid ${props => props.theme.primaryColor};

    svg{
        color: ${props => props.theme.primaryColor};
    }

    &:hover{
        svg{
            color: #69b1ff;
        }
        
    }
`


export const ProductSlider = styled(Slider)`
    grid-column:1/3;
    grid-template-rows:2/3;
  margin: 0 -0.5rem;

  .slick-slider {
    .slick-arrow {
      background: red;
    }
  }
`;

export const SliderItem = styled.div`
  padding: 0.5rem;
`;
