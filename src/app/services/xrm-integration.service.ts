import { Injectable } from '@angular/core';

@Injectable()
export class XrmIntegrationService {
  private static xrmParent: any = null;
  private static xrmParentChecked = false;

  constructor() { }

  getParentXrm(): any {
    if (!XrmIntegrationService.xrmParentChecked && XrmIntegrationService.xrmParent === null) {
      if (('parent' in window) && 'Xrm' in window.parent ) {
        XrmIntegrationService.xrmParent = window.parent['Xrm'];
      }
      XrmIntegrationService.xrmParentChecked = true;
    }
    return XrmIntegrationService.xrmParent;
  }
  isGuidEmpty(value) {
    return value === null // NULL value
          || value === undefined // undefined
          || value === 'undefined' // undefined
          || value.length === 0 // Array is empty
          || value === '00000000-0000-0000-0000-000000000000'; // Guid empty
  }
}
