
export function classNames(...classes: (boolean|string)[]): string {
    return classes.filter(Boolean).join(' ')
}
