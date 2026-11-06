export function zipStrict<T extends readonly unknown[][]>(
  ...arrays: T
): { [K in keyof T]: T[K] extends readonly (infer V)[] ? V : never }[] {
  if (arrays.some((a) => !Array.isArray(a))) throw new TypeError('Expected arrays');
  const length = arrays[0]?.length ?? 0;
  if (arrays.some((a) => a.length !== length)) throw new RangeError('Array lengths differ');
  return Array.from({ length }, (_, i) => arrays.map((a) => a[i])) as {
    [K in keyof T]: T[K] extends readonly (infer V)[] ? V : never;
  }[];
}
