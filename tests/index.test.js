import validateColor, {
  validateHTMLColorName,
  validateHTMLColor,
} from '../src/index';

describe('validateHTMLColorName', () => {
  describe('test invalid cases', () => {
    it('validates "badass"', () => {
      const color = 'badass';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(false);
    })
    it('validates "mistyMountain"', () => {
      const color = 'mistyMountain';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(false);
    })
    it('validates "blueindigo"', () => {
      const color = 'blueindigo';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(false);
    })
    it('validates "deeppurple"', () => {
      const color = 'deeppurple';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(false);
    })
    it('validates "babyblue"', () => {
      const color = 'babyblue';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(false);
    })
    it('validates "militarygreen"', () => {
      const color = 'militarygreen';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(false);
    })
  })
  describe('test valid cases', () => {
    it('validates "DarkOrange"', () => {
      const color = 'DarkOrange';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(true);
    })
    it('validates "mistyrose"', () => {
      const color = 'mistyrose';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(true);
    })
    it('validates "PowderBlue"', () => {
      const color = 'PowderBlue';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(true);
    })
    it('validates "Cornsilk"', () => {
      const color = 'Cornsilk';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(true);
    })
    it('validates "red"', () => {
      const color = 'red';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(true);
    })
    it('validates "skyblue"', () => {
      const color = 'skyblue';
      const validation = validateHTMLColorName(color);
      expect(validation).toBe(true);
    })
  })
})

describe('validateHTMLColor', () => {
  describe('test invalid cases', () => {
    it('validates "#ff00f"', () => {
      const color = '#ff00f';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "#ff00ff0"', () => {
      const color = '#ff00ff0';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(-100, -10 0 )"', () => {
      const color = 'rgb(-100, -10 0 )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(-100 -10 0 , , ,)"', () => {
      const color = 'rgb(-100 -10 0 , , ,)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(100%, 100%, 100%, 1009)"', () => {
      const color = 'hsl(100%, 100%, 100%, 1009)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(0,0,0,1.2)"', () => {
      const color = 'rgb(0,0,0,1.2)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(0,   0  ,  0 ,   1.2)"', () => {
      const color = 'rgb(0,   0  ,  0 ,   1.2)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgba(0,0,0, 1.2)"', () => {
      const color = 'rgba(0,0,0, 1.2)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(-100, -10 0 )"', () => {
      const color = 'hsl(-100, -10 0 )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(-100 -10 0 , , ,)"', () => {
      const color = 'hsl(-100 -10 0 , , ,)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(100%, 100%, 100%, 1009)"', () => {
      const color = 'hsl(100%, 100%, 100%, 1009)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(0,0,0,1.2)"', () => {
      const color = 'hsl(0,0,0,1.2)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(0,   0  ,  0 ,   1.2)"', () => {
      const color = 'hsl(0,   0  ,  0 ,   1.2)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsla(0,0,0, 1.2)"', () => {
      const color = 'hsla(0,0,0, 1.2)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(false);
    })
  })
  describe('test valid cases', () => {
    it('validates "#ff0"', () => {
      const color = '#ff0';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "#ff00"', () => {
      const color = '#ff00';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "#ff00ff"', () => {
      const color = '#ff00ff';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "#ff00ff00"', () => {
      const color = '#ff00ff00';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0, 0, 0)"', () => {
      const color = 'rgb(0, 0, 0)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(  0, 0, 0 )"', () => {
      const color = 'rgb(  0, 0, 0 )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(-100, -10, 0 )"', () => {
      const color = 'rgb(-100, -10, 0 )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(100%, 100%, 100%)"', () => {
      const color = 'rgb(100%, 100%, 100%)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0,0,0, 0.4)"', () => {
      const color = 'rgb(0,0,0, 0.4)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0,0,0, 0.499)"', () => {
      const color = 'rgb(0,0,0, 0.499)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0,       0  , 0                          )"', () => {
      const color = 'rgb(0,       0  , 0                          )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(0, 0, 0,  1)"', () => {
      const color = 'rgba(0, 0, 0,  1)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(0, 0, 0,  .45)"', () => {
      const color = 'rgba(0, 0, 0,  .45)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(0, 0, 0,  .4)"', () => {
      const color = 'rgba(0, 0, 0,  .4)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(100%, 100%, 100%, 1)"', () => {
      const color = 'rgba(100%, 100%, 100%, 1)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0, 0, 0)"', () => {
      const color = 'hsl(0, 0, 0)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(  0, 0, 0 )"', () => {
      const color = 'hsl(  0, 0, 0 )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(-100, -10, 0 )"', () => {
      const color = 'hsl(-100, -10, 0 )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(100%, 100%, 100%)"', () => {
      const color = 'hsl(100%, 100%, 100%)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0,0,0, 0.4)"', () => {
      const color = 'hsl(0,0,0, 0.4)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0,0,0, 0.499)"', () => {
      const color = 'hsl(0,0,0, 0.499)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0,       0  , 0                          )"', () => {
      const color = 'hsl(0,       0  , 0                          )';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(0, 0, 0,  1)"', () => {
      const color = 'hsla(0, 0, 0,  1)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(0, 0, 0,  .45)"', () => {
      const color = 'hsla(0, 0, 0,  .45)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(0, 0, 0,  .4)"', () => {
      const color = 'hsla(0, 0, 0,  .4)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(100%, 100%, 100%, 1)"', () => {
      const color = 'hsla(100%, 100%, 100%, 1)';
      const validation = validateHTMLColor(color);
      expect(validation).toBe(true);
    })
  })
})

// Test 'validateColor', which is a blend of both
//   'validateHTMLColorName' and 'validateHTMLColor'

describe('validateColor', () => {
  describe('test invalid cases', () => {
    it('validates "badass"', () => {
      const color = 'badass';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "mistyMountain"', () => {
      const color = 'mistyMountain';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "blueindigo"', () => {
      const color = 'blueindigo';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "deeppurple"', () => {
      const color = 'deeppurple';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "babyblue"', () => {
      const color = 'babyblue';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "militarygreen"', () => {
      const color = 'militarygreen';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "#ff00f"', () => {
      const color = '#ff00f';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "#ff00ff0"', () => {
      const color = '#ff00ff0';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(-100, -10 0 )"', () => {
      const color = 'rgb(-100, -10 0 )';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(-100 -10 0 , , ,)"', () => {
      const color = 'rgb(-100 -10 0 , , ,)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(100%, 100%, 100%, 1009)"', () => {
      const color = 'hsl(100%, 100%, 100%, 1009)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(0,0,0,1.2)"', () => {
      const color = 'rgb(0,0,0,1.2)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgb(0,   0  ,  0 ,   1.2)"', () => {
      const color = 'rgb(0,   0  ,  0 ,   1.2)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "rgba(0,0,0, 1.2)"', () => {
      const color = 'rgba(0,0,0, 1.2)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(-100, -10 0 )"', () => {
      const color = 'hsl(-100, -10 0 )';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(-100 -10 0 , , ,)"', () => {
      const color = 'hsl(-100 -10 0 , , ,)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(100%, 100%, 100%, 1009)"', () => {
      const color = 'hsl(100%, 100%, 100%, 1009)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(0,0,0,1.2)"', () => {
      const color = 'hsl(0,0,0,1.2)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsl(0,   0  ,  0 ,   1.2)"', () => {
      const color = 'hsl(0,   0  ,  0 ,   1.2)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
    it('validates "hsla(0,0,0, 1.2)"', () => {
      const color = 'hsla(0,0,0, 1.2)';
      const validation = validateColor(color);
      expect(validation).toBe(false);
    })
  })
  describe('test valid cases', () => {
    it('validates "DarkOrange"', () => {
      const color = 'DarkOrange';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "mistyrose"', () => {
      const color = 'mistyrose';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "PowderBlue"', () => {
      const color = 'PowderBlue';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "Cornsilk"', () => {
      const color = 'Cornsilk';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "red"', () => {
      const color = 'red';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "skyblue"', () => {
      const color = 'skyblue';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "#ff0"', () => {
      const color = '#ff0';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "#ff00"', () => {
      const color = '#ff00';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "#ff00ff"', () => {
      const color = '#ff00ff';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "#ff00ff00"', () => {
      const color = '#ff00ff00';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0, 0, 0)"', () => {
      const color = 'rgb(0, 0, 0)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(  0, 0, 0 )"', () => {
      const color = 'rgb(  0, 0, 0 )';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(-100, -10, 0 )"', () => {
      const color = 'rgb(-100, -10, 0 )';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(100%, 100%, 100%)"', () => {
      const color = 'rgb(100%, 100%, 100%)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0,0,0, 0.4)"', () => {
      const color = 'rgb(0,0,0, 0.4)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0,0,0, 0.499)"', () => {
      const color = 'rgb(0,0,0, 0.499)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgb(0,       0  , 0                          )"', () => {
      const color = 'rgb(0,       0  , 0                          )';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(0, 0, 0,  1)"', () => {
      const color = 'rgba(0, 0, 0,  1)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(0, 0, 0,  .45)"', () => {
      const color = 'rgba(0, 0, 0,  .45)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(0, 0, 0,  .4)"', () => {
      const color = 'rgba(0, 0, 0,  .4)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "rgba(100%, 100%, 100%, 1)"', () => {
      const color = 'rgba(100%, 100%, 100%, 1)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0, 0, 0)"', () => {
      const color = 'hsl(0, 0, 0)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(  0, 0, 0 )"', () => {
      const color = 'hsl(  0, 0, 0 )';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(-100, -10, 0 )"', () => {
      const color = 'hsl(-100, -10, 0 )';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(100%, 100%, 100%)"', () => {
      const color = 'hsl(100%, 100%, 100%)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0,0,0, 0.4)"', () => {
      const color = 'hsl(0,0,0, 0.4)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0,0,0, 0.499)"', () => {
      const color = 'hsl(0,0,0, 0.499)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsl(0,       0  , 0                          )"', () => {
      const color = 'hsl(0,       0  , 0                          )';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(0, 0, 0,  1)"', () => {
      const color = 'hsla(0, 0, 0,  1)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(0, 0, 0,  .45)"', () => {
      const color = 'hsla(0, 0, 0,  .45)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(0, 0, 0,  .4)"', () => {
      const color = 'hsla(0, 0, 0,  .4)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
    it('validates "hsla(100%, 100%, 100%, 1)"', () => {
      const color = 'hsla(100%, 100%, 100%, 1)';
      const validation = validateColor(color);
      expect(validation).toBe(true);
    })
  })
})
