export class Registro {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;
    
    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;

        this.created = new Date();

        this.determinarTipo();
    }

    determinarTipo() {
        const inicoTexto = this.text.substring(0,4);
        console.log('TIPO', inicoTexto);
        switch(inicoTexto) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
            break;

            case 'geo:':
                this.type = 'geo';
                this.icon = 'pin';
            break;

            default:
                this.type = 'No Reconocido'
                this.icon = 'create';
                break;
        }
    }
}