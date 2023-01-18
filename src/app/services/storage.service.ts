import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    public save(key:string, value:any) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    
    public load(key:string) :any {
        return key? JSON.parse(localStorage.getItem(key)||'null') : null
    }

}