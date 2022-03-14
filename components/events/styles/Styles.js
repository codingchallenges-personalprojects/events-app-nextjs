import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 50px;
  height: 100vh;
  width: 100vw;
`;

// export const List = styled.li`
//   grid-column-start: 1;
//   grid-column-end: 2;
// `;

export const Lists = styled.ul`
  margin: auto;
`;

export const TimeContainer = styled.div`
  height: 70px;
  width: 230px;
`;
export const Title = styled.h2`
  color: blue;
`;
export const AdressContainer = styled.div`
  height: 70px;
  width: 230px;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 70%;
  height: 70%;
  /* margin: auto; */
`;


