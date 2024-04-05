import { AbstractControl, ValidatorFn } from '@angular/forms'

export default class Validation {

    static match(controlName: string, checkControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const controlN = controls.get(controlName);
            const checkControlN= controls.get(checkControlName);

            if (checkControlN?.errors && !checkControlN.errors['matching']) {
                return null;
            }

            if (controlN?.value !== checkControlN?.value) {
                controls.get(checkControlName)?.setErrors({ matching: true });
                return { matching: true };
            } else {
                return null;
            }
        };
    }
    
}