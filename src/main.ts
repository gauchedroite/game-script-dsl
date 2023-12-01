import * as router from "./core/router.js"
import * as dsleditor from "./dsleditor.js"




export const startup = () => {
    router.addRoute("^#/dsleditor/?(.*)$", params => dsleditor.fetch(params));
}

export const render = () => {
    return `
    ${dsleditor.render()}
`
}

export const postRender = () => {
    dsleditor.postRender();
}

