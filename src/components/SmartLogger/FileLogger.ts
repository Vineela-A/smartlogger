import { ILogDestination } from './ILogDestination';

export class FileLogger implements ILogDestination {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    info<T>(message: T): void {
        this.logToFile(`INFO: ${message}`);
    }

    log<T>(message: T): void {
        this.logToFile(`LOG: ${message}`);
    }

    warn<T>(message: T): void {
        this.logToFile(`WARN: ${message}`);
    }

    error<T>(message: T): void {
        this.logToFile(`ERROR: ${message}`);
    }

    private logToFile<T>(message: T): void {
        // Logic to write the message to the file at this.filePath
        console.log(`Writing to file (${this.filePath}): ${this.formatMessage(message)}`);
    }

    private formatMessage<T>(message: T): string {
        if (typeof message === 'object') {
            return JSON.stringify(message, null, 2); // Pretty-print objects
        }
        return String(message); // Convert other types to string
    }
}
export default FileLogger;
