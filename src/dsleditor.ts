
import * as App from "./core/app.js"
import * as Misc from "./core/misc.js"
import { Sample } from "./dslEngine/_sample.js"

export const NS = "GDSL";



export const fetch = (args: string[] | undefined) => {
    App.prepareRender(NS, "DSL Editor", "game_dsl");
    App.render()
};


export const render = () => {
    if (!App.inContext(NS)) return "";

    const sceneViewer = Sample.run1()
    const script = Sample.get_script();

    return `
    <div class="scene">
        <div class="scene-editor-wrapper">
            <textarea title="Text editor" placeholder="Type here..." onchange="${NS}.onchange()">${script}</textarea>
        </div>
        <div class="scene-viewer-wrapper">
            ${sceneViewer}
        </div>
    </div>
    `
}

export const postRender = () => {
    if (!App.inContext(NS)) return;
}


export const onchange = () => {
    //clone_moment.text = Misc.fromInputText(`${NS}_moment_text`, moment.text)!
    App.render()
}
