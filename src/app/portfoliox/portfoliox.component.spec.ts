import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioxComponent } from './portfoliox.component';

describe('PortfolioxComponent', () => {
  let component: PortfolioxComponent;
  let fixture: ComponentFixture<PortfolioxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
