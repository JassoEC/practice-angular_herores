import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeoresService } from '../../services/heores.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
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
  constructor(
    private heroService: HeoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  save = () => {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {
      this.heroService.updateHero(this.hero).subscribe((hero) => {
        this.showSnackBar('Registro actualizado');
        this.router.navigate(['/heroes', hero.id]);
      });
    } else {
      this.heroService.storeHero(this.hero).subscribe((hero) => {
        this.showSnackBar('Heroe creado');
        this.router.navigate(['/heroes', hero.id]);
      });
    }
  };

  delete = () => {
    this.heroService.deleteHero(this.hero.id!).subscribe((resp) => {
      this.showSnackBar('Heroe borrado');
      this.router.navigate(['/heroes']);
    });
  };

  showSnackBar = (message: string): void => {
    this.snackBar.open(message, 'Cerrar', { duration: 3000 });
  };
}
