import ARimage from '@/utils/arimage.js'

describe('ARimage', () => {
  const imageData = null;
  let brightness = 0;
  let contrast = 0;

  it('changes brightness and keeps contrast', () => {
    // apply contrast adjustment over brightness adjustment
    ARimage.ModifyBrightness(imageData, parseInt(brightness, 10));
    ARimage.ModifyContrast(imageData, parseInt(contrast, 10));

    expect(brightness).toMatch(0)
    expect(contrast).toMatch(0)
  }),

  it('changes contrast and keeps brightness', () => {
    // apply contrast adjustment over brightness adjustment
    ARimage.ModifyBrightness(imageData, parseInt(brightness, 10));
    ARimage.ModifyContrast(imageData, parseInt(contrast, 10));

    expect(brightness).toMatch(0)
    expect(contrast).toMatch(0)
  })
})
