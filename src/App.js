import { useState } from 'react';
import './App.css';
import { Marked, marked } from 'marked';
function App() {
  const [text, setText] = useState(`
  # Sample Markdown Header Level

## Sample Header Level 2

### Link

Here's a link to [Codepen](https://codepen.io).

### Code Block

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

### Inline Code

I think you should use an \`<addr>\` element here instead.

### List

- First item
- Second item

### Blockquote

> Dorothy followed her through many of the beautiful rooms in her castle.

### Image

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")

### Bold Text

I just love **bold text**.
`)

  marked.options({
    breaks: true
  })

  return (
    <div className="App">
      <textarea id="editor" onChange={(event) => {setText(event.target.value)}} value={text}></textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
    </div>
  );
}

export default App;
