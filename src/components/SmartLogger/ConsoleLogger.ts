import { ILogDestination } from './ILogDestination';

export class ConsoleLogger implements ILogDestination {
    info(message: string): void {
        console.info(`INFO: ${message}`);
    }

    log(message: string): void {
        console.log(`LOG: ${message}`);
    }

    warn(message: string): void {
        console.warn(`WARN: ${message}`);
    }

    error(message: string): void {
        console.error(`ERROR: ${message}`);
    }
}
