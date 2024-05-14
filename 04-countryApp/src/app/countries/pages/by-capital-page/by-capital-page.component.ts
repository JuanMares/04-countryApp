import { Component } from '@angular/core';
import { CountryService } from '../../services/country.services';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];

  constructor(private countryService:CountryService) { }

  searchByCapital( term: string ) {
    this.countryService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}
