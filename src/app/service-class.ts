type Nullable<T> = T | null;
export class ServiceClass {
    constructor(
        public serviceId: null,
        public serviceName: string,
        public url: string,
        public active: string){}
}
