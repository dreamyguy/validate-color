// Validate HTML color string (red, yellow, etc)
export const validateHTMLColorName = color => {
  let status = false;
  // Only do any of this if 'color' is a string
  if (typeof color === 'string') {
    const htmlColorNames = [
      'IndianRed',
      'LightCoral',
      'Salmon',
      'DarkSalmon',
      'LightSalmon',
      'Crimson',
      'Red',
      'FireBrick',
      'DarkRed',
      'Pink',
      'LightPink',
      'HotPink',
      'DeepPink',
      'MediumVioletRed',
      'PaleVioletRed',
      'LightSalmon',
      'Coral',
      'Tomato',
      'OrangeRed',
      'DarkOrange',
      'Orange',
      'Gold',
      'Yellow',
      'LightYellow',
      'LemonChiffon',
      'LightGoldenrodYellow',
      'PapayaWhip',
      'Moccasin',
      'PeachPuff',
      'PaleGoldenrod',
      'Khaki',
      'DarkKhaki',
      'Lavender',
      'Thistle',
      'Plum',
      'Violet',
      'Orchid',
      'Fuchsia',
      'Magenta',
      'MediumOrchid',
      'MediumPurple',
      'RebeccaPurple',
      'BlueViolet',
      'DarkViolet',
      'DarkOrchid',
      'DarkMagenta',
      'Purple',
      'Indigo',
      'SlateBlue',
      'DarkSlateBlue',
      'MediumSlateBlue',
      'GreenYellow',
      'Chartreuse',
      'LawnGreen',
      'Lime',
      'LimeGreen',
      'PaleGreen',
      'LightGreen',
      'MediumSpringGreen',
      'SpringGreen',
      'MediumSeaGreen',
      'SeaGreen',
      'ForestGreen',
      'Green',
      'DarkGreen',
      'YellowGreen',
      'OliveDrab',
      'Olive',
      'DarkOliveGreen',
      'MediumAquamarine',
      'DarkSeaGreen',
      'LightSeaGreen',
      'DarkCyan',
      'Teal',
      'Aqua',
      'Cyan',
      'LightCyan',
      'PaleTurquoise',
      'Aquamarine',
      'Turquoise',
      'MediumTurquoise',
      'DarkTurquoise',
      'CadetBlue',
      'SteelBlue',
      'LightSteelBlue',
      'PowderBlue',
      'LightBlue',
      'SkyBlue',
      'LightSkyBlue',
      'DeepSkyBlue',
      'DodgerBlue',
      'CornflowerBlue',
      'MediumSlateBlue',
      'RoyalBlue',
      'Blue',
      'MediumBlue',
      'DarkBlue',
      'Navy',
      'MidnightBlue',
      'Cornsilk',
      'BlanchedAlmond',
      'Bisque',
      'NavajoWhite',
      'Wheat',
      'BurlyWood',
      'Tan',
      'RosyBrown',
      'SandyBrown',
      'Goldenrod',
      'DarkGoldenrod',
      'Peru',
      'Chocolate',
      'SaddleBrown',
      'Sienna',
      'Brown',
      'Maroon',
      'White',
      'Snow',
      'HoneyDew',
      'MintCream',
      'Azure',
      'AliceBlue',
      'GhostWhite',
      'WhiteSmoke',
      'SeaShell',
      'Beige',
      'OldLace',
      'FloralWhite',
      'Ivory',
      'AntiqueWhite',
      'Linen',
      'LavenderBlush',
      'MistyRose',
      'Gainsboro',
      'LightGray',
      'Silver',
      'DarkGray',
      'Gray',
      'DimGray',
      'LightSlateGray',
      'SlateGray',
      'DarkSlateGray',
      'Black',
      'Transparent'
    ];
    htmlColorNames.map(c => {
      if (color.toLowerCase() === c.toLowerCase()) {
        status = true;
      }
      return null;
    })
  }
  return status;
};

// Validate HTML color as 'hex', 'rgb', 'rgba', 'hsl', 'hsla'
// source: https://www.regextester.com/103656
export const validateHTMLColor = color => {
  // Only do any of this if 'color' is a string
  if (typeof color === 'string') {
    const regex = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/i;
    return (
      color && regex.test(color)
        ? true
        : false
    )
  }
};

export const validateHTMLColorHex = color => {
  // Only do any of this if 'color' is a string
  if (typeof color === 'string') {
    const regex = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;
    return (
      color && regex.test(color)
        ? true
        : false
    )
  }
};

const validateColor = color => (
  color && (validateHTMLColorName(color) || validateHTMLColor(color))
    ? true
    : false
);

export default validateColor;
