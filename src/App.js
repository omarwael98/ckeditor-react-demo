import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { useState } from "react";

function App() {
  const [myData, setMyData] = useState("");
  return (
    <div className="App">
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={Editor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            setMyData(data);
          }}
        />
      </div>
      <div>
        <h2>content</h2>
        {myData}
      </div>
    </div>
  );
}

export default App;
