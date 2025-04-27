import { ILogDestination } from '../Core/ILogDestination';

export class ServerLogger implements ILogDestination {

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
        console.log(`Create A Server Hook to post ${this.formatMessage(message)}`);
    }

    private formatMessage<T>(message: T): string {
        if (typeof message === 'object') {
            return JSON.stringify(message, null, 0); // Pretty-print objects
        }
        return String(message); // Convert other types to string
    }
}
export default ServerLogger;
