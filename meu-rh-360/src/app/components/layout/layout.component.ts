import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Location } from '@angular/common';
import { Usuario } from "../../models/modelos";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent{

    usuario = "carregando";

    constructor(private location: Location){
        const usu: Usuario = this.location.getState() as Usuario;
        if(usu.nome_completo != null) {
            this.usuario = this.buscarNome(usu.nome_completo);
       }
    }

    buscarNome(nomeCompleto: string): string {
        return nomeCompleto.substring(0, nomeCompleto.indexOf(" "));
    }
}