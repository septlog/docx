import { XmlAttributeComponent } from "file/xml-components";

export interface IDocumentAttributesProperties {
    readonly wpc?: string;
    readonly mc?: string;
    readonly o?: string;
    readonly r?: string;
    readonly m?: string;
    readonly v?: string;
    readonly wp14?: string;
    readonly wp?: string;
    readonly w10?: string;
    readonly w?: string;
    readonly w14?: string;
    readonly w15?: string;
    readonly wpg?: string;
    readonly wpi?: string;
    readonly wne?: string;
    readonly wps?: string;
    readonly Ignorable?: string;
    readonly cp?: string;
    readonly dc?: string;
    readonly dcterms?: string;
    readonly dcmitype?: string;
    readonly xsi?: string;
    readonly type?: string;
    readonly ve?:string;
}

export class DocumentAttributes extends XmlAttributeComponent<IDocumentAttributesProperties> {
    protected readonly xmlKeys = {
        wpc: "xmlns:wpc",
        mc: "xmlns:mc",
        o: "xmlns:o",
        r: "xmlns:r",
        m: "xmlns:m",
        v: "xmlns:v",
        wp14: "xmlns:wp14",
        wp: "xmlns:wp",
        w10: "xmlns:w10",
        w: "xmlns:w",
        w14: "xmlns:w14",
        w15: "xmlns:w15",
        wpg: "xmlns:wpg",
        wpi: "xmlns:wpi",
        wne: "xmlns:wne",
        wps: "xmlns:wps",
        Ignorable: "mc:Ignorable",
        cp: "xmlns:cp",
        dc: "xmlns:dc",
        dcterms: "xmlns:dcterms",
        dcmitype: "xmlns:dcmitype",
        xsi: "xmlns:xsi",
        type: "xsi:type",
        ve: "xmlns:ve",
    };
}
