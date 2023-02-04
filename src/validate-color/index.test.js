import validateColor, {
  validateHTMLColor,
  validateHTMLColorHex,
  validateHTMLColorHsl,
  validateHTMLColorName,
  validateHTMLColorRgb,
  validateHTMLColorSpecialName,
  validateHTMLColorHwb,
  validateHTMLColorLab,
  validateHTMLColorLch,
} from "./index";

// -- Color HEX
const validateHTMLColorHexInvalid = [
  "#ff00f",
  "#ff00ff0",
  "rgb(-100, -10 0 )",
  "rgb(-100 -10 0 , , ,)",
  "hsl(100%, 100%, 100%, 1009)",
  "rgb(0,0,0,1.2)",
  "rgb(0,   0  ,  0 ,   1.2)",
  "rgba(0,0,0, 1.2)",
  "hsl(-100, -10 0 )",
  "hsl(-100 -10 0 , , ,)",
  "hsl(100%, 100%, 100%, 1009)",
  "hsl(0,0,0,1.2)",
  "hsl(0,   0  ,  0 ,   1.2)",
  "hsla(0,0,0, 1.2)",
];
const validateHTMLColorHexValid = [
  "#aacc",
  "#acdc",
  "#ff0",
  "#ff00",
  "#ff00ff",
  "#ff00ff00",
  "#fea100",
  "#f98e1f",
  "#e46119",
  "#fc3769",
  "#9e4784",
  "#89326f",
  "#4d1e40",
  "#5694f1",
  "#78b600",
  "#568300",
  "#f2f2ea",
  "#e8e6da",
  "#807067",
  "#6b5b54",
  "#352f2b",
  "#4c3000",
  "#336699",
  "#369",
  "#336699FF",
  "#369F",
];
// -- Color name
const validateHTMLColorNameInvalid = [
  "badass",
  "mistyMountain",
  "blueindigo",
  "deeppurple",
  "babyblue",
  "militarygreen",
];
const validateHTMLColorNameValid = [
  "DarkOrange",
  "mistyrose",
  "PowderBlue",
  "Cornsilk",
  "red",
  "skyblue",
  "DarkGray",
  "DarkGrey",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DimGray",
  "DimGrey",
  "Gray",
  "Grey",
  "LightGray",
  "LightGrey",
  "LightSlateGray",
  "LightSlateGrey",
  "SlateGray",
  "SlateGrey",
];
// -- Color special name
const validateHTMLColorSpecialNameValid = [
  "currentColor",
  "inherit",
  "transparent",
];
// -- Color RGB
const validateHTMLColorRgbInvalid = [
  "rgb(-100, -10, 0 )",
  "rgb(-100 -10 0 , , ,)",
  "rgb(-100, -10 0 )",
  "rgb(0,   0  ,  0 ,   1.2)",
  "rgb(0, 0, 0)foo",
  "rgb(0,0,0,1.2)",
  "rgba(0, 0, 0,  1)foo",
  "rgba(0,0,0, 1.2)",
  // Valid, in practice, but we're invalidating this as a way to avoid 'ReDoS' exploitation
  "rgb(0,       0  , 0                          )",
];
const validateHTMLColorRgbValidRgb = [
  "rgb(0, 255, 255)",
  "rgb(0, 255, 255, 1)",
  "rgb(0, 255, 255, 100%)",
  "rgb(0%, 100%, 100%)",
  "rgb(0%, 100%, 100%, 1)",
  "rgb(0%, 100%, 100%, 100%)",
  "rgb(0 255 255)",
  "rgb(0 255 255 / 1)",
  "rgb(0 255 255 / 100%)",
  "rgb(0% 100% 100%)",
  "rgb(0% 100% 100% / 1)",
  "rgb(0% 100% 100% / 0.8)",
  "rgb(0% 100% 100% / .8)",
  "rgb(0% 100% 100% / 100%)",
  "rgb(0,0,0)",
  "rgb(0, 0, 0, .8888)",
  // former tests
  "rgb(0, 0, 0)",
  "rgb(  0, 0, 0 )",
  "rgb(100%, 100%, 100%)",
  "rgb(0,0,0, 0.4)",
  "rgb(0,0,0, 0.499)",
];
const validateHTMLColorRgbValidRgba = [
  "rgba(0, 255, 255)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 255, 255, 100%)",
  "rgba(0%, 100%, 100%)",
  "rgba(0%, 100%, 100%, 1)",
  "rgba(0%, 100%, 100%, 100%)",
  "rgba(0 255 255)",
  "rgba(0 255 255 / 1)",
  "rgba(0 255 255 / 100%)",
  "rgba(0% 100% 100%)",
  "rgba(0% 100% 100% / 1)",
  "rgba(0% 100% 100% / 0.8)",
  "rgba(0% 100% 100% / .8)",
  "rgba(0% 100% 100% / 100%)",
  "rgb(0,0,0,0)",
  "rgb(0, 0, 0, .8888)",
  // former tests
  "rgba(0, 0, 0,  1)",
  "rgba(0, 0, 0,  .45)",
  "rgba(0, 0, 0,  .4)",
  "rgba(100%, 100%, 100%, 1)",
  "rgba(100,100,100,0)",
];
// -- Color HSL
const validateHTMLColorHslInvalid = [
  "hsl(-100 -10 0 , , ,)",
  "hsl(-100, -10 0 )",
  "hsl(-100, -10, 0 )",
  "hsl(0,   0  ,  0 ,   1.2)",
  "hsl(0, 0, 0)foo",
  "hsl(0,0,0,1.2)",
  "hsl(1, 60%, 70)",
  "hsl(100%, 100%, 100%, 1009)",
  "hsl(180deg100%50%)",
  "hsl(100%100%100%)",
  "hsl(100%, 100%, 100%)",
  "hsl(100%, 0, 0)",
  "hsl(100% 0 0)",
  "hsla(0, 0, 0,  1)foo",
  "hsla(0,0,0, 1.2)",
  "hsla(100%, 100%, 100%, 1)",
  "hsl(12, 12%, 120)", // as pointed out by @slashwhatever
  // odd units
  "hsl(361deg, 60%, 70%)",
  "hsl(401grad, 60%, 70%)",
  "hsl(1209grad, 60%, 70%)",
  "hsl(6.29rad, 60%, 70%)",
  "hsl(7rad, 60%, 70%)",
  "hsl(1.1turn, 60%, 70%)",
  // Valid, in practice, but we're invalidating this as a way to avoid 'ReDoS' exploitation
  "hsl(0,       0  , 0                          )",
];
const validateHTMLColorHslValidHsl = [
  "hsl(1, 60%, 70%)",
  "hsl(180, 100%, 50%)",
  "hsl(180, 100%, 50%, 1)",
  "hsl(180, 100%, 50%, 100%)",
  "hsl(180deg, 100%, 50%)",
  "hsl(180deg, 100%, 50%, 1)",
  "hsl(180deg, 100%, 50%, 100%)",
  "hsl(180 100% 50%)",
  "hsl(180 100% 50% / 1)",
  "hsl(180 100% 50% / 100%)",
  "hsl(180 100% 50% / 100%)",
  "hsl(180deg 100% 50%)",
  "hsl(180deg 100% 50% / 1)",
  "hsl(180deg 100% 50% / 0.8)",
  "hsl(180deg 100% 50% / .8)",
  "hsl(180deg 100% 50% / 100%)",
  "hsl(0 0 0)",
  // former tests
  "hsl(0, 0, 0)",
  "hsl(  0, 0, 0 )",
  "hsl(0,0,0, 0.4)",
  "hsl(0,0,0, 0.499)",
  // lavender variations (same color)
  "hsl(270,60%,70%)",
  "hsl(270, 60%, 70%)",
  "hsl(270 60% 70%)",
  "hsl(270deg, 60%, 70%)",
  "hsl(4.71239rad, 60%, 70%)",
  "hsl(.75turn, 60%, 70%)",
  // lavender with opacity
  "hsl(270, 60%, 50%, .15)",
  "hsl(270, 60%, 50%, 15%)",
  "hsl(270 60% 50% / .15)",
  "hsl(270 60% 50% / 15%)",
  // odd units
  "hsl(0deg, 60%, 70%)",
  "hsl(1deg, 60%, 70%)",
  "hsl(360deg, 60%, 70%)",
  "hsl(0grad, 60%, 70%)",
  "hsl(3grad, 60%, 70%)",
  "hsl(120grad, 60%, 70%)",
  "hsl(400grad, 60%, 70%)",
  "hsl(0rad, 60%, 70%)",
  "hsl(3rad, 60%, 70%)",
  "hsl(5.29rad, 60%, 70%)",
  "hsl(6.28rad, 60%, 70%)",
  "hsl(.2turn, 60%, 70%)",
  "hsl(.37turn, 60%, 70%)",
  "hsl(.0turn, 60%, 70%)",
  "hsl(0.0turn, 60%, 70%)",
  "hsl(0.48turn, 60%, 70%)",
  "hsl(1turn, 60%, 70%)",
];
const validateHTMLColorHslValidHsla = [
  "hsla(180, 100%, 50%)",
  "hsla(180, 100%, 50%, 1)",
  "hsla(180, 100%, 50%, 100%)",
  "hsla(180deg, 100%, 50%)",
  "hsla(180deg, 100%, 50%, 1)",
  "hsla(180deg, 100%, 50%, 100%)",
  "hsla(180 100% 50%)",
  "hsla(180 100% 50% / 1)",
  "hsla(180 100% 50% / 100%)",
  "hsla(180 100% 50% / 100%)",
  "hsla(180deg 100% 50%)",
  "hsla(180deg 100% 50%)",
  "hsla(180deg 100% 50% / 1)",
  "hsla(180deg 100% 50% / 0.8)",
  "hsla(180deg 100% 50% / .8)",
  "hsla(180deg 100% 50% / 100%)",
  // former tests
  "hsla(0, 0, 0,  1)",
  "hsla(0, 0, 0,  .45)",
  "hsla(0, 0, 0,  .4)",
];
// -- Color HWB
const validateHTMLColorHwbInvalid = [
  'hwb(180 0% 0% / 100)',
  'hwb(180 0%0% / 100%)',
  'hwb(180 0% 0%/100%)',
  'hwb( 180 deg     0%   0%   /       100%   )',
  // Valid, in practice, but we're invalidating this as a way to avoid 'ReDoS' exploitation
  'hwb( 180      0%   0%   /       100%   )',
];
const validateHTMLColorHwbValid = [
  'hwb(180 60% 80%)',
  'hwb(180 0 0)',
  'hwb(180 0% 0%)',
  'hwb(180 0% 0% / 1)',
  'hwb(180 0% 0% / .1)',
  'hwb(180 0% 0% / 0.1)',
  'hwb(180 0% 0% / 1%)',
  'hwb(180 0% 0% / 100%)',
  'hwb(180deg 0% 0%)',
  'hwb(180deg 0% 0% / 1)',
  'hwb(180deg 0% 0% / 100%)',
];
// -- Color LAB
const validateHTMLColorLabInvalid = [
  'lab(67.5345%, 0, 0)',
  'lab(67.5345% -10 -161)',
  'lab(67.5345% -10 -161 / 1)',
  'lab(67.5345% -10 -161 / 100%)',
  'lab(67.5345% -10 -160 / 101%)',
  // Valid, in practice, but we're invalidating this as a way to avoid 'ReDoS' exploitation
  'lab(67.5345% -8.6911 -159.131231)',
  'lab(67.5345% -8.6911 -159.131231 / .987189732)',
];
const validateHTMLColorLabValid = [
  'lab(67.5345% -8.6911 -41.6019)',
  'lab(67.5345% -8.6911 -41.6019 / 1)',
  'lab(67.5345% -8.6911 -41.6019 / 100%)',
  'lab(67.5345% 13 160)',
  'lab(67.5345% 0 0)',
  'lab(0.5345% 0 0)',
  'lab(0% 0 0)',
  'lab(67.5345% -8.6911 -159.13123)',
  'lab(67.5345% -8.6911 -159.13123 / .98718)',
  'lab(1337% 0 0)',
  'lab(2000% 0 0)',
  'lab(1337% -8.6911 -41.6019 / 100%)',
  'lab(2000.1337% -8.6911 -41.6019 / 100%)',
];
// -- Color LCH
const validateHTMLColorLchInvalid = [
  'lch(180 0% 0% / 100)',
  'lch(180 0%0% / 100%)',
  'lch(180 0% 0%/100%)',
  'lch( 180 deg     0%   0%   /       100%   )',
  'lch(48% 81 360.00001deg)', // Too many degrees
  'lch(48% 81 361deg)', // Too many degrees
  'lch(48% 81 361)', // Too many degrees
  'lch(1 1 360deg / 1.001)', // Too much alpha
];
const validateHTMLColorLchValid = [
  'lch(29.2345% 44.2 27)', // mdn web docs
  'lch(52.2345% 72.2 56.2)', // mdn web docs
  'lch(52.2345% 72.2 56.2 / .5)', // mdn web docs
  'lch(29.2345 44.2 27)',
  'lch(52.2345 72.2 56.2)',
  'lch(52.2345 72.2 56.2 / .5)',
  'lch(29.2345 44.2 27deg)',
  'lch(52.2345 72.2 56.2deg)',
  'lch(52.2345 72.2 56.2deg / .5)',
  'lch(50% 50 50)',
  'lch(54.292% 106.839 40.853)', // lea verou
  'lch(48% 81 350)', // lea verou
  'lch(54.292 106.839 40.853deg)',
  'lch(48 81 350deg)',
  'lch(1 1 360deg / .9998)',
  'lch(1 1 360deg / 1)',
  'lch(1 1 1deg / 1)',
  'lch(1 1 1 / 1)',
  'lch(0 0 0 / 0)',
  'lch(0.1 0.1 0.1 / 0.1)',
  'lch(0.1 0.1 0.1 / .1)',
  'lch(0.1 0.1 .1 / .1)',
  'lch(0.1 .1 .1 / .1)',
  'lch(.1 .1 .1 / .1)',
  'lch(.0 .0 .0 / .0)',
];
// -- Color - Would be valid if we were not limiting greedy (+) spaces and digits by 9
const validateHTMLColorReDoSInvalid = [
  'lab(67.5345% -8.6911 -159.131231 / .9871897322)',
  'hsl(0,                   0  , 0                          )',
]
// -- ALL colors, without 'name' or 'special name'
const validateHTMLColorInvalid = [
  ...new Set([
    ...validateHTMLColorNameInvalid,
    ...validateHTMLColorNameValid,
    ...validateHTMLColorSpecialNameValid,
    ...validateHTMLColorHexInvalid,
    ...validateHTMLColorRgbInvalid,
    ...validateHTMLColorHslInvalid,
    ...validateHTMLColorHwbInvalid,
    ...validateHTMLColorLabInvalid,
    ...validateHTMLColorLchInvalid,
    ...validateHTMLColorReDoSInvalid,
  ]),
];
const validateHTMLColorValid = [
  ...new Set([
    ...validateHTMLColorHexValid,
    ...validateHTMLColorRgbValidRgb,
    ...validateHTMLColorRgbValidRgba,
    ...validateHTMLColorHslValidHsl,
    ...validateHTMLColorHslValidHsla,
    ...validateHTMLColorHwbValid,
    ...validateHTMLColorLabValid,
    ...validateHTMLColorLchValid,
  ]),
];
// -- ALL colors
const validateColorInvalid = [
  ...new Set([
    ...validateHTMLColorNameInvalid,
    ...validateHTMLColorHexInvalid,
    ...validateHTMLColorRgbInvalid,
    ...validateHTMLColorHslInvalid,
    ...validateHTMLColorHwbInvalid,
    ...validateHTMLColorLabInvalid,
    ...validateHTMLColorLchInvalid,
    ...validateHTMLColorReDoSInvalid,
  ]),
];
const validateColorValid = [
  ...new Set([
    ...validateHTMLColorNameValid,
    ...validateHTMLColorSpecialNameValid,
    ...validateHTMLColorHexValid,
    ...validateHTMLColorRgbValidRgb,
    ...validateHTMLColorRgbValidRgba,
    ...validateHTMLColorHslValidHsl,
    ...validateHTMLColorHslValidHsla,
    ...validateHTMLColorHwbValid,
    ...validateHTMLColorLabValid,
    ...validateHTMLColorLchValid,
  ]),
];

// -- Color HEX
describe("validateHTMLColorHex", () => {
  describe("test invalid cases", () => {
    validateHTMLColorHexInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColorHex(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases", () => {
    validateHTMLColorHexValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorHex(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- Color name
describe("validateHTMLColorName", () => {
  describe("test invalid cases", () => {
    validateHTMLColorNameInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColorName(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases", () => {
    validateHTMLColorNameValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorName(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- Color special name
describe("validateHTMLColorSpecialName", () => {
  describe("only test the current 3 possible values", () => {
    validateHTMLColorSpecialNameValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorSpecialName(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- Color RGB
describe("validateHTMLColorRgb", () => {
  describe("test invalid cases", () => {
    validateHTMLColorRgbInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColorRgb(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases - rgb()", () => {
    validateHTMLColorRgbValidRgb.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorRgb(c);
        expect(validation).toBe(true);
      })
    );
  });
  describe("test valid cases - rgba()", () => {
    validateHTMLColorRgbValidRgba.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorRgb(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- Color HSL
describe("validateHTMLColorHsl", () => {
  describe("test invalid cases", () => {
    validateHTMLColorHslInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColorHsl(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases - hsl()", () => {
    validateHTMLColorHslValidHsl.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorHsl(c);
        expect(validation).toBe(true);
      })
    );
  });
  describe("test valid cases - hsla()", () => {
    validateHTMLColorHslValidHsla.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorHsl(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- Color HWB
describe("validateHTMLColorHwb", () => {
  describe("test invalid cases", () => {
    validateHTMLColorHwbInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColorHwb(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases", () => {
    validateHTMLColorHwbValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorHwb(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- Color LAB
describe("validateHTMLColorLab", () => {
  describe("test invalid cases", () => {
    validateHTMLColorLabInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColorLab(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases", () => {
    validateHTMLColorLabValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorLab(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- Color LCH
describe("validateHTMLColorLch", () => {
  describe("test invalid cases", () => {
    validateHTMLColorLchInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColorLch(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases", () => {
    validateHTMLColorLchValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColorLch(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- ALL colors, without 'name' or 'special name'
describe("validateHTMLColor", () => {
  describe("test invalid cases", () => {
    validateHTMLColorInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateHTMLColor(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases", () => {
    validateHTMLColorValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateHTMLColor(c);
        expect(validation).toBe(true);
      })
    );
  });
});
// -- ALL colors
describe("validateColor", () => {
  describe("test invalid cases", () => {
    validateColorInvalid.map((c) =>
      it(`invalidates "${c}"`, () => {
        const validation = validateColor(c);
        expect(validation).toBe(false);
      })
    );
  });
  describe("test valid cases", () => {
    validateColorValid.map((c) =>
      it(`validates "${c}"`, () => {
        const validation = validateColor(c);
        expect(validation).toBe(true);
      })
    );
  });
});
