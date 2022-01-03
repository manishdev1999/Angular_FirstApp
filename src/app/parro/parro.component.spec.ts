import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParroComponent } from './parro.component';

describe('ParroComponent', () => {
  let component: ParroComponent;
  let fixture: ComponentFixture<ParroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
