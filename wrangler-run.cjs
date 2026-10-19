// Runs wrangler under Electron-as-Node: strips the Electron marker that
// breaks yargs arg slicing, realigns argv, then loads cli.js as main.
delete process.versions.electron;
const path = require("path");
const cli = path.join(__dirname, "node_modules", "wrangler", "wrangler-dist", "cli.js");
const i = process.argv.findIndex((a) => a.endsWith("wrangler-run.cjs"));
const rest = i >= 0 ? process.argv.slice(i + 1) : process.argv.slice(2);
process.argv = [process.argv[0], cli, ...rest];
require("node:module").runMain(cli);
