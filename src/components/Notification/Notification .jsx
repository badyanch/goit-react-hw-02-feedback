import PropTypes from 'prop-types';
import * as S from './Notification.styled';

export const Notification = ({ message }) => <S.Message>{message}</S.Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
