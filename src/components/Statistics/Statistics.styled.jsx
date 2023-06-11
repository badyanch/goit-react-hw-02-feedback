import styled from 'styled-components';

export const ListStats = styled.ul`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};

  & li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
