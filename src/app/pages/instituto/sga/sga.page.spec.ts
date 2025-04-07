import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SgaPage } from './sga.page';

describe('SgaPage', () => {
  let component: SgaPage;
  let fixture: ComponentFixture<SgaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SgaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
