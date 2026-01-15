export type LogFn = (...args: any[]) => void;

export interface PuppyLog {
    green: LogFn;
    red: LogFn;
    yellow: LogFn;
    blue: LogFn;
    cyan: LogFn;
    magenta: LogFn;
    white: LogFn;
    gray: LogFn;
    black: LogFn;
    pink: LogFn;
    orange: LogFn;
    purple: LogFn;
    brown: LogFn;
    beige: LogFn;

    bgGreen: LogFn;
    bgRed: LogFn;
    bgYellow: LogFn;
    bgBlue: LogFn;
    bgCyan: LogFn;
    bgMagenta: LogFn;
    bgWhite: LogFn;
    bgGray: LogFn;
    bgBlack: LogFn;
    bgPink: LogFn;
    bgOrange: LogFn;
    bgPurple: LogFn;
    bgBrown: LogFn;
    bgBeige: LogFn;

    boldGreen: LogFn;
    boldRed: LogFn;
    boldYellow: LogFn;
    boldBlue: LogFn;
    boldCyan: LogFn;
    boldMagenta: LogFn;
    boldWhite: LogFn;
    boldGray: LogFn;
    boldBlack: LogFn;
    boldPink: LogFn;
    boldOrange: LogFn;
    boldPurple: LogFn;
    boldBrown: LogFn;
    boldBeige: LogFn;

    italicGreen: LogFn;
    italicRed: LogFn;
    italicYellow: LogFn;
    italicBlue: LogFn;
    italicCyan: LogFn;
    italicMagenta: LogFn;
    italicWhite: LogFn;
    italicGray: LogFn;
    italicBlack: LogFn;
    italicPink: LogFn;
    italicOrange: LogFn;
    italicPurple: LogFn;
    italicBrown: LogFn;
    italicBeige: LogFn;

    bold: LogFn;
    italic: LogFn;
    underline: LogFn;
    strikethrough: LogFn;
    dim: LogFn;

    success: LogFn;
    error: LogFn;
    warning: LogFn;
    info: LogFn;
    highlight: LogFn;
    muted: LogFn;
    special: LogFn;

    custom(message: string, color: string): void;
    customBg(message: string, color: string): void;
}

export const log: PuppyLog;

export default log;
