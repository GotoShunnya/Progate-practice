import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(<App />でApp.jsのJSXがHTMLに変換される。*/
/*document.getElementById('root'));とすることで変換したHTMLファイルをindex.htmlの指定したid名の要素の中に挿入する。*/