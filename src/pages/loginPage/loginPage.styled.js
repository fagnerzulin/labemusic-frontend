import styled from 'styled-components';
import MainContainer from '../../components/StyledComponents/MainContainer.styled';
import palette from '../../constants/paletteColor';

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  color: ${palette.beige};
`;

export const Box = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
  width: 40vw;
  padding: 20px;
  border-radius: 10px;
  background-color: ${palette.blue};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  @media (min-width: 576px) {
    width: 50vw;
  }

  @media (min-width: 992px) {
    width: 40vw;
  }

  @media (min-width: 1200px) {
    width: 25vw;
  }
`;

export const ContainerSignUp = styled.div`
  background-color: ${palette.darkYellow};
  padding: 10px;
  border-radius: 10px;
  height: 15vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;

  @media (min-width: 576px) {
    width: 20vw;
  }

  @media (min-width: 992px) {
    width: 15vw;
  }

  @media (min-width: 1200px) {
    width: 15vw;
  }
`;

export const Text = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: #fff;
`;

export const MainContainerLogin = styled(MainContainer)`
  flex-direction: column;
`;
