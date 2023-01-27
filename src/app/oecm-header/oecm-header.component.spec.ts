import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OecmHeaderComponent } from './oecm-header.component';

describe('OecmHeaderComponent', () => {
  let component: OecmHeaderComponent;
  let fixture: ComponentFixture<OecmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OecmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OecmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
