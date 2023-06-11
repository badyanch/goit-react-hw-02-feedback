const theme = Object.freeze({
  colors: {
    primary: '#fff',
    primaryBg: '#ededed',
    secondaryBg: 'rgb(113, 100, 249)',
    primaryText: '#212121',
    secondaryText: '#757575',
    good: '#4de64d',
    neutral: '#f8f86b',
    bad: '#fc6161',
  },
  duration: '250ms',
  timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
});

Object.freeze(theme.colors);

export { theme };
