import { Button, Carousel, theme } from "antd";
import slider1 from "../../../assets/Slider/slider1.webp";
import slider2 from "../../../assets/Slider/slider2.webp";
import slider3 from "../../../assets/Slider/slider3.webp";
import slider4 from "../../../assets/Slider/slider4.webp";
import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Container, SliderButton } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const Slider: React.FC = () => {
  const theme = useSelector(getTheme);
  const ref = useRef<any>();
  const contentStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  return (
    <Container>
      <Carousel ref={ref} autoplay draggable pauseOnHover>
        <div>
          <img src={slider2} style={contentStyle} alt="" />
        </div>
        <div>
          <img src={slider3} style={contentStyle} alt="" />
        </div>
        <div>
          <img src={slider4} style={contentStyle} alt="" />
        </div>
      </Carousel>
      <SliderButton
        theme={theme}
        position="left"
        onClick={() => {
          ref.current.prev();
        }}
      >
        <LeftOutlined />
      </SliderButton>
      <SliderButton
        theme={theme}
        position="right"
        onClick={() => {
          ref.current.next();
        }}
      >
        <RightOutlined />
      </SliderButton>
    </Container>
  );
};

export default Slider;
