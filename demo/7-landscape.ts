// Example of how to set the document to landscape
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Packer, PageOrientation, Paragraph } from "../build";

const doc = new Document({
    sections: [
        {
            properties: {
                page: {
                    size: {
                        orientation: PageOrientation.LANDSCAPE,
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
