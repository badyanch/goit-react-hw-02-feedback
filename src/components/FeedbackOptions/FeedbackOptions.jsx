import PropTypes from 'prop-types';
import { toCapitalLetter } from 'utils';
import * as S from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <S.ListButton>
    {options.map(option => {
      const optionLabel = toCapitalLetter(option);

      return (
        <li key={option}>
          <S.Button type="button" onClick={() => onLeaveFeedback(option)}>
            {optionLabel}
          </S.Button>
        </li>
      );
    })}
  </S.ListButton>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
