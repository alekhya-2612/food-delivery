import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddtipPage } from './addtip.page';

describe('AddtipPage', () => {
  let component: AddtipPage;
  let fixture: ComponentFixture<AddtipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddtipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
