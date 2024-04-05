import { Component } from "@angular/core";
import { CommonModule, Location } from '@angular/common';
import { Usuario } from "../../../models/modelos";
import { Router } from "@angular/router";

const modules = [
    CommonModule 
  ];
@Component({
    selector: 'app-initial',
    templateUrl: './initial.component.html',
    standalone: true,
    imports: [...modules]
})
export class InitialComponent{
    titular = "";


    constructor(private location: Location, private router: Router){
        const usu: Usuario = this.location.getState() as Usuario;
        if(usu.nome_completo != null) {
            this.titular = this.buscarNome(usu.nome_completo);
       }
    }

    buscarNome(nomeCompleto: string): string {
        return nomeCompleto.substring(0, nomeCompleto.indexOf(" "));
    }

    cadastrar(): void {
        this.router.navigate(['/initial/edit']);
    }

}