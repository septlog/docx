// Japanese text - Need to use a Japanese font
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, HeadingLevel, Packer, Paragraph } from "../build";

const doc = new Document({
    styles: {
        paragraphStyles: [
            {
                id: "Normal",
                name: "Normal",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    font: "MS Gothic",
                },
            },
        ],
    },
    sections: [
        {
            children: [
                new Paragraph({
                    text: "KFCを食べるのが好き",
                    heading: HeadingLevel.HEADING_1,
                }),
                new Paragraph({
                    text: "こんにちは",
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/septlog/Documents/__2007/Demo.docx", buffer);
});
