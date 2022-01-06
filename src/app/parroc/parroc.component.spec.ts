import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrocComponent } from './parroc.component';

describe('ParrocComponent', () => {
  let component: ParrocComponent;
  let fixture: ComponentFixture<ParrocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParrocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
