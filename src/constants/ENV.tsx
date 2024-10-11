console.log(import.meta.env, 'env');
interface IEnv {
    API_URL: string | undefined;
    APP_URL: string | undefined;
    SOCKET_URL: string | undefined;
    ENV_MODE: "dev" | "test" | "uat" | "prod" | string | undefined;
    ENABLE_REDUX_LOGS: boolean;
    ENABLE_HTTP_LOGS: boolean;
}

const ENV: IEnv = {
    API_URL: import.meta.env.VITE_API_URL,
    APP_URL: import.meta.env.VITE_APP_URL,
    SOCKET_URL: import.meta.env.VITE_SOCKET_URL,
    ENV_MODE: import.meta.env.VITE_ENV,
    ENABLE_REDUX_LOGS: (import.meta.env.VITE_ENABLE_REDUX_LOGS) === 'true',
    ENABLE_HTTP_LOGS: (import.meta.env.VITE_ENABLE_HTTP_LOGS) === 'true',
}

console.log(ENV, 'ENV')

export default ENV;
