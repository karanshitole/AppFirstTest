import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWitchComponent } from './tab-witch.component';

describe('TabWitchComponent', () => {
  let component: TabWitchComponent;
  let fixture: ComponentFixture<TabWitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabWitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabWitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
