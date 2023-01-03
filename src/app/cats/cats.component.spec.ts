import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataCatsService } from 'src/app/cats/services/data-cats.service';

import { CatsComponent } from './cats.component';

xdescribe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;

  beforeEach(async () => {
    const DataCatsServiceStub = {};
    await TestBed.configureTestingModule({
      declarations: [CatsComponent],
      providers: [{ provide: DataCatsService, useValue: DataCatsServiceStub }, {
      }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
