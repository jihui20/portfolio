const deviceSizes = {
  mobile: '750px',
  tablet: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  device,
};

export default theme;
