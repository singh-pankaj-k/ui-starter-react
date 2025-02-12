export const authPaths = {
    root: "/",
    login: "login",
    register: "register",
    loginOrRegister: "login-or-register",
    forgotPassword: "forgot-password",
    passwordResetConfirmed: "password-reset-confirmed",
    emailConfirmed: "email-confirmed",
    checkEmail: "check-email",
    auth: {
        root: "auth",
        children: {
            changePassword: "change-password",
            changeEmail: "change-email",
            changePasswordSuccess: "change-password-success"
        },
    },
    logout: "logout",
    makeAbsolute: path => "/" + path
};