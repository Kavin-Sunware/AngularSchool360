import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SchoolDataGridComponent } from './school-data-grid.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SchoolDataGridComponent', () => {
  let component: SchoolDataGridComponent;
  let fixture: ComponentFixture<SchoolDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SchoolDataGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
