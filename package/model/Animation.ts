// import { FileWritter } from "../utilities/FileWritter"

interface AnimationProperty {
    [key: string]: string | number
}

class AnimationCSS {
    private AnimationStyle: Record<string, AnimationProperty> = {}

    AddAnimation( s: string, p: AnimationProperty ): void {
        this.AnimationStyle[s] = {
            ...this.AnimationStyle[s], ...p
        }
    }

    AnimationGenerator(): string {
        let css = ''
        const animation = document.getElementById('ani-01')

        return css
    }
}

const AniGen = new AnimationCSS()

export { AniGen }

// for (const [s, p] of Object.entries(this.AnimationStyle)) {
//             const prop = Object.entries(p).map(([i, j]) => `${i}: ${j}`).join('\n')
//             css += `${s} {\n${prop}\n}\n`
//         }