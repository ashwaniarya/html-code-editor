import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AceEditor from "./lib/Ace";
import { Button, NavHeader, View, AppThemeContext, themes } from "./ui-kit";
import { DEFAULT_HTML_VALUE } from "./constants";
import Editor from "./container/Editor";
import IFrame from "./container/IFrame";
import FileSaver from "file-saver";
import { debounce } from "./utils";

function App() {
  let [editorValue, setEditorValue] = useState("");
  let [downloadValue, setDownloadValue] = useState(DEFAULT_HTML_VALUE);
  let editorRef = useRef(null);
  let [appTheme, setAppTheme] = useState(
    localStorage.getItem("theme", themes.light)
  );
  useEffect(() => {
    _initalizeEditor(AceEditor.solarized_light);
  }, []);

  const _initalizeEditor = (theme) => {
    const editor = AceEditor.edit("editor");
    editor.setTheme(theme);
    editor.session.setMode(new AceEditor.mode());
    editor.session.setValue(DEFAULT_HTML_VALUE, 0);
    editor.session.on(
      "change",
      debounce(() => {
        setDownloadValue(editor.session.getValue());
      }, 300)
    );
    editorRef.current = editor;
  };

  const onRunHandler = () => {
    setEditorValue(editorRef.current.getValue());
  };

  const toggleTheme = () => {
    let themeToSet = "";
    if (appTheme === themes.light) {
      themeToSet = themes.dark;
      editorRef.current.setTheme(AceEditor.twilight);
    } else {
      themeToSet = themes.light;
      editorRef.current.setTheme(AceEditor.solarized_light);
    }
    setAppTheme(themeToSet);
    localStorage.setItem("theme", themeToSet);
  };

  const onDonloadHandler = () => {
    let fileBlob = new Blob([editorValue], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(fileBlob, "download.txt");
  };

  const clearAll = () => {
    editorRef.current.session.setValue("", 0);
    setEditorValue("");
  };

  return (
    <AppThemeContext.Provider value={[appTheme, setAppTheme]}>
      <div className="App" style={{ flex: 1 }}>
        <NavHeader
          title={"HTML Playground"}
          actionObjects={
            <Button
              onClick={toggleTheme}
              icon={appTheme === themes.light ? "FaMoon" : "FaSun"}
              text={appTheme === themes.light ? "Dark" : "light"}
            />
          }
        />
        <View style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
          <View
            className="left-container"
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 360,
            }}
          >
            <Editor style={{ flex: 1 }} />
            <View
              style={{
                justifyContent: "space-between",
                display: "flex",
                padding: 16,
              }}
            >
              <View style={{ display: "flex" }}>
                <Button
                  onClick={clearAll}
                  text={"Clear"}
                  style={{ marginRight: 16 }}
                  icon={"FaTimesCircle"}
                />
                <Button
                  onClick={onDonloadHandler}
                  text={"Save the Code"}
                  disabled={!downloadValue}
                  icon={"FaFileDownload"}
                />
              </View>
              <Button
                variant={"success"}
                onClick={onRunHandler}
                text={"RUN"}
                icon={"FaPlay"}
              />
            </View>
          </View>
          <IFrame srcDoc={editorValue} style={{ flex: 1, minWidth: 360 }} />
        </View>
      </div>
    </AppThemeContext.Provider>
  );
}

export default App;
