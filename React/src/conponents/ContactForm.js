import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {/*stateを複数定義する場合「,」で区切る。*/
      isSubmitted: false,
      email: '',
      hasEmailError: false,

      content: '',
      hasContentError: false,
      
    };
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;/*記入内容を定数に格納*/
    const isEmpty = inputValue === '';/*記入内容がからかどうかチェックを行い、結果を定数に入れる。*/
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

   handleContentChange(event){
    const inputValue = event.target.value;/*記入内容を定数に格納*/
    const isEmpty = inputValue === '';/*記入内容がからかどうかチェックを行い、結果を定数に入れる。*/
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {/*hasEmailErrorがtrueに変更されたときに*/
      emailErrorText = (/*変数に以下を格納*/
        <p className='contact-message-error'>
          メールアドレスを入力してください
        </p>
      );
    }
    
    let contentErrorText;
    
    if (this.state.hasContentError){/*hasContentErrorがtrueに変更されたときに*/
      contentErrorText = (/*変数に以下を格納*/
        <p className='contact-message-error'>
          お問い合わせ内容を入力してください
        </p>
        );
    }
    
    let contactForm;
    if (this.state.isSubmitted) {/*isSubmittedがtrueになったとき*/
      contactForm = (/*変数に以下を格納*/
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}} >
          <p>メールアドレス（必須）</p>
          <input
            value={this.state.email}/*stateの入力値を紐づける*/
            onChange={(event) => {this.handleEmailChange(event)}}/*引数にeventを指定。*/
          />
          {emailErrorText}
          <p>お問い合わせ内容（必須）</p>
          <textarea
            value = {this.state.content}/*stateの入力値を紐づける*/
            onChange = {(event) => {this.handleContentChange(event)}}/*引数にeventを指定。*/
          />
          {/* エラーメッセージが格納された変数contentErrorTextを呼び出す。 */}
          {contentErrorText}
          
          <input
            type='submit'
            value='送信'
          />
        </form>
      );
    }
    
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );/*｛変数名｝で変数の呼び出し*/
  }
}

export default ContactForm;