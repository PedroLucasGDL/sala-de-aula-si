import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})


export class ApiService {
    constructor(private http: HttpClient) { }
    
    getData(): Observable<any> {
        const link = "https://binaryjazz.us/wp-json/genrenator/v1/genre/"
        return this.http.get<any>(link);
    }
}