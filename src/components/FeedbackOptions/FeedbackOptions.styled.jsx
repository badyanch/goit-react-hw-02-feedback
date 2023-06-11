import styled from 'styled-components';

export const ListButton = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;
