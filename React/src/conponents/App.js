import React from 'react';/*各ファイルのコンポーネントをインポートする*/
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {/*コンポーネントの作成*/
  render() {/*renderメソッドの呼び出し*/
    return (/*return内にJSXを書き込む*/
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;/*コンポーネントを表示するためのexport*/
