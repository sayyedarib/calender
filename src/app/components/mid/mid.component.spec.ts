import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidComponent } from './mid.component';

describe('MidComponent', () => {
  let component: MidComponent;
  let fixture: ComponentFixture<MidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
