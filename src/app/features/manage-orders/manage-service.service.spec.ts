import { TestBed } from '@angular/core/testing';

import { ManageServiceService } from './manage-service.service';

describe('ManageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageServiceService = TestBed.get(ManageServiceService);
    expect(service).toBeTruthy();
  });
});
