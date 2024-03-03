import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #e6e6fa;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 200px;
`;

export const Input = styled.input`
  padding: 10px 10px 10px 10px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
