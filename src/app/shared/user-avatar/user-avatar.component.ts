import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  standalone: false,
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
  @Input() avatarUrl!: string;
  @Input() size: number = 120;
}
