import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  searchCapital(term:string):Observable<Country[]> {
    const url=`${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchCountry(term:string):Observable<Country[]> {
    const url=`${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchRegion(term:string):Observable<Country[]> {
    const url=`${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchCountryByAlphaCode(id:string):Observable<Country | null> {
    const url=`${this.apiUrl}/alpha/${id}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(() => of(null))
    );
  }

}
