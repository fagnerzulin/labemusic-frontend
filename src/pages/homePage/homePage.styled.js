import styled from 'styled-components';
import palette from '../../constants/paletteColor';

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  color: ${palette.beige};
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
  color: #fff;
`;

export const Box = styled.div`
  width: 50vh;
  height: 50vh;
  background-color: ${palette.blue};
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;
