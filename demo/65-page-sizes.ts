// Example of how to set the document page sizes
// Reference from https://papersizes.io/a/a3
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { convertMillimetersToTwip, Document, Packer, PageOrientation, Paragraph } from "../build";

const doc = new Document({
    sections: [
        {
            properties: {
                page: {
                    size: {
                        orientation: PageOrientation.LANDSCAPE,
                        height: convertMillimetersToTwip(210),
                        width: convertMillimetersToTwip(148),
                    },
                },
            },
            children: [new Paragraph("Hello World")],
        },
        {
            properties: {
                page: {
                    size: {
                        orientation: PageOrientation.PORTRAIT,
                        height: convertMillimetersToTwip(420),
                        width: convertMillimetersToTwip(297),
                    },
                },
            },
            children: [new Paragraph("Hello World")],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/septlog/Documents/__2007/Demo.docx", buffer);
});
