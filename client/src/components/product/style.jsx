import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 210px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: 75%;
`;

export const Title = styled.h3`
    color:white;
    margin-bottom: 20px;
`;

export const Icon = styled.div`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  &:hover{
      background-color: #f8f4f4;
  }
`;