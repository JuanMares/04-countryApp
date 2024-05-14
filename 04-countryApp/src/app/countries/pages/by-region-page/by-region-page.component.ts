import { Component } from '@angular/core';
import { CountryService } from '../../services/country.services';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries:Country[] = [];

  public constructor( private countryService:CountryService) { }

  searchByRegion( term: string ) {
    this.countryService.searchRegion(term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }
}
