import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[] = [];
  username: string = '';
  error = false;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';

    this.githubService.getUser(this.username).subscribe({
      next: data => this.user = data,
      error: () => this.error = true
    });

    this.githubService.getRepos(this.username).subscribe({
      next: data => {
        this.repos = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
