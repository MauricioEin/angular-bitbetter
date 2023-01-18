import { Injectable } from '@angular/core';
import axios from 'axios';
// import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {
    // constructor(private http: HttpClient) { }
    public async getRate(dollars = 1): Promise<number> {
        try {
            const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${dollars}`)
            return res.data 
        } catch (err) {
            console.log('Couldnt get rate:', err)
            throw (err)
        }
    }


    public async getMarketPrice(time = 'months', count = 5) {
        try {
            const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${count}${time}&format=json&cors=true`)
            return res.data
        } catch (err) {
            console.log('Couldnt get market price:', err)
            throw (err)
        }
        // return this.http.get<{ answer: string }>(`https://api.blockchain.info/charts/market-price?timespan=${count}${time}&format=json&cors=true`)
        // .pipe(
        //     map(res => res.answer)
        // )

    }


    public async getConfirmedTransactions(time = 'months', count = 5) {
        try {
            const res = await axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=${count}${time}&format=json&cors=true`)
            return res.data
        } catch (err) {
            console.log('Couldnt get confirmed transactions:', err)
            throw (err)
        }
    }
}