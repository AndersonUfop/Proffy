import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import backgroundAsset from '../../assets/images/background-asset.svg';

import { InputContainer } from '../../components/InputForm/styles';

interface FormProps {
    isSubmitAvailable: boolean;
}

export const Container = styled.div` 
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
  background: ${({ theme }) => theme.colors.primary};

  @media (min-width: 1100px) {
      flex-direction: row;
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background:  ${({ theme }) => theme.colors.background};

    padding: 0 2.4rem;

    @media (min-width: 1100px) {
        width: 45%;
    }
`;

export const Form = styled(Unform)`
    width: 100%;
    max-width: 350px;

    a {
        display: block;
        margin-bottom: 12.4rem;
    }

    h1 {
        font: 3.6rem Poppins;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.textTitle};
        margin-bottom: 1.4rem;
        line-height: 4.6rem;
    }

    span {
        font-size:  1.6rem Poppins;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.textBase};
        margin-bottom: 4rem;
        line-height: 2.6rem;
        display: block;
    }

    ${InputContainer} {
        border-radius: 0.8rem 0.8rem 0 0;
    }
    ${InputContainer} + ${InputContainer} {
        border-radius: 0;
    }
    ${InputContainer} + ${InputContainer} + ${InputContainer} + ${InputContainer} {
        border-radius: 0 0 0.8rem 0.8rem;
    }
`;

export const Info = styled.div` 
    flex: 1;
    background: url(${backgroundAsset}) no-repeat center;

    svg {
        max-width: 33.5rem;
        width: 100%;
    }

    h2 {
        color: ${({ theme }) => theme.colors.textInPrimary};
        font-weight: 400;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 25rem;

    @media (min-width: 730px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }   
`;