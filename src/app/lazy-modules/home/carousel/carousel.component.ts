import { Component, OnInit } from '@angular/core';

interface CarouselSlide {
  image: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: CarouselSlide[] = [
    {
      image: '/assets/images/heroku.png',
    },
    {
      image: '/assets/images/laravel.png',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
