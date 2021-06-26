import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AceEditor from "./lib/Ace";
import { Button, NavHeader, View, AppThemeContext, themes } from "./ui-kit";
import Editor from "./container/Editor";
import IFrame from "./container/IFrame";

function App() {
  let [editorValue, setEditorValue] = useState("");
  let editorRef = useRef(null);
  let [appTheme, setAppTheme] = useState(themes.light);
  useEffect(() => {
    _initalizeEditor(AceEditor.solarized_light);
  }, []);

  const _initalizeEditor = (theme) => {
    const editor = AceEditor.edit("editor");
    editor.setTheme(theme);
    editor.session.setMode(new AceEditor.mode());
    editorRef.current = editor;
  };

  const _onRunHandler = () => {
    setEditorValue(editorRef.current.getValue());
  };

  return (
    <AppThemeContext.Provider value={[appTheme, setAppTheme]}>
      <div className="App" style={{ flex: 1 }}>
        <NavHeader title={"Mr Code Editr"} />
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
            <View>
              <Button
                variant={"success"}
                onClick={_onRunHandler}
                text={"RUN"}
              />
              <Button
                onClick={() => {
                  setAppTheme(themes.light);
                  editorRef.current.setTheme(AceEditor.solarized_light);
                }}
                text={"light"}
              />
              <Button
                onClick={() => {
                  setAppTheme(themes.dark);
                  editorRef.current.setTheme(AceEditor.twilight);
                }}
                text={"dark"}
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
