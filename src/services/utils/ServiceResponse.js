export default class ServiceResponse {
    constructor(response) {
        this.response = response;
    }

    get status() {
        return this.response?.meta?.status ?? 200;
    }

    get data() {
        return this.response?.data ?? [];
    }

    get errors() {
        return this.response?.errors ?? [];
    }

    get fieldsError() {
        const errors = this.errors;

        if (errors && errors.length > 0) {
            return errors.reduce((result, item) => {
                const errorItem = Object.entries(item)[0];

                if (errorItem && errorItem?.length === 2) {
                    result.push({ field: errorItem[0], error: errorItem[1] });
                }

                return result;
            }, []);
        }

        return [];
    }
}
