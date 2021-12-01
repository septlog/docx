// Numbering and bullet points example
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from 'fs';
import { AlignmentType, convertInchesToTwip, Document, HeadingLevel, LevelFormat, Packer, Paragraph } from '../build';

const doc = new Document({
  numbering: {
    config: [
      {
        reference: 'my-crazy-numbering',
        levels: [
          {
            level: 0,
            format: LevelFormat.UPPER_ROMAN,
            text: '%1',
          },
          {
            level: 1,
            format: LevelFormat.DECIMAL,
            text: '%2.',
          },
        ],
      },
    ],
  },
  sections: [
    {
      children: [
        new Paragraph({
          text: 'Hey you',
          numbering: {
            reference: 'my-crazy-numbering',
            level: 0,
          },
        }),
        new Paragraph({
          text: "What's up fam",
          numbering: {
            reference: 'my-crazy-numbering',
            level: 1,
          },
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('C:/Users/septlog/Documents/__2007/Demo.docx', buffer);
});
