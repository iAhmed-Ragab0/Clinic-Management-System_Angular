import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passConfirm: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    let password = formGroup.get('password')?.value;
    let confirmPassword = formGroup.get('confirmPassword')?.value;

    let UnmatchError = { 'unmatchedPasswords': true }
    if (!password || !confirmPassword)
        return null
    return (password == confirmPassword) ? null : UnmatchError;
}