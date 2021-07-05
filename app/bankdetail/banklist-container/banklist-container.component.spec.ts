import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklistContainerComponent } from './banklist-container.component';

describe('BanklistContainerComponent', () => {
  let component: BanklistContainerComponent;
  let fixture: ComponentFixture<BanklistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanklistContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
