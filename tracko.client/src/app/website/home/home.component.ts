import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showHero = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd) // Only react to navigation end events
      )
      .subscribe(() => {
        // Show HeroComponent only when on '/home', not on '/home/contact', '/home/login', etc.
        this.showHero = this.router.url === '/home';
      });
  }
}
