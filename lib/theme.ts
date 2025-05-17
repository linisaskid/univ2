export const theme = {
  colors: {
    accent: '#5C69D2',
  },
  styles: {
    hover: {
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(92, 105, 210, 0.1)',
        borderColor: '#5C69D2',
      },
    },
    focus: {
      '&:focus': {
        outline: '2px solid #5C69D2',
        outlineOffset: '2px',
      },
    },
  },
} 