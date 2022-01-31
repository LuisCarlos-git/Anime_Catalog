const convertPxToRem = (value: number) => `${value / 10}rem`;

export default {
  font: {
    family: "'Rubik Mono One', sans-serif",
    color: {
      primary: '#fff',
    },
    sizes: {
      8: convertPxToRem(8),
      12: convertPxToRem(12),
      16: convertPxToRem(16),
      20: convertPxToRem(20),
      24: convertPxToRem(24),
      28: convertPxToRem(28),
      32: convertPxToRem(32),
      36: convertPxToRem(36),
      40: convertPxToRem(40),
      44: convertPxToRem(44),
    },
  },

  colors: {
    primary: '#0D102B',
    cardColor: '#ffff',
  },

  spacings: {
    8: convertPxToRem(8),
    12: convertPxToRem(12),
    16: convertPxToRem(16),
    20: convertPxToRem(20),
    24: convertPxToRem(24),
    28: convertPxToRem(28),
    32: convertPxToRem(32),
    36: convertPxToRem(36),
    40: convertPxToRem(40),
    44: convertPxToRem(44),
    48: convertPxToRem(44),
    52: convertPxToRem(52),
  },

  border: {
    full: '99999px',
    medium: convertPxToRem(4),
  },

  utils: {
    pAll: (value: string) => `
      padding: ${value};
    `,

    py: (value: string) => `
      padding-top: ${value};
      padding-bottom: ${value};
    `,
  },
} as const;
