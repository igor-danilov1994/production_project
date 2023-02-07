
type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods, additions: string[]): string => {
    return [
        cls,
        ...additions,
        Object.entries(mods)
            .filter( ([classNames, value]) =>  Boolean(value))
            .map(([className]) => className)
    ].join(" ")
}
