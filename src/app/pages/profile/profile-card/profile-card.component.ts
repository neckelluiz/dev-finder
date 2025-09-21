import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: false,
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() user: any;
  @Input() repos: any[] | undefined;
}
