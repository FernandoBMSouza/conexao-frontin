import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromocaoSocialPage } from './promocao-social.page';

describe('PromocaoSocialPage', () => {
  let component: PromocaoSocialPage;
  let fixture: ComponentFixture<PromocaoSocialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PromocaoSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
