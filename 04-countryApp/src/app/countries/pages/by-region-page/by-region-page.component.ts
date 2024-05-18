import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../services/country.services';

import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})


export class ByRegionPageComponent implements OnInit{

  public regions:Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public countries:Country[] = [];
  public isLoading:boolean=false
  public selectedRegion?:Region;

  public constructor( private countryService:CountryService) { }
  ngOnInit(): void {
    this.countries=this.countryService.cacheStore.byRegion.countries
    this.selectedRegion=this.countryService.cacheStore.byRegion.region
  }

  searchTerm( term: Region ) {

    this.selectedRegion=term;

    this.isLoading=true
    this.countryService.searchRegion(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading=false
    });
  }
}
