import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklistPresentationComponent } from './banklist-presentation.component';

describe('BanklistPresentationComponent', () => {
  let component: BanklistPresentationComponent;
  let fixture: ComponentFixture<BanklistPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanklistPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklistPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
