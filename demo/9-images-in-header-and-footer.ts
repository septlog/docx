// Add images to header and footer
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Footer, Header, ImageRun, Packer, Paragraph } from "../build";

const doc = new Document({
    sections: [
        {
            headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync("./demo/images/pizza.gif"),
                                    transformation: {
                                        width: 100,
                                        height: 100,
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            },
            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync("./demo/images/pizza.gif"),
                                    transformation: {
                                        width: 100,
                                        height: 100,
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            },
            children: [new Paragraph("Hello World")],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/septlog/Documents/__2007/Demo.docx", buffer);
});
