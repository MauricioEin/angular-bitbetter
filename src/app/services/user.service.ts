import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError, lastValueFrom } from 'rxjs';
import { Contact } from '../models/contact.model';
import { Move, User } from '../models/user.model';
import { StorageService } from './storage.service'


const USER = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
}

export const LOGGED_STORAGE_KEY = 'loggedInUser'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private storageService: StorageService) { }

    private _user$ = new BehaviorSubject<User | null>(null)
    public user$ = this._user$.asObservable()


    public getUser(): User | null {
        return this._user$?.value
    }

    public loadUser() {
        const user = this.storageService.load(LOGGED_STORAGE_KEY)
        this._user$.next(user)
    }


    public signup(name: string) {
        const user = { name, coins: 100, moves: [] }
        this.storageService.save(LOGGED_STORAGE_KEY, user)
        this._user$.next(user)
    }
    public logout() {
        this._user$.next(null)
        this.storageService.save(LOGGED_STORAGE_KEY, null)
    }

    public async addMove(contact: Contact, amount: number) {
        const user = this._user$.value
        if (!user) return
        const move: Move = {
            toId: contact._id as string,
            to: contact.name,
            at: Date.now(),
            amount
        }
        user.moves.unshift(move)
        user.coins -= amount
        this.storageService.save(LOGGED_STORAGE_KEY, user)

        this._user$.next(user)
    }
}