import { ILogDestination } from './ILogDestination';

export class FileLogger implements ILogDestination {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    info(message: string): void {
        this.logToFile(`INFO: ${message}`);
    }

    log(message: string): void {
        this.logToFile(`LOG: ${message}`);
    }

    warn(message: string): void {
        this.logToFile(`WARN: ${message}`);
    }

    error(message: string): void {
        this.logToFile(`ERROR: ${message}`);
    }

    private logToFile(message: string): void {
        // Logic to write the message to the file at this.filePath
        console.log(`Writing to file (${this.filePath}): ${message}`);
    }
}
export default FileLogger;
