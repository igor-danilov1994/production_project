type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods = {}, additions: string[] = []): string => [
    cls,
    ...additions.filter(Boolean),
    Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');
