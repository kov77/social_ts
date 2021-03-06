
const initialState = {
    dialogs: [
        {id: '1', name: 'Vasia'},
        {id: '2', name: 'Petia'},
        {id: '3', name: 'Robert'},
        {id: '4', name: 'Ivan'},
        {id: '5', name: 'Klava'},
        {id: '6', name: 'Nastia'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How is your studing going?'}
    ]
}

type dialogsReducerType = addMessageACType

type addMessageACType = ReturnType<typeof addMessageActionCreator>

export const dialogsReducer = (state = initialState, action : dialogsReducerType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.value}]
            }
        }
        default:
            return state
    }
}

export const addMessageActionCreator = (text: string) => ({type: "ADD-MESSAGE", value: text})
