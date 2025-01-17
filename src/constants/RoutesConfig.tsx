// AUTH ROUTES
const LOGIN_ROUTE = "/login";

const FORGOT_PASSWORD_ROUTE = "/forgot-password";

const RESET_PASSWORD_ROUTE = "/reset-password";

const OTP_ROUTE = "/otp";

// NON-AUTH ROUTES
const TEST_ROUTE = "/test";
const NOT_FOUND_ROUTE = "/not-found";
const RESTRICTED_ROUTE = "/restricted";
const DESIGN_SYSTEM_ROUTE = "/ds";
const COMING_SOON_ROUTE = "/coming-soon";

const DEFAULT_ROUTE = LOGIN_ROUTE;

const GUEST_ROUTES = [NOT_FOUND_ROUTE, DESIGN_SYSTEM_ROUTE, LOGIN_ROUTE];


export {
    LOGIN_ROUTE,
    FORGOT_PASSWORD_ROUTE,
    RESET_PASSWORD_ROUTE,
    OTP_ROUTE,
    COMING_SOON_ROUTE,
    NOT_FOUND_ROUTE,
    GUEST_ROUTES,

    TEST_ROUTE,
    DESIGN_SYSTEM_ROUTE,
    RESTRICTED_ROUTE,
    DEFAULT_ROUTE,

};
