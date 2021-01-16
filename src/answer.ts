export function undupe(A: string[]): string[] {
  const uniques = [];
  const aLen = A.length;
  let aPos = aLen;

  while (aPos--) {
    const aIdx = aLen - aPos - 1;
    const a = A[aIdx];

    if (uniques.indexOf(a) === -1) {
      uniques.push(a);
    }
  }

  return uniques;
}
