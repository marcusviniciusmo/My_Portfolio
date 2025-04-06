export const setBackgroundToGradient = (
  direction: string = 'to right',
  fromColor: string = 'var(--gradientBackgroundFrom)',
  toColor: string = 'var(--gradientBackgroundTo)',
) => `background: linear-gradient(${direction}, ${fromColor}, ${toColor});`;

export function getIndexMap(list: Array<{ id: string }>) {
  const map = new Map<string, number>();

  list.forEach((item, index) => {
    map.set(item.id, index);
  });

  return map;
};

export function setBorderColor(
  borderColors: Array<string>,
  indexMap: Map<string, number>,
  listId: string
) {
  return borderColors[indexMap.get(listId)! % borderColors.length];
};