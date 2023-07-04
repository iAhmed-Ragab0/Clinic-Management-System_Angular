import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const forbiddenNames: ValidatorFn =
    (control: AbstractControl): ValidationErrors | null => {
        let nameVal: string = control.value;
        let validationError = { 'forbiddenName': { 'value': nameVal } }
        let regex = /\b((?!admin)(?!user)(?!doctor)(?!patient)(?!employee))\b\S+/
        if (nameVal.trim() == "") return null
        return regex.test(nameVal) ? null : validationError;
    }

