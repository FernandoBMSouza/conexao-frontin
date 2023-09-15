import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrasPage } from './cras.page';

describe('CrasPage', () => {
  let component: CrasPage;
  let fixture: ComponentFixture<CrasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
