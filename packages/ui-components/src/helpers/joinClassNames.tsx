export const joinClassNames = (
  ...classNames: Array<string | boolean | undefined>
) => {
  return classNames.filter(Boolean).join(' ');
};
