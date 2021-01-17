/**
 * Remove duplicates in a list. Preserves ordering of items.
 *
 * @param A list of emails
 * @returns duplicate-free list of emails
 */
export function undupe(A: string[]): string[] {
  return Array.from(new Set(A));
}
