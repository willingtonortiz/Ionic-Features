import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CkeckboxPage } from './ckeckbox.page';

describe('CkeckboxPage', () => {
  let component: CkeckboxPage;
  let fixture: ComponentFixture<CkeckboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkeckboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CkeckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
