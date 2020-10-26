import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialScanPage } from './historial-scan.page';

describe('HistorialScanPage', () => {
  let component: HistorialScanPage;
  let fixture: ComponentFixture<HistorialScanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialScanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
