var { watch, task, parallel } = require("gulp");
var connect = require("gulp-connect");


var moveHTML = require("./move-html");

var processSass = require("./process-sass");


function watchEverything() {
    watch("./src/html/**/*.html",
    { ignoreInitial: false },
    moveHTML);
    watch("./src/sass/**/*.scss",
    { ignoreInitial: false },
    processSass);
}


function server() {
    return connect.server({ root: "dist", livereload: true, port: 42069});
}

task("default", parallel(server, watchEverything));