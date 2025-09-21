import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });

    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    const dummyUser = { login: 'octocat', id: 1 };

    service.getUser('octocat').subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne('https://api.github.com/users/octocat');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('should fetch repositories', () => {
    const dummyRepos = [{ name: 'repo1' }, { name: 'repo2' }];

    service.getRepos('octocat').subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos).toEqual(dummyRepos);
    });

    const req = httpMock.expectOne('https://api.github.com/users/octocat/repos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepos);
  });
});
