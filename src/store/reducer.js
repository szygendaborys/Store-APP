
const initialState = {
    liked:0,
    cart:0,
    item: [
        {
            id:1,
            name: 'Iphone 8',
            price: 2000,
            desc: 'The new Iphone 8 available at our store!'
        },
        {
            id:2,
            name: 'Iphone 6',
            price: 1500,
            desc: 'The new Iphone 6 available at our store!'
        },
        {
            id:3,
            name: 'Samsung S8',
            price: 2200,
            desc: 'The new Samsung S8 available at our store!'
        },
        {
            id:4,
            name: 'Xiaomi Mi 6',
            price: 1400,
            desc: 'The new Xiaomi Mi 6 available at our store!'
        },
        {
            id:5,
            name: 'Pocophone P1',
            price: 2100,
            desc: 'The new Pocophone P1 available at our store!'
        },
        {
            id:6,
            name: 'Nokia 3310',
            price: 999,
            desc: 'The new Nokia 3310 available at our store!'
        },
    ]
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'ADD_NUM':
            return {
                ...state,
                age: state.age + 1
            }
        default:
            break;
    }

    return newState;
}

export default reducer;