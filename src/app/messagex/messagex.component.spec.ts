import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagexComponent } from './messagex.component';

describe('MessagexComponent', () => {
  let component: MessagexComponent;
  let fixture: ComponentFixture<MessagexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
