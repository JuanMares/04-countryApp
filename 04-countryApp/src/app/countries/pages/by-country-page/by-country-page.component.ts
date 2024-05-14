import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.services';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor(private countryService:CountryService) { }

  searchByCountry( term: string ) {
    this.countryService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }
}
