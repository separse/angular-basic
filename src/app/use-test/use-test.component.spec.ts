import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTestComponent } from './use-test.component';

describe('UseTestComponent', () => {
  let component: UseTestComponent;
  let fixture: ComponentFixture<UseTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
