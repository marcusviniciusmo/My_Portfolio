export const setBackgroundToGradient = (
  direction: string = 'to right',
  fromColor: string = 'var(--gradientBackgroundFrom)',
  toColor: string = 'var(--gradientBackgroundTo)',
) => `background: linear-gradient(${direction}, ${fromColor}, ${toColor});`;
