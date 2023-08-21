import { createSelector } from 'reselect';

const getPractice = (state, id) => {
  const practices = state;

  if (practices) {
    return practices.find((practice) => practice.id === id);
  }
  return null;
};

const getPracticeByIdSelector = createSelector(
  [getPractice],
  (practice) => practice,
);

export default getPracticeByIdSelector;
