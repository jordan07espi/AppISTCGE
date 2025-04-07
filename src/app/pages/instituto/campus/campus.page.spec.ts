import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampusPage } from './campus.page';

describe('CampusPage', () => {
  let component: CampusPage;
  let fixture: ComponentFixture<CampusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
