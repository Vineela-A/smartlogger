import { ILogDestination } from '../Core/ILogDestination';

export class ConsoleLogger implements ILogDestination {

    info<T>(message: T): void {
        console.error(message);
    }

    log<T>(message: T): void {
        console.log(message);
    }

    warn<T>(message: T): void {
        console.error(message);
    }

    error<T>(message: T): void {
        console.error(message);
    }
}

export default ConsoleLogger;