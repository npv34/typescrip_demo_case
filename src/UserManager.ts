import {User} from "./User.js";

export class UserManager {
    _users: User[] = [];

    constructor() {
    }

    add(user: User): void {
        this._users.push(user)
    }

    showList(): void {
        let html: string = '';
        this._users.forEach((user, index) => {
            html += `<tr>`;
            html += `<td>${index + 1}</td>`;
            html += `<td>${user.getName()}</td>`;
            html += `<td>${user.getEmail()}</td>`;
            html += `<td><button class="btn btn-danger">Delete</button></td>`
            html += `</tr>`;
        })
        document.getElementById('list-user').innerHTML = html;
    }
}
