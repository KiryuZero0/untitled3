import { observable, action, makeObservable } from 'mobx';
import { message } from 'antd';

class CardStore {
    formData = {
        nume: '',
        prenume: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    };

    cardsList = [];
    loading = true;

    constructor() {
        makeObservable(this, {
            formData: observable,
            cardsList: observable,
            loading: observable,
            handleChange: action,
            handleGenerate: action,
            handleSaveCard: action,
            handleUpdateCard: action,
            loadInitialData: action,
        });
        this.loadInitialData();
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        if ((name === 'nume' || name === 'prenume') && /\d/.test(value)) {
            alert('Numele și prenumele nu pot conține cifre!');
            return;
        }
        this.formData = { ...this.formData, [name]: value };
    };

    handleGenerate = () => {
        const cardNumber = this.generateRandomCardNumber();
        const expiryDate = this.generateRandomExpiryDate();
        const cvc = this.generateRandomNumber(3);
        this.formData = { ...this.formData, cardNumber, expiryDate, cvc };
    };

    handleSaveCard = () => {
        if (!this.formData.nume || !this.formData.prenume || !this.formData.cardNumber || !this.formData.expiryDate || !this.formData.cvc) {
            message.error('Completați toate câmpurile!');
            return;
        }

        const newCard = { ...this.formData };
        this.cardsList.push(newCard);
        this.saveToLocalStorage();
        this.clearFormData();
        message.success('Cardul a fost salvat cu succes!');
    };

    handleUpdateCard = (index, updatedCard) => {
        if (!updatedCard.nume || !updatedCard.prenume || !updatedCard.cardNumber || !updatedCard.expiryDate || !updatedCard.cvc) {
            message.error('Completați toate câmpurile!');
            return;
        }

        this.cardsList[index] = { ...updatedCard };
        this.saveToLocalStorage();
        message.success('Cardul a fost actualizat cu succes!');
    };

    generateRandomNumber = (length) => {
        let result = '';
        const characters = '0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    generateRandomExpiryDate = () => {
        const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5));
        return `${month}/${year}`;
    };

    generateRandomCardNumber = () => {
        let cardNumber = '';
        for (let i = 0; i < 16; i++) {
            cardNumber += this.generateRandomNumber(1);
            if ((i + 1) % 4 === 0 && i < 15) {
                cardNumber += ' ';
            }
        }
        return cardNumber;
    };

    clearFormData = () => {
        this.formData = {
            nume: '',
            prenume: '',
            cardNumber: '',
            expiryDate: '',
            cvc: '',
        };
    };

    loadInitialData = () => {
        setTimeout(() => {
            this.loading = false;
            this.loadFromLocalStorage();
        }, 2000);
    };

    loadFromLocalStorage = () => {
        const storedData = JSON.parse(localStorage.getItem('cardStore'));
        if (storedData) {
            this.formData = storedData.formData;
            this.cardsList = storedData.cardsList;
        } else {
            this.saveToLocalStorage();
        }
    };

    saveToLocalStorage = () => {
        const dataToStore = {
            formData: this.formData,
            cardsList: this.cardsList,
        };
        localStorage.setItem('cardStore', JSON.stringify(dataToStore));
    };
    clearLocalStorage = () => {
        localStorage.removeItem('cardStore');
    };
}


const cardStore = new CardStore();

export default cardStore;
