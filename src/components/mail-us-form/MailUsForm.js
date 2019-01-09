import React, { Component } from 'react';
import sendDataToBackEnd from '../../services/mailApiServices';
import ErrorMessage from './error/ErrorMessage';
import SuccessMessage from './success/SuccessMessage';
import styles from './MailUsForm.module.css';

const INITIAL_STATE = {
  user: '',
  email: '',
  subject: '',
  message: '',
  error: { isError: false, status: '', data: '' },
  success: { isSuccess: false, status: '', data: '' },
};

export default class MailUsForm extends Component {
  state = { ...INITIAL_STATE };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCloseAlerts = () => {
    this.setState({ error: {}, success: {} });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { user, email, subject, message } = this.state;
    const data = {
      user,
      subject,
      email,
      message,
    };

    sendDataToBackEnd(data)
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            success: { isSuccess: true, status: 200, data: resp },
          });
        }
      })
      .catch(err => {
        this.setState({ error: { isError: true, status: 406, data: err } });
      });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { formTitle } = this.props;
    const { user, email, subject, message, error, success } = this.state;
    const { isError, data } = error;
    const { isSuccess } = success;

    return (
      <>
        <form className={styles.form}>
          <h3>{formTitle}</h3>
          <label className={styles.label}>
            <b className={styles.title}>
              <img src="images/icons/user.png" alt="name-icon" />
            </b>
            <input
              type="text"
              name="user"
              placeholder="Ім'я"
              className={styles.input}
              value={user}
              onChange={this.handleChangeInput}
            />
          </label>
          <label className={styles.label}>
            <b className={styles.title}>
              <img src="images/icons/e-mail.png" alt="email-icon" />
            </b>
            <input
              type="email"
              name="email"
              placeholder="Е-mail"
              className={styles.input}
              value={email}
              onChange={this.handleChangeInput}
            />
          </label>
          <label className={styles.label}>
            <b className={styles.title}>
              <img src="images/icons/tag.png" alt="tag-icon" />
            </b>
            <input
              type="text"
              name="subject"
              placeholder="Тема"
              className={styles.input}
              value={subject}
              onChange={this.handleChangeInput}
            />
          </label>
          <label className={styles.label}>
            <b className={styles.title}>
              <img src="images/icons/pen.png" alt="pen-icon" />
            </b>
            <textarea
              cols="100"
              rows="10"
              className={styles.textArea}
              name="message"
              value={message}
              onChange={this.handleChangeInput}
              placeholder="Напишіть ваше звернення тут"
            />
          </label>
          <button
            className={styles.sendBtn}
            onClick={this.handleSubmitForm}
            type="button"
          >
            <b>Відправити</b>
          </button>
        </form>
        {isError && (
          <ErrorMessage
            className={styles.error}
            closeBtnClassName={styles.closebtn}
            message={data.message}
            onClose={this.handleCloseAlerts}
          />
        )}

        {isSuccess && (
          <SuccessMessage
            className={styles.success}
            closeBtnClassName={styles.closebtn}
            message={data.message}
            onClose={this.handleCloseAlerts}
          />
        )}
      </>
    );
  }
}
