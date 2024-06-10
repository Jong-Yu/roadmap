export function cn(...classNames: (string | undefined)[]) {
  return (
    classNames.filter((cn: string | undefined) => cn).join(' ') || undefined
  );
}
