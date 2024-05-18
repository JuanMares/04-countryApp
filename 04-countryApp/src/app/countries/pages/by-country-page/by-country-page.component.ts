import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.services';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries:Country[] = [];
  public isLoading:boolean=false
  public initialValue:string='';

  constructor(private countryService:CountryService) { }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries
    this.initialValue = this.countryService.cacheStore.byCountry.term
  }

  searchTerm( term: string ) {
    this.isLoading=true
    this.countryService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading=false
    });
  }
}
