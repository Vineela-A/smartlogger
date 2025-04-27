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

    info<T>(message: T): void {
        this.logToDestinations('info', message);
    }

    log<T>(message: T): void {
        this.logToDestinations('log', message);
    }

    warn<T>(message: T): void {
        this.logToDestinations('warn', message);
    }

    error<T>(message: T): void {
        this.logToDestinations('error', message);
    }

    private logToDestinations<T>(method: keyof ILogDestination, message: T): void {
        for (const destination of this.destinations) {
            destination[method](message); // Dynamically call the method
        }
    }
}

export default CustomLogger;