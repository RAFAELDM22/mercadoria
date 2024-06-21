import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprasListPage } from './compras-list.page';

describe('ComprasListPage', () => {
  let component: ComprasListPage;
  let fixture: ComponentFixture<ComprasListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
