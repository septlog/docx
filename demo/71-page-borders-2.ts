// Example demonstrating page borders with style, colors and size
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Packer, TextRun, Paragraph, BorderStyle, PageBorderDisplay, PageBorderOffsetFrom, PageBorderZOrder } from "../build";

const doc = new Document({
    sections: [
        {
            properties: {
                page: {
                    borders: {
                        pageBorderBottom: {
                            style: BorderStyle.SINGLE,
                            size: 2 * 8, //2pt;
                            color: "000000",
                        },
                        pageBorderLeft: {
                            style: BorderStyle.SINGLE,
                            size: 1 * 8, //1pt;
                            color: "000000",
                        },
                        pageBorderRight: {
                            style: BorderStyle.SINGLE,
                            size: 1 * 8, //1pt;
                            color: "FF00AA",
                        },
                        pageBorderTop: {
                            style: BorderStyle.SINGLE,
                            size: 1 * 8, //1pt;
                            color: "000000",
                        },
                        pageBorders: {
                            display: PageBorderDisplay.ALL_PAGES,
                            offsetFrom: PageBorderOffsetFrom.TEXT,
                            zOrder: PageBorderZOrder.FRONT,
                        },
                    },
                },
            },
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                        }),
                    ],
                }),
            ],
        },
    ],
});

// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:/Users/septlog/Documents/__2007/Demo.docx", buffer);
});
