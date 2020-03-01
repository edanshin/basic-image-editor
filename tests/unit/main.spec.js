import ARimage from '@/utils/arimage.js'

describe('ARimage', () => {
  const imageData = [24,248,185,97,78,212,150,44,104,33,203,94,52,164,124,60];
  const brightness = 50;
  const contrast = -50;

  it('changes brightness and keeps contrast', () => {
    // apply contrast adjustment over brightness adjustment
    ARimage.ModifyBrightness(imageData, parseInt(brightness, 10));
    ARimage.ModifyContrast(imageData, parseInt(contrast, 10));

    expect(imageData).toMatch([])
  }),

  it('changes contrast and keeps brightness', () => {
    // apply contrast adjustment over brightness adjustment
    ARimage.ModifyBrightness(imageData, parseInt(brightness, 10));
    ARimage.ModifyContrast(imageData, parseInt(contrast, 10));

    expect(imageData).toMatch([])
  })
})
