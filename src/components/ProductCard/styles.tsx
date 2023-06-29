import styled from "styled-components";
import { Rate } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 0.5rem;
  overflow: hidden;
  padding-bottom: 1rem;

  cursor: pointer;
`;

export const ImageWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const QuickButtonWrapper = styled(motion.div)`
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;

  display: flex;
  flex-direction: column;
`;

export const QuickButton = styled(motion.button)`
  margin: 0.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border-radius: 50%;
  cursor: pointer;

  background: ${(props) => props.theme.secondaryBackground};
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  font-size: 1rem;

  &:hover {
    background: ${(props) => props.theme.primaryColor};
    border: 2px solid ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.secondaryBackground};
  }
`;

export const CartWrapper = styled(motion.div)`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    padding: 0 3rem;
`

export const Name = styled(Link)`
  margin: 0;
  font-size: 1.5rem;
  font-weight:700;
  color: ${(props) => props.theme.primaryFont};

  &:hover{
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const RateStar = styled(Rate)`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const SalePrice = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme.primaryColor};
  font-weight: bold;
  margin: 0;
`;

export const FirstPrice = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.secondaryFont};
  font-weight: 500;
  margin: 0;
  text-decoration: line-through;
`;
