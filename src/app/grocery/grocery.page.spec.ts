import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GroceryPage } from './grocery.page';

describe('GroceryPage', () => {
  let component: GroceryPage;
  let fixture: ComponentFixture<GroceryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
