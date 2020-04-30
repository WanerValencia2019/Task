Component properties

The <CKEditor> component supports the following properties:

   editor (required) – The Editor constructor to use.
   data – The initial data for the created editor. See the Basic API guide.
   config – The editor configuration. See the Configuration guide.
   onInit – A function called when the editor was initialized. It receives the initialized editor as a parameter.
   disabled – A Boolean value. The editor is being switched to read-only mode if the property is set to true.
   onChange – A function called when the editor data has changed. See the editor.model.document#change:data event.
   onBlur – A function called when the editor was blurred. See the editor.editing.view.document#blur event.
   onFocus – A function called when the editor was focused. See the editor.editing.view.document#focus event.
   onError – A function called when the editor has crashed during the initialization. It receives the error object as a parameter.

The editor events callbacks (onChange, onBlur, onFocus) receive two parameters:

   An EventInfo object.
   An Editor instance.

#
import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default App;
