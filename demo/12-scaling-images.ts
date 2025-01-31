// Scaling images
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, ImageRun, Packer, Paragraph } from "../build";

const doc = new Document({
    sections: [
        {
            children: [
                new Paragraph("Hello World"),
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: fs.readFileSync("./demo/images/pizza.gif"),
                            transformation: {
                                width: 50,
                                height: 50,
                            },
                        }),
                    ],
                }),
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
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: fs.readFileSync("./demo/images/pizza.gif"),
                            transformation: {
                                width: 250,
                                height: 250,
                            },
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: fs.readFileSync("./demo/images/pizza.gif"),
                            transformation: {
                                width: 400,
                                height: 400,
                            },
                        }),
                    ],
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/septlog/Documents/__2007/Demo.docx", buffer);
});
