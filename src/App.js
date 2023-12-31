import VanillaJSONEditor from "./VanillaJSONEditor";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showEditor, setShowEditor] = useState(true);
  const [readOnly, setReadOnly] = useState(false);
  const [content, setContent] = useState({
    json: {
      greeting: "Hello World",
      color: "#ff3e00",
      ok: true,
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    text: undefined
  });

  return (
    <div className="App">
      {showEditor && (
        <>
          <h2>Editor</h2>
          <div className="my-editor">
            <VanillaJSONEditor
              content={content}
              readOnly={readOnly}
              onChange={setContent}
            />
          </div>
        </>
      )}

      <>
        <h2>Contents</h2>
        <pre>
          <code>{JSON.stringify(content, null, 2)}</code>
        </pre>
      </>
    </div>
  );
}
