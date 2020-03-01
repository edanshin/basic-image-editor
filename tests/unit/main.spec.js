import ARimage from '@/utils/arimage.js'

function arrayMatch(arr1, arr2) {
  // if length is not equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  else {
  // compare each array element
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false;
    }
  }

  return true;
}

describe('ARimage', () => {
  const origImageData = [24,248,185,97,78,212,150,44,104,33,203,94,52,164,124,60];

  it('changes brightness and keeps contrast', () => {
    let imageData = origImageData;

    // apply contrast adjustment over brightness adjustment
    ARimage.ModifyBrightness(imageData, parseInt(35, 10));
    ARimage.ModifyContrast(imageData, parseInt(-35, 10));

    const expectedArray = [116.78944911297853,255,239.15546218487395,97,157.8314659197012,255,212.55415499533146,44,177.5924369747899,123.62978524743231,252.8361344537815,94,138.0704948646125,223.19467787114846,192.79318394024276,60];
    const match = arrayMatch(imageData, expectedArray);

    expect(match).toBe(true)
  }),

  it('changes contrast and keeps brightness', () => {
    let imageData = origImageData;

    // apply contrast adjustment over brightness adjustment
    ARimage.ModifyBrightness(imageData, parseInt(-35, 10));
    ARimage.ModifyContrast(imageData, parseInt(35, 10));

    const expectedArray = [0,177.63939950980392,156.80460897594332,97,49.867540357646305,177.63939950980392,121.8251940073415,44,75.85224862003624,4.894006826586846,174.79402238836713,94,23.88283209525639,135.81695999478222,95.84048574495156,60];
    const match = arrayMatch(imageData, expectedArray);

    expect(match).toBe(true)
  })
})
