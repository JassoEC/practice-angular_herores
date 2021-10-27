import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  heroes: Hero[] = [];
  selectedHero!: Hero;

  constructor(private heroService: HeoresService) {}

  ngOnInit(): void {}

  searching = () => {
    this.heroService
      .filter(this.searchValue)
      .subscribe((heroes) => (this.heroes = heroes));
  };

  selectHero = (event: MatAutocompleteSelectedEvent) => {
    const hero: Hero = event.option.value;
    this.searchValue = hero.superhero;
    this.heroService
      .getHeroById(hero.id!)
      .subscribe((hero) => (this.selectedHero = hero));
  };
}
