import { FileWritter } from "../utilities/FileWritter"

interface FontProperty {
    'font-family': string
    'font-weight': string | number
    'src': string
    'font-style'?: string
}

class FontCSS {
    private fontStyles: Record<string, FontProperty> = {}

    AddFont(fontName: string, fontProperty: FontProperty): void {
        this.fontStyles[fontName] = {...this.fontStyles[fontName], ...fontProperty}
    }

    FontGenerator(): string {
        let fontCSS = ''
        for (const [fontName, fontProperty] of Object.entries(this.fontStyles)) {
            const fontProps = Object.entries(fontProperty).map(([i, j]) => `${i}: ${j}`).join('\n')
            fontCSS += `.${fontName} {\n${fontProps}\n}\n`
        }
        return fontCSS
    }
}

const FontGen = new FontCSS()

function RunFontWritter() {
    FileWritter('dist/fonts.css', FontGen.FontGenerator())
}

export {
    FontGen,
    RunFontWritter
}