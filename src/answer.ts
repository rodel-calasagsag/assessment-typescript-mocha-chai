export function undupe(A: string[]): string[] {
  const uniques: string[] = [];

  A.forEach((a) => {
    if (!uniques.includes(a)) {
      uniques.push(a);
    }
  });

  return uniques;
}
