/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddValueService } from './add-value.service';

describe('AddValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddValueService]
    });
  });

  it('should ...', inject([AddValueService], (service: AddValueService) => {
    expect(service).toBeTruthy();
  }));
});
