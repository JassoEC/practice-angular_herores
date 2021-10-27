import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { HeoresService } from '../../services/heores.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  hero!: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  backTolist = () => {
    this.router.navigate(['/heroes/list']);
  };
}
