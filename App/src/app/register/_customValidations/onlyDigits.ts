import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const onlyDigits: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        let ssnVal: string = control.value;
        let validError = { 'onlyDigits': { 'value': ssnVal } }
        return !isNaN(Number(ssnVal)) ? null : validError;
    }

