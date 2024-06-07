const buttons = [
  { label: '7', value: '7', id: Symbol() },
  { label: '8', value: '8', id: Symbol() },
  { label: '9', value: '9', id: Symbol() },
  {
    label: 'DEL',
    value: 'DEL',
    id: Symbol(),
    styles: {
      color: 'var(--white)',
      bg: 'var(--key-background-dark-blue)',
      bdBox: 'var(--key-shadow-dark-blue)',
    },
  },

  { label: '4', value: '4', id: Symbol() },
  { label: '5', value: '5', id: Symbol() },
  { label: '6', value: '6', id: Symbol() },
  { label: '+', value: ' + ', id: Symbol(), styles: {} },

  { label: '1', value: '1', id: Symbol() },
  { label: '2', value: '2', id: Symbol() },
  { label: '3', value: '3', id: Symbol() },
  { label: '-', value: ' - ', id: Symbol() },

  { label: '.', value: '.', id: Symbol() },
  { label: '0', value: '0', id: Symbol() },
  { label: '/', value: ' / ', id: Symbol() },
  { label: 'x', value: ' * ', id: Symbol() },

  {
    label: 'RESET',
    value: 'RES',
    id: Symbol(),
    styles: {
      gc: '1/3',
      color: 'var(--white)',
      bg: 'var(--key-background-dark-blue)',
      bdBox: 'var(--key-shadow-dark-blue)',
    },
  },
  {
    label: '=',
    value: '=',
    id: Symbol(),
    styles: {
      gc: '3/5',
      color: 'var(--white)',
      bg: 'var(--key-background-red)',
      bdBox: 'var(--key-shadow-dark-red)',
    },
  },
]
export default buttons
