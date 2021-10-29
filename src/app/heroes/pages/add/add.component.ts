import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  publishers = [
    { id: 'DC Comics', desc: 'DC-Commics' },
    { id: 'Marvel Comics', desc: 'Marvel-Commics' },
  ];

  hero: Hero = {
    id: undefined,
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    first_appearance: '',
  };
  constructor(private heroService: HeoresService) {}

  ngOnInit(): void {}

  save = () => {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    this.heroService.storeHero(this.hero).subscribe((response) => {
      console.log(response);
    });
  };
}
