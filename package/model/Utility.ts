import { FileWritter } from '../utilities/FileWritter'

interface UtilityProperties {
    [key: string]: string | number
}

class UtilityCSS {
    private utilStyles: Record<string, UtilityProperties> = {}

    AddUtility(s: string, p: UtilityProperties): void {
        this.utilStyles[s] = {...this.utilStyles[s], ...p}
    }

    UtilityGenerator(): string {
        let css = ''
        for (const [s, p] of Object.entries(this.utilStyles)) {
            const prop = Object.entries(p).map(([i, j]) => `${i}: ${j}`).join('\n')
            css += `${s} {\n${prop}\n}\n`
        }
        return css
    }
}

const UtilGen = new UtilityCSS()

function RunUtilityWritter() {
    FileWritter('dist/utilities.css', UtilGen.UtilityGenerator())
}

export {
    UtilGen,
    RunUtilityWritter
}