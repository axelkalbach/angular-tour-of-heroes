import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-new-hero-detail',
  templateUrl: './new-hero-detail.component.html',
  styleUrls: ['./new-hero-detail.component.scss']
})
export class NewHeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
  @Input() selectedHeroId?: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    console.log(this.selectedHeroId)
    this.getHero();
    console.log('in init', this.selectedHeroId)
  }

  ngOnChanges() {
    console.log('in onChanges')
    this.getHero();
  }

  getHero(): void {
    console.log('in getHero')
    if(this.selectedHeroId) {
      console.log('setting selected hero Id to', this.selectedHeroId);
      this.heroService.getHero(this.selectedHeroId)
      .subscribe(hero => this.hero = hero);
    }
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
    }
  }

}
