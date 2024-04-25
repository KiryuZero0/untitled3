import { observable, action, makeObservable } from 'mobx';

class UserStore {
    users = [];

    constructor() {
        makeObservable(this, {
            users: observable,
            initializeUsersFromLocalStorage: action,
            saveUsersToLocalStorage: action,
        });
        this.initializeUsersFromLocalStorage();
    }

    initializeUsersFromLocalStorage() {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            try {
                this.users = JSON.parse(storedUsers);
                console.log('User data loaded from localStorage.');
                alert('User data loaded from localStorage.'); // Mesaj de succes
            } catch (error) {
                console.error('Error parsing user data from localStorage:', error);
                alert('Error loading user data from localStorage.'); // Mesaj de eroare
            }
        } else {
            // Dacă nu există date în localStorage, folosim date mock și le salvăm
            this.users = [
                { id: 1, username: 'user1', email: 'user1@example.com' },
                { id: 2, username: 'user2', email: 'user2@example.com' },
                { id: 3, username: 'user3', email: 'user3@example.com' },
            ];
            this.saveUsersToLocalStorage();
        }
    }

    saveUsersToLocalStorage() {
        localStorage.setItem('users', JSON.stringify(this.users));
        console.log('User data saved to localStorage.');
    }
}

const userStore = new UserStore();

export default userStore;
