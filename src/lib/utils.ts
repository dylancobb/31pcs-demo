export function getIndex(n: number) {
    return n % 31;
}
export function getIndexFifths(n: number) {
    return (n * 19) % 31;
}
export function getDiatonic(n: number) {
    let index = getIndexFifths(n);
    return (index * 4 + 4) % 7;
}
export function getDiatonicFifths(n: number) {
    let index = getIndexFifths(n);
    return (index + 1) % 7;
}
export function getChromatic(n: number) {
    let index = getIndexFifths(n);
    return (index * 7 + 5) % 12;
}
export function getChromaticFifths(n: number) {
    let index = getIndexFifths(n);
    return (index + 11) % 12;
}
export function isAboveBlackKey(n: number) {
    let index = getChromaticFifths(n);
    return index >= 6 && index <= 10;
}
export function getRow(n: number) {
    if (n > 25) return 0;
    if (n > 18) return 1;
    if (n > 11) return 2;
    if (n > 4) return 3;
    return 4;
}

export const colours = [
    'bg-orange-200',
    'bg-blue-300',
    'bg-red-300',
    'bg-yellow-200',
    'bg-fuchsia-300',
    'bg-green-300',
    'bg-violet-300'
];
export const hoverColours = [
    'hover:bg-orange-100',
    'hover:bg-blue-200',
    'hover:bg-red-200',
    'hover:bg-yellow-100',
    'hover:bg-fuchsia-200',
    'hover:bg-green-200',
    'hover:bg-violet-200'
];
export const letterName = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const mode = ['Lydian', 'Major', 'Mixolydian', 'Dorian', 'Minor', 'Phrygian', 'Locrian'];
export const accidental = ['x', '#', '', 'b', 'bb'];
