import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import {ProfileComponent} from './profile.component';
import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ProfileComponent],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: { params: of({ username: 'octocat' }) }
      }
    ],
    imports: [FormsModule],
  }).compileComponents();
});
