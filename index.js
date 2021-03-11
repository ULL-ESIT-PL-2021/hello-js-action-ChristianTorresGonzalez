'use strict'

const core = require('@actions/core');
const github = require('@actions/github');

try {
    const nombreUsuario = core.getInput('who-to-greet');
    const time = (new Date()).toTimeString();
    const payload = JSON.stringify(github.context.payload, undefined, 2)

    console.log(`Hello ${nombreUsuario}!`);
    core.setOutput("time", time);
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
