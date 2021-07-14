import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-tour-of-heroes'`, () => {
    expect(component.title).toEqual('Tour of Heroes');
  });

  it('should render title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Tour of Heroes');
  });

  // it('should transfer to heroes', () => {
  //   fixture.detectChanges();
  //       spyOn(window, 'open');
  //       const link = fixture.debugElement.nativeElement.querySelector('#heroesLink');
  //       link.click();
  //       fixture.whenStable().then(() => {
  //           expect(link).toHaveBeenCalled();
  //           expect(window.open).toHaveBeenCalledWith('/heroes');
  //       });
  // });

  // it('should transfer to dashboard', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //       spyOn(window, 'open');
  //       const link = fixture.debugElement.nativeElement.querySelector('#dashboardLink');
  //       link.click();
  //       fixture.whenStable().then(() => {
  //           expect(link).toHaveBeenCalled();
  //           expect(window.open).toHaveBeenCalledWith('/heroes');
  //       });
  // });
});
