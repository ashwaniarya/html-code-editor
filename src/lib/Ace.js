import AceEditor from "ace-builds";
import "ace-builds/webpack-resolver";
AceEditor.mode = require("ace-builds/src-noconflict/mode-html").Mode;
AceEditor.twilight = require("ace-builds/src-noconflict/theme-twilight");
AceEditor.solarized_light = require("ace-builds/src-noconflict/theme-solarized_light");
AceEditor.solarized_dark = require("ace-builds/src-noconflict/theme-solarized_dark");
export default AceEditor;
