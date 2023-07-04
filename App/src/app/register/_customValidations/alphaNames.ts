import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const alphaNames: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        let nameVal: string = control.value;
        let validError = { 'onlyCharacters': { 'value': nameVal } }
        if(nameVal.trim()=="") return null;
        return isNaN(Number(nameVal)) ? null : validError;
    }

