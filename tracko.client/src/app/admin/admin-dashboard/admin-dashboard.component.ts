import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  constructor(private authService: AuthServiceService) {}

  onSignOut() {
    this.authService.signOut();
  }
}
