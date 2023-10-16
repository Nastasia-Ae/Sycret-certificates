const initialState = {

    showBlockPay: false,
    showForm: false,
    seletedCertificate: {}
}

const SHOW_PAY = 'SHOW_PAY';

export const updateShowBlockPay = (showBlockPay) => ({
    type: SHOW_PAY,
    showBlockPay
});

const SHOW_FORM = 'SHOW_FORM';

export const updateShowForm = (showForm) => ({
    type: SHOW_FORM,
    showForm
});

const SELECTED_CERTIFICATE = 'SELECTED_CERTIFICATE';

export const setSeletedCertificate = (seletedCertificate) => ({
    type: SELECTED_CERTIFICATE,
    seletedCertificate
});


export const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case SHOW_PAY:
            return {
                ...state,
                showBlockPay: action.showBlockPay
            };

        case SHOW_FORM:

            return {
                ...state,
                showForm: action.showForm
            };

        case SELECTED_CERTIFICATE:

            return {
                ...state,
                seletedCertificate: action.seletedCertificate
            };

        default:
            return state


    }

}
