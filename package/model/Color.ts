import { FileWritter } from '../utilities/FileWritter'

interface ColorPropery {
    'background-color'?: string | object
    'color'?: string | object
    'border-color'?: string | object
}

class ColorCSS {
    private colors: Record<string, ColorPropery> = {}

    AddColor(colorName: string, colorProperty: ColorPropery): void {
        this.colors[colorName] = {
            ...this.colors[colorName],
            ...colorProperty
        }
    }

    ColorGenerator(): string {
        let colorCSS = ''
        for (const [colorName, colorProperty] of Object.entries(this.colors)) {
            const colorProps = Object.entries(colorProperty)
            .map(([i, j]) => `${i}: ${j}`)
            .join('\n')
            colorCSS += `.${colorName} {\n${colorProps}\n}\n`
        }
        return colorCSS
    }
}

const ColorGen = new ColorCSS()

function RunColorWriter() {
    FileWritter('dist/color.css', ColorGen.ColorGenerator())
}

export { ColorGen, RunColorWriter }