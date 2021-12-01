// http://officeopenxml.com/WPdocument.php
import { XmlComponent } from 'file/xml-components';
import { ConcreteHyperlink, Paragraph } from '../paragraph';
import { Table } from '../table';
import { TableOfContents } from '../table-of-contents';
import { Body } from './body';
import { DocumentAttributes } from './document-attributes';
import { DocumentBackground, IDocumentBackgroundOptions } from './document-background';

export interface IDocumentOptions {
  readonly background: IDocumentBackgroundOptions;
}

export class Document extends XmlComponent {
  private readonly body: Body;

  constructor(options: IDocumentOptions) {
    super('w:document');
    this.root.push(
      new DocumentAttributes({
        ve: 'http://schemas.openxmlformats.org/markup-compatibility/2006',
        o: 'urn:schemas-microsoft-com:office:office',
        r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        m: 'http://schemas.openxmlformats.org/officeDocument/2006/math',
        v: 'urn:schemas-microsoft-com:vml',
        wp: 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
        w10: 'urn:schemas-microsoft-com:office:word',
        w: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
        wne: 'http://schemas.microsoft.com/office/word/2006/wordml',
      }),
    );
    this.body = new Body();
    this.root.push(new DocumentBackground(options.background));
    this.root.push(this.body);
  }

  public add(item: Paragraph | Table | TableOfContents | ConcreteHyperlink): Document {
    this.body.push(item);
    return this;
  }

  public get Body(): Body {
    return this.body;
  }
}
