import fakeRequest from './utils/fakeRequest';
import ServiceResponse from './utils/ServiceResponse';

import loginSuccessResponse from './dummy_data/login-success.json';
import loginFailureResponse from './dummy_data/login-failure.json';
// import loginFailureResponse from './dummy_data/login-failure-v2.json';

export default class AuthService {
    static async login(values, success = true) {
        return fakeRequest(success ? loginSuccessResponse : loginFailureResponse, {
            success: true,
            delay: 1000
        }).then((response) => {
            return new ServiceResponse(response);
        });
    }
}
