import { expect } from 'chai';
import { Formatter } from 'export/formatter';

import { Compatibility } from './compatibility';

describe('Compatibility', () => {
  describe('#constructor', () => {
    it('creates an initially empty property object', () => {
      const compatibility = new Compatibility();

      const tree = new Formatter().format(compatibility);
      expect(tree).to.deep.equal({
        'w:compat': [
          {
            'w:spaceForUL': {},
          },
          {
            'w:balanceSingleByteDoubleByteWidth': {},
          },
          {
            'w:doNotLeaveBackslashAlone': {},
          },
          {
            'w:ulTrailSpace': {},
          },
          {
            'w:doNotExpandShiftReturn': {},
          },
          {
            'w:adjustLineHeightInTable': {},
          },
          {
            'w:useFELayout': {},
          },
        ],
      });
    });
  });
});
