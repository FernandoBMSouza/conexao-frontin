import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedeSocialPage } from './rede-social.page';

describe('RedeSocialPage', () => {
  let component: RedeSocialPage;
  let fixture: ComponentFixture<RedeSocialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RedeSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
