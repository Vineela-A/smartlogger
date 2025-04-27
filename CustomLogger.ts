import { ILogDestination } from './ILogDestination';

export class CustomLogger {
    private static instance: CustomLogger;
    private destinations: ILogDestination[] = [];

    private constructor() { }

    static getInstance(): CustomLogger {
        if (!CustomLogger.instance) {
            CustomLogger.instance = new CustomLogger();
        }
        return CustomLogger.instance;
    }

    addLogDestination(dest: ILogDestination): void {
        this.destinations.push(dest);
    }

    info(message: string): void {
        this.logToDestinations('info', message);
    }

    log(message: string): void {
        this.logToDestinations('log', message);
    }

    warn(message: string): void {
        this.logToDestinations('warn', message);
    }

    error(message: string): void {
        this.logToDestinations('error', message);
    }

    private logToDestinations(method: keyof ILogDestination, message: string): void {
        for (const destination of this.destinations) {
            destination[method](message);
        }
    }
}
