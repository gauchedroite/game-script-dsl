import * as App from "./core/app.js"
import * as router from "./core/router.js"
import * as Layout from "./layout.js"
//
import * as EditorMain from "./main.js"
import * as dsleditor from "./dsleditor.js"
import { Sample } from "./dslEngine/_sample.js"


// Global references to application modules. Used for event handlers.
(window as any)[App.NS] = App;
(window as any)[dsleditor.NS] = dsleditor;



// Initialize the view engine
await App.initialize(Layout.render, Layout.postRender, "Teller");

router.addRoute("^#/dsleditor/?(.*)$", params => dsleditor.fetch(params));

EditorMain.startup();



// Run the Game Script DSL on a sample game file
window.location.assign("#/dsleditor")
Sample.run1();

