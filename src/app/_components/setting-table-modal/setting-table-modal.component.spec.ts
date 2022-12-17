import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTableModalComponent } from './setting-table-modal.component';

describe('SettingTableModalComponent', () => {
  let component: SettingTableModalComponent;
  let fixture: ComponentFixture<SettingTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingTableModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
