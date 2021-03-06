import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import Decoration from '../../assets/images/Decoration.svg';
import Contact from '../Home/Contact';
import Icon1 from '../../assets/images/Icon1.svg';
import Icon4 from '../../assets/images/Icon4.svg';

class GiveThings extends React.Component {
    state = {
        typeOfThingsToGive: "ubrania, które nadają się do ponownego użycia",
        bagsQuantity: 1,
        location: "Poznań",
        forWhom: "dzieciom",
        organisationName: "",
        street: "",
        city: "",
        zipCode: "",
        phone: "",
        date: "",
        time: "",
        comments: "",
        stepCounter: 0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/thingsToGive", { user: localStorage.getItem("email"), typeOfThingsToGive: this.state.typeOfThingsToGive, bagsQuantity: Number(this.state.bagsQuantity), location: this.state.location, forWhom: this.state.forWhom, organisationName: this.state.organisationName, street: this.state.street, city: this.state.city, zipCode: this.state.zipCode, phone: this.state.phone, date: this.state.date, time: this.state.time, comments: this.state.comments })
    }

    goToNextStep = () => {
        this.setState({
            stepCounter: this.state.stepCounter + 1,
        })
    }

    backToPrevStep = () => {
        this.setState({
            stepCounter: this.state.stepCounter - 1
        })
    }
    /*
        setData = (data) => {
            this.setState({
                ...this.state,
                ...data
            })
        }
    
        getForms() {
            switch (this.state.stepCounter) {
                case 1:
                    return <FirstStep inputs={this.state} setData={this.setData} />
                case 2:
                    return <SecoundStep inputs={this.state} setData={this.setData} />
    
                default:
                    break;
            }
        }
    */

    render() {
        return (
            <AuthContext.Consumer>
                {
                    ({ isAuth }) => {
                        return (
                            !isAuth ?
                                <Redirect to="/login" /> :
                                <div className="give-things-container">
                                    <section className="give-things-header">
                                        <div className="give-things-header-image">

                                        </div>
                                        <div className="give-things-header-text">
                                            <h1>Oddaj rzeczy, których już nie chcesz</h1>
                                            <h1 style={{ marginTop: "10px", textTransform: "uppercase" }}>Potrzebującym</h1>
                                            <img src={Decoration}></img>
                                            <h2>Wystarczą 4 proste kroki</h2>
                                            <div className="give-things-header-text-lower-container">
                                                <div>
                                                    <h2>1</h2>
                                                    <h3 className="square-text-upper">Wybierz</h3>
                                                    <h3 className="square-text-lower">rzeczy</h3>
                                                </div>
                                                <div>
                                                    <h2>2</h2>
                                                    <h3 className="square-text-upper">Spakuj je</h3>
                                                    <h3 className="square-text-lower">w worki</h3>
                                                </div>
                                                <div>
                                                    <h2>3</h2>
                                                    <h3 className="square-text-upper">Wybierz</h3>
                                                    <h3 className="square-text-lower">fundację</h3>
                                                </div>
                                                <div>
                                                    <h2>4</h2>
                                                    <h3 className="square-text-upper">Zamów</h3>
                                                    <h3 className="square-text-lower">kuriera</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section style={{ display: this.state.stepCounter > 3 ? "none" : "block" }} className="important">
                                        {
                                            this.state.stepCounter === 0 ?
                                                <>
                                                    <h3>Ważne</h3>
                                                    <h4>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</h4>
                                                </> :
                                                this.state.stepCounter === 1 ?
                                                    <>
                                                        <h3>Ważne</h3>
                                                        <h4>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak spakować rzeczy znajdziesz TUTAJ.</h4>
                                                    </> :
                                                    this.state.stepCounter === 2 ?
                                                        <>
                                                            <h3>Ważne</h3>
                                                            <h4>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</h4>
                                                        </> :
                                                        this.state.stepCounter === 3 ?
                                                            <>
                                                                <h3>Ważne</h3>
                                                                <h4>Podaj adres oraz termin odbioru rzeczy.</h4>
                                                            </> : ""
                                        }
                                    </section>
                                    <section className="give-things-form">
                                        <form onSubmit={this.handleSubmit}>


                                            <div style={{ display: this.state.stepCounter === 0 ? "block" : "none" }} className="give-things-form-step-one give-things-form-page">
                                                <p className="give-things-form-page_step">Krok 1/4</p>
                                                <h3 className="give-things-form-page_title">Zaznacz co chcesz oddać</h3>
                                                <label className="give-things-form-answer-container">ubrania, które nadają się do ponownego użycia
                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="ubrania, które nadają się do ponownego użycia" name="typeOfThingsToGive" defaultChecked={true}></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">ubrania do wyrzucenia
                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="ubrania do wyrzucenia" name="typeOfThingsToGive"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">zabawki
                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="zabawki" name="typeOfThingsToGive"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">książki
                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="Książki" name="typeOfThingsToGive"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">inne
                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="inne" name="typeOfThingsToGive"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <div className="give-things-form-buttons-container">
                                                    <p className="give-things-form-page_button" onClick={this.goToNextStep}>Dalej</p>
                                                </div>
                                            </div>


                                            <div style={{ display: this.state.stepCounter === 1 ? "block" : "none" }} className="give-things-form-step-two give-things-form-page">
                                                <p className="give-things-form-page_step">Krok 2/4</p>
                                                <h3 className="give-things-form-page_title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy</h3>
                                                <label>Liczba 60l worków:
                                        <select type="number" onChange={this.handleChange} name="bagsQuantity">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select></label>
                                                <div className="give-things-form-buttons-container">
                                                    <p className="give-things-form-page_button" onClick={this.backToPrevStep}>Wstecz</p>
                                                    <p className="give-things-form-page_button" onClick={this.goToNextStep}>Dalej</p>
                                                </div>
                                            </div>


                                            <div style={{ display: this.state.stepCounter === 2 ? "block" : "none" }} className="give-things-form-step-three give-things-form-page">
                                                <p className="give-things-form-page_step">Krok 3/4</p>
                                                <h3 className="give-things-form-page_title">Lokalizacja</h3>
                                                <select type="number" onChange={this.handleChange} name="location" style={{ marginLeft: 0 }}>
                                                    <option value="Poznań">Poznań</option>
                                                    <option value="Warszawa">Warszawa</option>
                                                    <option value="Łódź">Łódź</option>
                                                    <option value="Wrocław">Wrocław</option>
                                                    <option value="Bydgoszcz">Bydgoszcz</option>
                                                </select>
                                                <h4>Komu chcesz pomóc?</h4>
                                                <label className="give-things-form-answer-container">dzieciom
                                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="dzieciom" name="forWhom" defaultChecked={true}></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">samotnym matkom
                                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="samotnym matkom" name="forWhom"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">bezdomnym
                                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="bezdomnym" name="forWhom"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">niepełnosprawnym
                                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="niepełnosprawnym" name="forWhom"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="give-things-form-answer-container">osobom starszym
                                            <input style={{ display: "block" }} type="radio" onChange={this.handleChange} value="osobom starszym" name="forWhom"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <h4>Wpisz nazwę konkretnej organizacji</h4>
                                                <input className="organisation-name-input" type="text" name="organisationName" onChange={this.handleChange} value={this.state.organisationName} />
                                                <div className="give-things-form-buttons-container">
                                                    <p className="give-things-form-page_button" onClick={this.backToPrevStep}>Wstecz</p>
                                                    <p className="give-things-form-page_button" onClick={this.goToNextStep}>Dalej</p>
                                                </div>
                                            </div>


                                            <div style={{ display: this.state.stepCounter === 3 ? "block" : "none" }} className="give-things-form-step-four give-things-form-page">
                                                <p className="give-things-form-page_step">Krok 4/4</p>
                                                <h3 className="give-things-form-page_title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
                                                <div className="give-things-form-step-four-left">
                                                    <h4>Adres odbioru:</h4>
                                                    <label>Ulica
                                                    <input type="text" name="street" onChange={this.handleChange} value={this.state.street} /></label>
                                                    <label>Miasto
                                            <input type="text" name="city" onChange={this.handleChange} value={this.state.city} /></label>
                                                    <label>Kod Pocztowy
                                            <input type="text" name="zipCode" onChange={this.handleChange} value={this.state.zipCode} /></label>
                                                    <label>Numer telefonu
                                            <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} /></label>
                                                </div>
                                                <div className="give-things-form-step-four-right">
                                                    <h4>Termin odbioru:</h4>
                                                    <label>Data
                                                <input type="text" name="date" onChange={this.handleChange} value={this.state.date} /></label>
                                                    <label>Godzina
                                                <input type="text" name="time" onChange={this.handleChange} value={this.state.time} /></label>
                                                    <label>Uwagi dla kuriera
                                                    <textarea name="comments" onChange={this.handleChange} value={this.state.comments}></textarea></label>
                                                </div>
                                                <div className="give-things-form-buttons-container">
                                                    <p className="give-things-form-page_button" onClick={this.backToPrevStep}>Wstecz</p>
                                                    <p className="give-things-form-page_button" onClick={this.goToNextStep}>Dalej</p>
                                                </div>
                                            </div>


                                            <div style={{ display: this.state.stepCounter === 4 ? "block" : "none" }} className="give-things-form-step-five give-things-form-page">
                                                <h2>Podsumowanie Twojej darowizny</h2>
                                                <h3>Oddajesz</h3>
                                                <div className="give-things-form-step-five_summary-image">
                                                    <img src={Icon1}></img>
                                                    {
                                                        this.state.bagsQuantity === 1 ?
                                                            <p>{this.state.bagsQuantity} worek , {this.state.typeOfThingsToGive}, {this.state.forWhom}</p> :
                                                            this.state.bagsQuantity > 1 && this.state.bagsQuantity < 5 ?
                                                                <p>{this.state.bagsQuantity} worki , {this.state.typeOfThingsToGive}, {this.state.forWhom}</p> :
                                                                this.state.bagsQuantity > 4 ?
                                                                    <p>{this.state.bagsQuantity} worków , {this.state.typeOfThingsToGive}, {this.state.forWhom}</p> : ""
                                                    }
                                                </div>
                                                <div className="give-things-form-step-five_summary-image">
                                                    <img src={Icon4}></img>
                                                    <p>dla lokalizacji: {this.state.location}</p>
                                                </div>
                                                <div className="give-things-form-step-five-left">
                                                    <h3>Adres odbioru:</h3>
                                                    <div className="give-things-form-step-five-left_text-container">
                                                        <p>Ulica:</p><p>{this.state.street}</p>
                                                    </div>
                                                    <div className="give-things-form-step-five-left_text-container">
                                                        <p>Miasto:</p><p>{this.state.city}</p>
                                                    </div>
                                                    <div className="give-things-form-step-five-left_text-container">
                                                        <p>Kod pocztowy:</p><p>{this.state.zipCode}</p>
                                                    </div>
                                                    <div className="give-things-form-step-five-left_text-container">
                                                        <p>Numer telefonu:</p><p>{this.state.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="give-things-form-step-five-right">
                                                    <h3>Termin odbioru:</h3>
                                                    <div className="give-things-form-step-five-right_text-container">
                                                        <p>Data:</p><p>{this.state.date}</p>
                                                    </div>
                                                    <div className="give-things-form-step-five-right_text-container">
                                                        <p>Godzina:</p><p>{this.state.time}</p>
                                                    </div>
                                                    <div className="give-things-form-step-five-right_text-container">
                                                        <p>Uwagi dla kuriera:</p><p style={{ width: "50%", overflowWrap: "break-word" }}>{this.state.comments}</p>
                                                    </div>
                                                </div>
                                                <div className="give-things-form-buttons-container">
                                                    <p className="give-things-form-page_button" onClick={this.backToPrevStep}>Wstecz</p>
                                                    <button className="give-things-form-page_button" onClick={this.goToNextStep}>Potwierdzam</button>
                                                </div>
                                            </div>


                                            <div style={{ display: this.state.stepCounter === 5 ? "block" : "none" }} className="give-things-form-step-six give-things-form-page">
                                                <h1>Dziękujemy za przesłanie formularza</h1>
                                                <h1>Na maila prześlemy wszelkie</h1>
                                                <h1>informacje o odbiorze</h1>
                                                <img src={Decoration}></img>
                                            </div>
                                        </form>
                                        <div className="give-things-form_image">

                                        </div>
                                    </section>
                                    <Contact />
                                </div >
                        )
                    }
                }
            </AuthContext.Consumer>

        )
    }
}

export default GiveThings;