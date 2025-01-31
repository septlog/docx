// Move + offset header and footer
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Footer, Header, Packer, PageBreak, Paragraph, TextRun } from "../build";

const doc = new Document({
    evenAndOddHeaderAndFooters: true,
    sections: [
        {
            headers: {
                default: new Header({
                    children: [
                        new Paragraph({
                            text: "Odd Header text",
                        }),
                        new Paragraph({
                            text: "Odd - Some more header text",
                        }),
                    ],
                }),
                even: new Header({
                    children: [
                        new Paragraph({
                            text: "Even header text",
                        }),
                        new Paragraph({
                            text: "Even - Some more header text",
                        }),
                    ],
                }),
            },
            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            text: "Odd Footer text",
                        }),
                    ],
                }),
                even: new Footer({
                    children: [
                        new Paragraph({
                            text: "Even Cool Footer text",
                        }),
                    ],
                }),
            },
            children: [
                new Paragraph({
                    children: [new TextRun("Hello World 1"), new PageBreak()],
                }),
                new Paragraph({
                    children: [new TextRun("Hello World 2"), new PageBreak()],
                }),
                new Paragraph({
                    children: [new TextRun("Hello World 3"), new PageBreak()],
                }),
                new Paragraph({
                    children: [new TextRun("Hello World 4"), new PageBreak()],
                }),
                new Paragraph({
                    children: [new TextRun("Hello World 5"), new PageBreak()],
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/septlog/Documents/__2007/Demo.docx", buffer);
});
