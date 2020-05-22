import validateColor, {
  validateHTMLColor,
  validateHTMLColorHex,
  validateHTMLColorHsl,
  validateHTMLColorName,
  validateHTMLColorRgb,
  validateHTMLColorSpecialName,
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
  // former tests
  "rgb(0, 0, 0)",
  "rgb(  0, 0, 0 )",
  "rgb(100%, 100%, 100%)",
  "rgb(0,0,0, 0.4)",
  "rgb(0,0,0, 0.499)",
  "rgb(0,       0  , 0                          )",
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
  "hsl(100%, 100%, 100%)",
  "hsl(100%, 100%, 100%, 1009)",
  "hsl(12, 12%, 120)", // as pointed out by @slashwhatever
  "hsla(0, 0, 0,  1)foo",
  "hsla(0,0,0, 1.2)",
  "hsla(100%, 100%, 100%, 1)",
  // odd units
  "hsl(361deg, 60%, 70%)",
  "hsl(401gra, 60%, 70%)",
  "hsl(1209gra, 60%, 70%)",
  "hsl(6.29rad, 60%, 70%)",
  "hsl(7rad, 60%, 70%)",
  "hsl(1.1turn, 60%, 70%)",
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
  "hsl(180deg 100% 50%)",
  "hsl(180deg 100% 50% / 1)",
  "hsl(180deg 100% 50% / 0.8)",
  "hsl(180deg 100% 50% / .8)",
  "hsl(180deg 100% 50% / 100%)",
  // former tests
  "hsl(0, 0, 0)",
  "hsl(  0, 0, 0 )",
  "hsl(0,0,0, 0.4)",
  "hsl(0,0,0, 0.499)",
  "hsl(0,       0  , 0                          )",
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
  "hsl(0gra, 60%, 70%)",
  "hsl(3gra, 60%, 70%)",
  "hsl(120gra, 60%, 70%)",
  "hsl(400gra, 60%, 70%)",
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
// -- ALL colors, without 'name' or 'special name'
const validateHTMLColorInvalid = [
  ...new Set([
    ...validateHTMLColorNameInvalid,
    ...validateHTMLColorNameValid,
    ...validateHTMLColorSpecialNameValid,
    ...validateHTMLColorHexInvalid,
    ...validateHTMLColorRgbInvalid,
    ...validateHTMLColorHslInvalid,
  ]),
];
const validateHTMLColorValid = [
  ...new Set([
    ...validateHTMLColorHexValid,
    ...validateHTMLColorRgbValidRgb,
    ...validateHTMLColorRgbValidRgba,
    ...validateHTMLColorHslValidHsl,
    ...validateHTMLColorHslValidHsla,
  ]),
];
// -- ALL colors
const validateColorInvalid = [
  ...new Set([
    ...validateHTMLColorNameInvalid,
    ...validateHTMLColorHexInvalid,
    ...validateHTMLColorRgbInvalid,
    ...validateHTMLColorHslInvalid,
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
