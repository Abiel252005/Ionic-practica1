import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingsPage } from './loadings.page';

describe('LoadingsPage', () => {
  let component: LoadingsPage;
  let fixture: ComponentFixture<LoadingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
