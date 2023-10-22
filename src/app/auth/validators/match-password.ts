import { Validator, FormGroup } from '@angular/forms'

export class MatchPassword implements Validator{
    //The implements Validator is optional. It just a helper. It tells you what is missing/gives
    //you a hint/helping hand. 
    validate(formGroup: FormGroup){
    //If you don't know if you are validating form control or form group, you can fall back on control: AbstractControl
    const { password, passwordConfirmation } = formGroup.value
    
        if(password === passwordConfirmation) {
            return null;
        } else {
            return { PasswordDontMatch: true };
        }
    }
}
