import fs from 'fs';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from '../build';

const doc = new Document({
  sections: [
    {
      children: [
        new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    text: 'Hello'
                                })
                            ]
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    text: 'World'
                                })
                            ]
                        })
                    ]
                })
            ],
            width: {
                type: WidthType.PERCENTAGE,
                size: 5000
            }
        })
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('C:/Users/septlog/Documents/__2007/Demo.docx', buffer);
});
