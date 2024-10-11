import ENV from "./ENV";

// interface IAPIConfig {
//     [k: string]: {
//         URL: string | Function | any;
//         METHOD: "get" | "post" | "delete" | "put" | "patch";
//     };
// }

const APIConfig = {
    //meta start

    //meta end
    // authentication start
    LOGIN: {
        URL: ENV.API_URL + "/user/login",
        METHOD: "post",
    },
    CHECK_LOGIN: {
        URL: ENV.API_URL + "/user/check_login",
        METHOD: "get",
    },

    // ADD_NOTES: {
    //     URL: (customerId: any) => ENV.API_URL + `/customer-notes/${customerId}`,
    //     METHOD: 'post',
    // },
    // EDIT_NOTES: {
    //     URL: (customerId: any, noteId: any) => ENV.API_URL + `/customer-notes/${customerId}/edit/${noteId}`,
    //     METHOD: 'put',
    // },
    // DELETE_NOTES: {
    //     URL: (customerId: any, noteId: any) => ENV.API_URL + `/customer-notes/${customerId}/delete/${noteId}`,
    //     METHOD: 'delete',
    // }
};

export default APIConfig;
