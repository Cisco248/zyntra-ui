import {
    ColorGen,
    RunColorWriter
} from './model/Color';

import {
    UtilGen,
    RunUtilityWritter
} from './model/Utility';

import {
    FontGen,
    RunFontWritter
} from './model/Font';

// import { AniGen } from './model/Animation'

import {
    utilityObject,
    directionObject,
    displayObject,
    positionObject,
    cursorObject,
    visibilityObject,
    alignObject,
    justifyObject,
    borderObject,
    borderPositionObject
} from './objects/utilityObject';

import { FontObject } from './objects/fontObject';

import {
    TitleName,
    ColorVariable
} from './objects/colorObject';

for (let i = 4; i < 2004; i+=4) {
    for (const [key, value] of Object.entries(utilityObject)) {
        UtilGen.AddUtility(`.${key}-${i}`, {
            [`${value}`]: `${i}px`
    })
    }
}

for (let i = 4; i < 104; i+=4) {
    for (const [key, value] of Object.entries(directionObject)) {
        UtilGen.AddUtility(`.m${key}-${i}`, {
            [`margin-${value}`]: `${i}px`
        })
    }
}

for (let i = 4; i < 104; i+=4) {
    for (const [key, value] of Object.entries(directionObject)) {
        UtilGen.AddUtility(`.p${key}-${i}`, {
            [`padding-${value}`]: `${i}px`
        })
    }
}

for (const ob of displayObject) {
    UtilGen.AddUtility(`.${ob}`, {
        'display': ob
    })
}

for (const ob of positionObject) {
    UtilGen.AddUtility(`.${ob}`, {
        'position': ob
    })
}

for (const ob of cursorObject) {
    UtilGen.AddUtility(`.${ob}`, {
        'cursor': ob
    })
}

for (const ob of visibilityObject) {
    UtilGen.AddUtility(`.${ob}`, {
        'visibility': ob
    })
}

for (const i of alignObject) {
    UtilGen.AddUtility(`.items-${i}`, {
        'align-items': i
    })
}

for (const j of justifyObject) {
    UtilGen.AddUtility(`.justify-${j}`, {
        'justify-content': j
    })
}

for ( let i = 16; i < 2048; i*=2 ) {
    UtilGen.AddUtility(`.i-${i}`, {
        'width': `${i};`,
        'height': `${i};`
    })
}

for ( let i = 0; i < 10; i++ ) {
    UtilGen.AddUtility(`.z-${i}`, {
        'z-index': `${i};`
    })
}

for ( let i = 0; i < 250; i++ ) {
    UtilGen.AddUtility(`.br-${i}`, {
        'border-radius': `${i};`
    })
}

for (let n = 1; n <= 10; n++) {
    for (const k of borderObject) {
        UtilGen.AddUtility(`.border-${k}-${n}`, {
            'border-width': `${n}px;`,
            'border-style': k
        })
    }
}

for (const l of borderPositionObject) {
    for (let m=1; m<=10; m++) {
        UtilGen.AddUtility(`.border-${l}`, {
        [`border-${l}`]: `${m}px`
        })
    }
}

RunUtilityWritter()

for (const [o, q] of Object.entries(FontObject)) {
    for (let p = 100; p <= 900; p += 100) {
        FontGen.AddFont(`${o}-${p}`, {
            'font-family': `"${o}", sans-serif;`,
            "font-weight": `${p};`,
            'src': `url(${q});`
        })
    }
}

RunFontWritter()

for (const [s,t] of Object.entries(TitleName)) {
    for (const [n, m] of Object.entries(ColorVariable)) {
        m.forEach((shade: { s: string }) => {
            const [k, v] = Object.entries(shade)[0]
            ColorGen.AddColor(`${s}-${n}-${k}`, {
                [`${t}`]: `${v}`
            })
        }
    )}
}

RunColorWriter()

