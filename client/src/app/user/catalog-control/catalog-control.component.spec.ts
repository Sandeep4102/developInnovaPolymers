import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogControlComponent } from './catalog-control.component';

describe('CatalogControlComponent', () => {
  let component: CatalogControlComponent;
  let fixture: ComponentFixture<CatalogControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
