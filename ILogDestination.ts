export interface ILogDestination {
    info(message: string): void;
    log(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}
