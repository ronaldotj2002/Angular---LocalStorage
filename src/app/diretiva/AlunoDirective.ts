import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector : `[appAluno]`
})

export class AlunoDirective{
    
    @Input() appAluno = () =>{};

    @Input() confirmaMensagem = 'Teste de directiva do Aluno';

    @HostListener('click', ['$event'])
    defaultMethod(){
        const confirma = window.confirm(this.confirmaMensagem);
        console.log('Confirma ?', confirma);
        if (confirma){
            this.appAluno();
        }
    }

    
}