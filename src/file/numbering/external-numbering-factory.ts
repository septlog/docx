import { xml2js, Element as XMLElement } from 'xml-js';
import { Numbering } from './';

export class ExternalNumberingFactory {
  public newInstance(xmlData: string): Numbering {
    let config = [];
    let numbering = new Numbering({ config: [] });
    const xmlObj = xml2js(xmlData, { compact: false }) as XMLElement;
    let numberingXmlElement: XMLElement | undefined;
    for (const xmlElm of xmlObj.elements || []) {
      if (xmlElm.name === 'w:numbering') {
        numberingXmlElement = xmlElm;
      }
    }
    if (numberingXmlElement === undefined) {
      throw new Error('can not find numbering element');
    }

    for (let element of numberingXmlElement.elements || []) {
      if (element.name === 'w:abstractNum') {
      } else if (element.name === 'w:num') {
      }
    }
    return numbering;
  }
}
