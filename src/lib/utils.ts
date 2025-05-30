export function getIndex(n: number) {
    return n % 31;
}
export function getIndexFifths(n: number) {
    return (n * 19) % 31;
}
export function getDiatonic(n: number) {
    const index = getIndexFifths(n);
    return (index * 4 + 4) % 7;
}
export function getDiatonicFifths(n: number) {
    const index = getIndexFifths(n);
    return (index + 1) % 7;
}
export function getChromatic(n: number) {
    const index = getIndexFifths(n);
    return (index * 7 + 5) % 12;
}
export function getChromaticFifths(n: number) {
    const index = getIndexFifths(n);
    return (index + 11) % 12;
}
export function isAboveBlackKey(n: number) {
    const index = getChromaticFifths(n);
    return index >= 6 && index <= 10;
}
export function getAccidental(n: number) {
    if (n > 25) return 0;   // double-sharp
    if (n > 18) return 1;   // sharp
    if (n > 11) return 2;   // natural
    if (n > 4) return 3;    // flat
    return 4;               // double-flat
}
export function getModalDegree(n: number, mode: number) {
    const index = getIndexFifths(n);
    return (index * 4 + mode * 3 + 1) % 7 + 1;
}
export function getQuality(n: number) {
    if (n > 26) return "AAAA";
    if (n > 19) return "AAA";
    if (n > 12) return "AA";
    if (n > 5) return "A";
    if (n > 1) return "M";
    if (n > -2) return "P";
    if (n > -6) return "m";
    if (n > -13) return "d";
    if (n > -20) return "dd";
    if (n > -27) return "ddd";
    return "dddd"
}
export function getSize(n: number) {
    const size = ((((n * 4) % 7) + 7) % 7) + 1;

    if ((size === 1) && (n < -6))
        return 8;
    return size
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
export const disabledColours = [
    'disabled:bg-orange-800 disabled:text-white/50',
    'disabled:bg-blue-800 disabled:text-white/50',
    'disabled:bg-red-800 disabled:text-white/50',
    'disabled:bg-yellow-800 disabled:text-white/50',
    'disabled:bg-fuchsia-800 disabled:text-white/50',
    'disabled:bg-green-800 disabled:text-white/50',
    'disabled:bg-violet-800 disabled:text-white/50'
];
export const letterName = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const mode = ['Lydian', 'Major', 'Mixolydian', 'Dorian', 'Minor', 'Phrygian', 'Locrian'];
export const accidental = ['x', '#', '', 'b', 'bb'];
