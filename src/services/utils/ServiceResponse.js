export default class ServiceResponse {
    constructor(response) {
        if (typeof response === 'string') {
            try {
                const json = JSON.parse(response);
                this.response = json || {};
            } catch (e) {
                console.error(`[ServiceResponse] Can't convert string: ${response} to json!`);
            }
        }

        this.response = response || {};
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

        if (errors && errors.length > 0 && errors[0] instanceof Object) {
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
