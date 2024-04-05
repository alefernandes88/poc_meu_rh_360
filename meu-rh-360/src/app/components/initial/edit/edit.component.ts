import { CommonModule, NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { estados } from "../../../utils/estados";

const modules = [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgFor
  ];
@Component({
    selector: 'app-edit',
    standalone: true,
    imports: [...modules],
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   
    title = "Editar empresa"
    submitted = false;
    estados: string[] = [];

    form: FormGroup =   new FormGroup({
        tipo_empresa:   new FormControl(''),
        nome_empresa:   new FormControl(''),
        cnpj:           new FormControl(''),
        cep:            new FormControl(''),
        endereco:       new FormControl(''),
        bairro:         new FormControl(''),
        estado:         new FormControl(''),
        cidade:         new FormControl(''),
        complemento:    new FormControl(''),
        celular:        new FormControl(''),
        nome_administrador: new FormControl(''),
        cpf:            new FormControl(''),
        email:          new FormControl(''),
    });

    constructor(private formBuilder: FormBuilder, private router: Router){}
    
    ngOnInit(): void {
        this.estados = estados;
        console.log(this.estados);
        this.form = this.formBuilder.group(
            {
                tipo_empresa:       [''],
                cep:                [''],
                endereco:           [''],
                bairro:             [''],
                cidade:             [''],
                complemento:        [''],
                cpf:                [''],
                nome_empresa:       ['', Validators.required],
                cnpj:               ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
                celular:            ['', [Validators.required, Validators.minLength(9), Validators.maxLength(14)]],
                nome_administrador: ['', Validators.required],
                email:              ['', [Validators.required, Validators.email]]
            }
        )
    }
    
    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
      }

    cadastrar(): void {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }
        //this.router.navigate(['/initial/started'], { state: this.form.value});
        console.log(this.form.value);
    }

    cancelar(): void {
        this.router.navigate(['/initial/started']);
    }

    mask:string = "";

    cpfcnpjmask() {
        const value = this.form.get('cpf')?.value;
        console.log(value, value.length, this.form)
        if(value.length <= 14) {
          this.mask = '00.000.000/0000-00'
        }
        else {
          this.mask = '00.000.0000-00'
        }
      }
}