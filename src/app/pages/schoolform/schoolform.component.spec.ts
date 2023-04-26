import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolformComponent } from './schoolform.component';

describe('SchoolformComponent', () => {
  let component: SchoolformComponent;
  let fixture: ComponentFixture<SchoolformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
