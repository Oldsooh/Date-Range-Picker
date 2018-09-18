import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsEasyComponent } from './echarts-easy.component';

describe('EchartsEasyComponent', () => {
  let component: EchartsEasyComponent;
  let fixture: ComponentFixture<EchartsEasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsEasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
