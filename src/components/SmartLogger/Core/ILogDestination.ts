export interface ILogDestination {
    info<T>(message: T): void;
    log<T>(message: T): void;
    warn<T>(message: T): void;
    error<T>(message: T): void;
}
