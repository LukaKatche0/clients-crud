import { Injectable } from '@angular/core';
import { isNil, isPlainObject } from 'lodash';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private fb: FormBuilder) {}

  static buildQueryParams(source: Object): HttpParams {
    if (isNil(source)) {
      return;
    }
    let target: HttpParams = new HttpParams();
    Object.keys(source).forEach((key: string) => {
      let value: any = source[key];
      if (isNil(value)) {
        return;
      }
      if (isPlainObject(value)) {
        value = JSON.stringify(value);
      } else {
        value = value.toString();
      }
      target = target.append(key, value);
    });
    return target;
  }

  static setFormByModel(model: Object, form: FormGroup) {
    Object.keys(model).forEach((key) => {
      const formControl = form.get(key);
      if (formControl instanceof FormArray) {
        return;
      }
      if (formControl) {
        form.get(key).setValue(model[key]);
      }
    });
  }
  
  static sanitizeFilters(source: Object) {
    const sanitizedFilters = {};
    Object.keys(source).forEach(key => {
      const filterValue = source[key];
      if (isNil(filterValue)) {
        return;
      } else if (filterValue.toString().length === 0) {
        return;
      } else {
        sanitizedFilters[key] = filterValue.trim();
      }
    })
    return sanitizedFilters;
  }
}
