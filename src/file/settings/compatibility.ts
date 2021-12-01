import { OnOffElement, XmlComponent } from 'file/xml-components';

export class Compatibility extends XmlComponent {
  constructor() {
    super('w:compat');

    this.root.push(new OnOffElement('w:spaceForUL', true));
    this.root.push(
      new OnOffElement('w:balanceSingleByteDoubleByteWidth', true),
    );
    this.root.push(new OnOffElement('w:doNotLeaveBackslashAlone', true));
    this.root.push(new OnOffElement('w:ulTrailSpace', true));
    this.root.push(new OnOffElement('w:doNotExpandShiftReturn', true));
    this.root.push(new OnOffElement('w:adjustLineHeightInTable', true));
    this.root.push(new OnOffElement('w:useFELayout', true));
  }
}
