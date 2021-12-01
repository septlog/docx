import fs from 'fs';
import { Document, Packer, Paragraph, TextRun } from '../build';

const doc = new Document({
  sections: [
    {
      children: [
        new Paragraph({
          children: [new TextRun('Hello World')],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('C:/Users/septlog/Documents/__2007/Demo.docx', buffer);
});
