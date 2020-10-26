import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavscanPage } from './navscan.page';

describe('NavscanPage', () => {
  let component: NavscanPage;
  let fixture: ComponentFixture<NavscanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavscanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
