import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAvatarComponent } from './user-avatar.component';
import { By } from '@angular/platform-browser';

describe('UserAvatarComponent', () => {
  let component: UserAvatarComponent;
  let fixture: ComponentFixture<UserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvatarComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAvatarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image with the correct src', () => {
    const testUrl = 'https://avatars.githubusercontent.com/u/123456?v=4';
    component.avatarUrl = testUrl;
    fixture.detectChanges();

    const imgEl = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgEl.src).toBe(testUrl);
  });

  it('should have a fixed blue border', () => {
    fixture.detectChanges();
    const imgEl: HTMLElement = fixture.debugElement.query(By.css('img')).nativeElement;
    const style = window.getComputedStyle(imgEl);
    expect(style.border).toContain('3px');  // verifica se existe a borda de 3px
    expect(style.borderColor).toBe('rgb(0, 123, 255)'); // azul padrão bootstrap
  });
});
