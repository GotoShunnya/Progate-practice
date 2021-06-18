import React from 'react';

class Lesson extends React.Component {
  constructor(props) {/*コンストラクタ定義*/
    super(props);
    this.state = {isModalOpen: false};/*stateの定義*/
  }

  handleClickLesson() {/*モーダルをtrueに変更するメソッドを定義*/
    this.setState({isModalOpen: true});/*setStateで指定したstateの値を変更*/
  }

  handleClickClose() {/*モーダルをfalseに変更するメソッドを定義*/
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;/*モーダルのJSXを格納する変数を定義*/
    if (this.state.isModalOpen) {/*もしstateのisModalOpenがtrueなら変数modalにJSXを格納する。*/
      modal = (/*記述内容が複数行にわたる場合「()」で囲む。*/
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}/*アロー関数でonClickイベントを作成。閉じるボタンを押したときに、モーダルを閉じるためのメソッドが発火するように指定*/
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (/*onClickイベントを作成。lesson-cardをクリックしたときにモーダルを開くメソッドを呼び出す。*/
      <div className='lesson-card'>
        <div
          className='lesson-item'
          onClick={() => {this.handleClickLesson()}}
        >
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {modal}
      </div>
    );/*this.props.nameでpropsのnameプロパティを呼び出している。propsの定義はMain.jsで行っている。*/
  }
}

export default Lesson;