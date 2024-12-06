export class Server {
    constructor(public instanceType: 'small'| 'medium'|'large', public name: string, public status: 'offline'|'stable'|'critical', public started: Date){}
}