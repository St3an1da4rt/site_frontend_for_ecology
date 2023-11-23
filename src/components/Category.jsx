import React, { Component } from "react";
import Header from "./Header";
import '../css/form.css';
import '../css/general.css'

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rules: '',
      prohibited: '',
      userImage: null
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
	if (target.type === 'file'){
		const target = event.target;
		const value = target.files[0];

		this.setState({
		userImage: URL.createObjectURL(value)});
	} else {
		const value = target.value;
		const name = target.name;

		this.setState({
		[name]: value,
		});
  }}

  handleSubmit = (event) => {
    alert('Отправлено: ' + JSON.stringify(this.state));
    event.preventDefault();
	localStorage.
  }

  render() {
    return (
      <>
        <header>
              <button className="button_menu" onClick={() => this.setState({ openHeader: true })}></button>
              {this.state.openHeader ? <Header onCloseClick={() => this.setState({openHeader: false})}/> : null}
              <div className="logo"></div>
        </header>
        <main>
          <form className="form_category" onSubmit={this.handleSubmit}>
            <label>
              Название:
              <input type="text" name="name" onChange={this.handleInputChange} />
            </label>
            <label>
              Правила приема:
              <textarea name="rules" onChange={this.handleInputChange} />
            </label>
            <label>
              Что запрещается сдавать:
              <textarea name="prohibited" onChange={this.handleInputChange} />
            </label>
			<label>
				<input className="custom-file-input" type="file" name="userImage" onChange={this.handleInputChange} />
			</label>
        	{this.state.userImage && <img className="img_current" src={this.state.userImage} alt="User" />}
			<input type="submit" value="Отправить" />
          </form>
        </main>
      </>
    );
  }
}

export default Category