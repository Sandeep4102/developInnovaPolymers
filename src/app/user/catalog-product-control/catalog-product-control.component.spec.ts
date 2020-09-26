import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogProductControlComponent } from './catalog-product-control.component';

describe('CatalogProductControlComponent', () => {
  let component: CatalogProductControlComponent;
  let fixture: ComponentFixture<CatalogProductControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogProductControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogProductControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
