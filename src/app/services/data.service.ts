import { ITestData } from '../types/data-types';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: ITestData[] = [
        { id: 1, code: 'AAPL', name: 'Apple', validity: true },
        { id: 2, code: 'MSFT', name: 'Misrosoft', validity: true },
        { id: 3, code: 'GOOG', name: 'Alphabet (Google)', validity: true },
        { id: 4, code: 'AMZN', name: 'Amazon', validity: true },
        { id: 5, code: 'TSLA', name: 'Tesla', validity: true },
        { id: 6, code: 'NVDA', name: 'Nvidia', validity: true },
        { id: 7, code: 'TCEHY', name: 'Tencent', validity: true },
        { id: 8, code: 'TSM', name: 'TSMC', validity: true },
        { id: 9, code: 'XOM', name: 'Exxon Mobil', validity: true },
        { id: 10, code: 'UNH', name: 'United Health', validity: true },
        { id: 11, code: 'JNJ', name: 'Johnson & Johnson', validity: true },
        { id: 12, code: 'JPM', name: 'JPMorgan Chase', validity: true },
        { id: 13, code: 'WMT', name: 'Walmart', validity: true },
        { id: 14, code: 'MA', name: 'Mastercard', validity: true },
        { id: 15, code: 'CVX', name: 'Chevron', validity: true },
        { id: 16, code: 'PG', name: 'Proter & Gamble', validity: true },
        { id: 17, code: 'LLY', name: 'Eli Lilly', validity: true },
        { id: 18, code: 'HD', name: 'Home Depot', validity: true },
        { id: 19, code: 'BABA', name: 'Alibaba', validity: true },
        { id: 20, code: 'NVO', name: 'Novo Nordisk', validity: true },
        { id: 21, code: 'BAC', name: 'Bank of America', validity: true }
    ]

    public geAlltData(): ITestData[] {
        return this.data
    }

    public getRow(id: number): ITestData | null {
        return this.data.find(x => x.id == id) ?? null
    }

    public add(data: ITestData): void {
        data.id = this.data[this.data.length - 1].id
        this.data.push(data)
    }

    public edit(id: number, data: ITestData): void {
        this.data = this.data.map(row => row.id == id ? data : row)
    }
}
