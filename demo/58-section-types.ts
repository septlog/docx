// Usage of different Section Types
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun, SectionType } from "../build";

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Hello World"),
                        new TextRun({
                            text: "Foo Bar",
                            bold: true,
                        }),
                    ],
                }),
            ],
        },
        {
            properties: {
                type: SectionType.CONTINUOUS,
            },
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Hello World"),
                        new TextRun({
                            text: "Foo Bar",
                            bold: true,
                        }),
                    ],
                }),
            ],
        },
        {
            properties: {
                type: SectionType.ODD_PAGE,
            },
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Hello World"),
                        new TextRun({
                            text: "Foo Bar",
                            bold: true,
                        }),
                    ],
                }),
            ],
        },
        {
            properties: {
                type: SectionType.EVEN_PAGE,
            },
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Hello World"),
                        new TextRun({
                            text: "Foo Bar",
                            bold: true,
                        }),
                    ],
                }),
            ],
        },
        {
            properties: {
                type: SectionType.NEXT_PAGE,
            },
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Hello World"),
                        new TextRun({
                            text: "Foo Bar",
                            bold: true,
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
