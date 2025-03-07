type Mods = Record<string, boolean | string>;

export const cn = (
  cls: string,
  mods: Mods,
  additional: string[]
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([_key, value]) => Boolean(value))
      .map(([cls, _value]) => cls),
  ].join(' ');
};
