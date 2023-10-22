import { Injectable } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms'

@Injectable(
    {providedIn: 'root'}
)

export class MatchPassword implements Validator{
    //The implements Validator is optional. It just a helper. It tells you what is missing/gives
    //you a hint/helping hand. 
    //If you don't know if you are validating form control or form group, you can fall back on control: AbstractControl
    validate(formGroup: FormGroup){
    const password = formGroup.get('password').value;
    const passwordConfirmation = formGroup.get('passwordConfirmation').value;

        if(password == passwordConfirmation) {
            return null;
        } else {
            return { PasswordDontMatch: true };
        }
    };
}
