export const colorPairs = {
    beigeGreen: {
        bg: "#e2bfa2",
        text: "#55775a",
    },
    creamBlue: {
        bg: "#f4e1c1",
        text: "#2f3e46",
    },
    ivoryForest: {
        bg: "#faf3dd",
        text: "#2d4739",
    },
    sageBrown: {
        bg: "#cce3de",
        text: "#3b2f2f",
    },
    terracottaDark: {
        bg: "#e07a5f",
        text: "#1e1e24",
    },
    navyGold: {
        bg: "#264653",
        text: "#f4a261",
    },
    charcoalMint: {
        bg: "#2a2a2a",
        text: "#a8dadc",
    },
    wineIvory: {
        bg: "#7d2e68",
        text: "#f5f3e7",
    },
    steelYellow: {
        bg: "#3a506b",
        text: "#f4d35e",
    },
    oliveSand: {
        bg: "#708d81",
        text: "#f9f7f3",
    },
} as const;

export type ColorPairKey = keyof typeof colorPairs;