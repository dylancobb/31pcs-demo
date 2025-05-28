export function getIndex(n: number) {
    return (n + 29) % 31;
}
export function getIndexFifths(n: number) {
    return ((n + 29) * 19) % 31;
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
    'bg-[#ffb66c]',
    'bg-[#729fcf]',
    'bg-[#ff6d6d] text-white',
    'bg-[#ffe994]',
    'bg-[#e161a9] text-white',
    'bg-[#85d171]',
    'bg-[#8e86ae] text-white'
];
export const letterName = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const accidental = ['x', '#', '', 'b', 'bb'];
