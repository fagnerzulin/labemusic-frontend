import styled from 'styled-components';
import MainContainer from '../../components/StyledComponents/MainContainer.styled';
import palette from '../../constants/paletteColor';

export const MainContainerList = styled(MainContainer)`
  justify-content: start;
`;

export const MenuContainer = styled.nav`
  width: 18vw;
  height: 98vh;
  padding: 10px;
  background-color: ${palette.darkYellow};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    width: 35vw;
  }

  @media (min-width: 992px) {
    width: 25vw;
  }

  @media (min-width: 1200px) {
    width: 18vw;
  }
`;

export const FormContainer = styled.form`
  width: 80vw;
  height: 98vh;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  color: ${palette.beige};
  text-align: center;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
`;

export const InputContainer = styled.div`
  padding: 30px;
`;

export const ChoiseContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
