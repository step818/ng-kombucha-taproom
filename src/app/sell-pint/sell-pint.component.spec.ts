import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPintComponent } from './sell-pint.component';

describe('SellPintComponent', () => {
  let component: SellPintComponent;
  let fixture: ComponentFixture<SellPintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
