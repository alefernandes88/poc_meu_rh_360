import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import Validation from "../../utils/validation";
import { Router, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

const modules = [
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    CommonModule 
  ];
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [...modules],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({
        nome_completo: new FormControl(''),
        email: new FormControl(''),
        senha: new FormControl(''),
        confirmacao_senha: new FormControl(''),
        aceite_termo: new FormControl(false),
    });

    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router){}

    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                nome_completo:      ['', [Validators.required, Validators.minLength(6)]],
                email:              ['', [Validators.required, Validators.email]],
                senha:              ['', [Validators.required, Validators.minLength(6)]],
                confirmacao_senha:  ['', Validators.required],
                aceite_termo:       [false, Validators.requiredTrue]
            },
            {
                validators:         [Validation.match('senha', 'confirmacao_senha')]    
            }
        );
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
      }

    cadastrar(): void {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }
        this.router.navigate(['/initial/started'], { state: this.form.value});
    }
}
