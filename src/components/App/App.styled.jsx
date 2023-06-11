import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 300px;

  & section:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
`;
