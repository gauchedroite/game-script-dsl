
import * as EditorMain from "./main.js"



export const render = () => {
    return `
    ${EditorMain.render()}
`
}

export const postRender = () => {
    EditorMain.postRender();
}
