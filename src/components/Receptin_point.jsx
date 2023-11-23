import React, { Component } from "react";
import Header from "./Header";
import '../css/form.css';
import '../css/general.css'

class Reception_point extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          coordinates: '',
          address: '',
          workingHours: '',
          description: '',
          category: '',
          phoneNumber: '',
          vkLink: '',
          tgLink: '',
          openHeader: false
        };
      }
        // console.log('asdfdfs');
      handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit = (event) => {
        console.log('Отправлено: ' + JSON.stringify(this.state));
        event.preventDefault();
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
                Координаты:
                <input type="text" name="coordinates" onChange={this.handleInputChange} />
              </label>
              <label>
                Адрес:
                <input type="text" name="address" onChange={this.handleInputChange} />
              </label>
              <label>
                Время работы:
                <input type="text" name="workingHours" onChange={this.handleInputChange} />
              </label>
              <label>
                Описание:
                <input type="text" name="description" onChange={this.handleInputChange} />
                {/* <textarea name="description" onChange={this.handleInputChange} /> */}
              </label>
              <label>
                Категория:
                <select name="category" onChange={this.handleInputChange}>
                  <option value="">Выберите тип отходов</option>
                  <option value="category1">Макулатура</option>
                  <option value="category2">Коричневые, зеленые и бесцветные стеклянные бутылки и банки</option>
                  <option value="category3">Пластиковые ящики ПНД</option>
                  <option value="category1">Батарейки</option>
                  <option value="category2">Канистры ПНД, ПВД</option>
                  <option value="category3">Стретч-пленка ПВД</option>
                  <option value="фывавыафа">Пленка ПВД</option>
                  <option value="category1">Крышки ПНД, ПВД, ПП</option>
                  <option value="category2">Белые ПЭТ-бутылки от напитков</option>
                  <option value="category3">Пакеты фасовочные и пакеты-майки ПНД, ПВД</option>
                  <option value="category1">ПЭТ-бутылки от напитков и растительного масла</option>
                  <option value="category2">Алюминиевые банки</option>
                </select>
              </label>
              <label>
                Номер телефона:
                <input type="text" name="phoneNumber" onChange={this.handleInputChange} />
              </label>
              <label>
                Ссылка ВК:
                <input type="text" name="vkLink" onChange={this.handleInputChange} />
              </label>
              <label>
                Ссылка ТГ:
                <input type="text" name="tgLink" onChange={this.handleInputChange} />
              </label>
              <input type="submit" value="Отправить" />
            </form>
          </main>
        </>
        );
      }
}

export default Reception_point