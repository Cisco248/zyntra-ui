const utilityObject: Object = {
    'w': 'width',
    'h': 'height',
    't': 'top',
    'b': 'bottom',
    'l': 'left',
    'r': 'right',
    'm': 'margin',
    'p': 'padding'
}

const directionObject: Object = {
    't': 'top',
    'b': 'bottom',
    'l': 'left',
    'r': 'right'
}

const displayObject: Array<string> = [
    'block',
    'contents',
    'flex',
    'flexbox',
    'flow-root',
    'grid',
    'inline',
    'inline-block',
    'inline-flexbox',
    'inline-flex'
]

const positionObject: Array<string> = [
    'absolute',
    'fixed',
    'relative',
    'static',
    'sticky'
]

const cursorObject: Array<string> = [
    'auto',
    'default',
    'none',
    'context-menu',
    'help',
    'pointer',
    'progress',
    'wait',
    'cell',
    'text',
    'copy',
    'alias',
    'move',
    'no-drop',
    'not-allowed'
]

const visibilityObject: Array<string> = [
    'visible',
    'hidden'
]

const alignObject: Array<string> = [
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'start',
    'end'
]

const justifyObject: Array<string> = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'start',
    'end'
]

const borderObject: Array<string> = [
    'solid',
    'dashed',
    'dotted',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
    'none',
    'hidden'
]

const borderPositionObject: Array<string> = [
    'top',
    'right',
    'bottom',
    'left'
]

export {
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
}