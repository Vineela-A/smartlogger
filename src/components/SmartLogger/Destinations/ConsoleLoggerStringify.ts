import { ILogDestination } from '../Core/ILogDestination';

export class ConsoleLoggerStringify implements ILogDestination {

    info<T>(message: T): void {
        console.info(`INFO: ${this.formatMessage(message)}`);
    }

    log<T>(message: T): void {
        console.log(message);
        console.log(`WARN: ${this.formatMessage(message)}`);
    }

    warn<T>(message: T): void {
        console.warn(`WARN: ${this.formatMessage(message)}`);
    }

    error<T>(message: T): void {
        console.error(`ERROR: ${this.formatMessage(message)}`);
    }

    private formatMessage<T>(message: T): string {
        if (typeof message === 'object') {
            return JSON.stringify(message, null, 2); // Pretty-print objects
        }
        return String(message); // Convert other types to string
    }
}

export default ConsoleLoggerStringify;