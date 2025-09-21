import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  standalone: false,
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent {
  @Input() user: any;
}
