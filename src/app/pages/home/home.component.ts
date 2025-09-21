import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username = '';

  constructor(private router: Router) {}

  searchUser() {
    const trimmed = this.username.trim();
    if (trimmed) {
      this.router.navigate(['/profile', trimmed]);
    }
  }
}
