import { expect } from 'chai';
import { ExternalNumberingFactory } from './external-numbering-factory';
describe('External numbering factory', () => {
  let externalNumbering;
  beforeEach(() => {
    externalNumbering = `
        <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:ve="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml">
    <w:abstractNum w:abstractNumId="0">
        <w:nsid w:val="05D7306F"/>
        <w:multiLevelType w:val="hybridMultilevel"/>
        <w:tmpl w:val="D6F06C32"/>
        <w:lvl w:ilvl="0" w:tplc="253CDE56">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:pStyle w:val="e805"/>
            <w:lvlText w:val="表%1"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="420" w:hanging="420"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
                <w:sz w:val="24"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="1" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%2)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="840"/>
                </w:tabs>
                <w:ind w:left="840" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="2" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%3."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="1260"/>
                </w:tabs>
                <w:ind w:left="1260" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="3" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%4."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="1680"/>
                </w:tabs>
                <w:ind w:left="1680" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="4" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%5)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="2100"/>
                </w:tabs>
                <w:ind w:left="2100" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="5" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%6."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="2520"/>
                </w:tabs>
                <w:ind w:left="2520" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="6" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%7."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="2940"/>
                </w:tabs>
                <w:ind w:left="2940" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="7" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%8)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="3360"/>
                </w:tabs>
                <w:ind w:left="3360" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="8" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%9."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="3780"/>
                </w:tabs>
                <w:ind w:left="3780" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
    </w:abstractNum>
    <w:abstractNum w:abstractNumId="1">
        <w:nsid w:val="3FD05873"/>
        <w:multiLevelType w:val="hybridMultilevel"/>
        <w:tmpl w:val="A3EAC8CE"/>
        <w:lvl w:ilvl="0" w:tplc="30686EEA">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:pStyle w:val="f805"/>
            <w:lvlText w:val="图%1"/>
            <w:lvlJc w:val="center"/>
            <w:pPr>
                <w:ind w:left="420" w:hanging="420"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="1" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%2)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="552"/>
                </w:tabs>
                <w:ind w:left="552" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="2" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%3."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="972"/>
                </w:tabs>
                <w:ind w:left="972" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="3" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%4."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="1392"/>
                </w:tabs>
                <w:ind w:left="1392" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="4" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%5)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="1812"/>
                </w:tabs>
                <w:ind w:left="1812" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="5" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%6."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="2232"/>
                </w:tabs>
                <w:ind w:left="2232" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="6" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%7."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="2652"/>
                </w:tabs>
                <w:ind w:left="2652" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="7" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%8)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="3072"/>
                </w:tabs>
                <w:ind w:left="3072" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="8" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%9."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:tabs>
                    <w:tab w:val="num" w:pos="3492"/>
                </w:tabs>
                <w:ind w:left="3492" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
    </w:abstractNum>
    <w:abstractNum w:abstractNumId="2">
        <w:nsid w:val="4EC22E85"/>
        <w:multiLevelType w:val="multilevel"/>
        <w:tmpl w:val="09649468"/>
        <w:lvl w:ilvl="0">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:pStyle w:val="1"/>
            <w:suff w:val="space"/>
            <w:lvlText w:val="%1"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="0" w:firstLine="0"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:pStyle w:val="2"/>
            <w:suff w:val="space"/>
            <w:lvlText w:val="%1.%2"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="0" w:firstLine="0"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="2">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:pStyle w:val="3"/>
            <w:suff w:val="space"/>
            <w:lvlText w:val="%1.%2.%3"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="0" w:firstLine="0"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="3">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:pStyle w:val="a"/>
            <w:suff w:val="space"/>
            <w:lvlText w:val="%1.%2.%3.%4"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="0" w:firstLine="0"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="4">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%5)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="2100" w:hanging="420"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="5">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%6."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="2520" w:hanging="420"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="6">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%7."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="2940" w:hanging="420"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="7">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%8)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="3360" w:hanging="420"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
        <w:lvl w:ilvl="8">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%9."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="3780" w:hanging="420"/>
            </w:pPr>
            <w:rPr>
                <w:rFonts w:hint="eastAsia"/>
            </w:rPr>
        </w:lvl>
    </w:abstractNum>
    <w:abstractNum w:abstractNumId="3">
        <w:nsid w:val="66C13BC8"/>
        <w:multiLevelType w:val="hybridMultilevel"/>
        <w:tmpl w:val="3AE4BD5A"/>
        <w:lvl w:ilvl="0" w:tplc="0409000F">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%1."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="420" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="1" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%2)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="840" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="2" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%3."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="1260" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="3" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%4."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="1680" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="4" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%5)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="2100" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="5" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%6."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="2520" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="6" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%7."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="2940" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="7" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%8)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="3360" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="8" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%9."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="3780" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
    </w:abstractNum>
    <w:abstractNum w:abstractNumId="4">
        <w:nsid w:val="6838014B"/>
        <w:multiLevelType w:val="hybridMultilevel"/>
        <w:tmpl w:val="AAFAC24C"/>
        <w:lvl w:ilvl="0" w:tplc="0409000F">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%1."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="420" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="1" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%2)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="840" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="2" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%3."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="1260" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="3" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%4."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="1680" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="4" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%5)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="2100" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="5" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%6."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="2520" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="6" w:tplc="0409000F" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="decimal"/>
            <w:lvlText w:val="%7."/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="2940" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="7" w:tplc="04090019" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerLetter"/>
            <w:lvlText w:val="%8)"/>
            <w:lvlJc w:val="left"/>
            <w:pPr>
                <w:ind w:left="3360" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
        <w:lvl w:ilvl="8" w:tplc="0409001B" w:tentative="1">
            <w:start w:val="1"/>
            <w:numFmt w:val="lowerRoman"/>
            <w:lvlText w:val="%9."/>
            <w:lvlJc w:val="right"/>
            <w:pPr>
                <w:ind w:left="3780" w:hanging="420"/>
            </w:pPr>
        </w:lvl>
    </w:abstractNum>
    <w:num w:numId="1">
        <w:abstractNumId w:val="0"/>
    </w:num>
    <w:num w:numId="2">
        <w:abstractNumId w:val="1"/>
    </w:num>
    <w:num w:numId="3">
        <w:abstractNumId w:val="2"/>
    </w:num>
    <w:num w:numId="4">
        <w:abstractNumId w:val="4"/>
    </w:num>
    <w:num w:numId="5">
        <w:abstractNumId w:val="3"/>
    </w:num>
</w:numbering>
        
        `;
  });
  describe('#parse', () => {
    it('should parse', () => {
      const importNumbering = new ExternalNumberingFactory().newInstance(externalNumbering);
    });
  });
});
