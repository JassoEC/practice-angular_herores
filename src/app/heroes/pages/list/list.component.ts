import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeoresService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
