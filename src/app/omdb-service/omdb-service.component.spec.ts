import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbServiceComponent } from './omdb-service.component';

describe('OmdbServiceComponent', () => {
  let component: OmdbServiceComponent;
  let fixture: ComponentFixture<OmdbServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmdbServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmdbServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
