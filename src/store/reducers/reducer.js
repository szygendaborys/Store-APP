
const initialState = {
    menuOpened: false,
    liked:0,
    cart:0,
    item: [
        {
            id:1,
            name: 'Iphone 8',
            price: 2000,
            desc: 'The new Iphone 8 available at our store!',
            orderedNum: 0,
            wasLiked:false
        },
        {
            id:2,
            name: 'Iphone 6',
            price: 1500,
            desc: 'The new Iphone 6 available at our store!',
            orderedNum: 0,
            wasLiked:false
        },
        {
            id:3,
            name: 'Samsung S8',
            price: 2200,
            desc: 'The new Samsung S8 available at our store!',
            orderedNum: 0,
            wasLiked:false
        },
        {
            id:4,
            name: 'Xiaomi Mi 6',
            price: 1400,
            desc: 'The new Xiaomi Mi 6 available at our store!',
            orderedNum: 0,
            wasLiked:false
        },
        {
            id:5,
            name: 'Pocophone P1',
            price: 2100,
            desc: 'The new Pocophone P1 available at our store!',
            orderedNum: 0,
            wasLiked:false
        },
        {
            id:6,
            name: 'Nokia 3310',
            price: 999,
            desc: 'The new Nokia 3310 available at our store!',
            orderedNum: 0,
            wasLiked:false
        },
    ]
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'ADD_NUM':
            return{
                ...state,
                item: state.item.map(el => {
                    if(el.id === action.id) {
                        return{
                            ...el,
                            orderedNum: el.orderedNum + action.value
                        }
                    } else {
                        return el;
                    }
                }),
                cart:state.cart + action.value
            }
        case 'TOGGLE_MENU':
                return {
                    ...state,
                    menuOpened: action.value
                }
        case 'ADD_LIKE':
                return {
                    ...state,
                    liked: state.liked + action.change,
                    item: state.item.map(el => {
                        if(el.id === action.id) {
                            return {
                                ...el,
                                wasLiked:action.value
                            }
                        } else {
                            return el;
                        }
                    })
                }
        case 'REMOVE_ITEM':
                return {
                    ...state,
                    cart:state.cart-1,
                    item: state.item.map(el => {
                        if(el.id === action.id && el.orderedNum > 0) {
                            return {
                                ...el,
                                orderedNum: el.orderedNum-1
                            }
                        } else {
                            return el;
                        }
                    })
                }
        default:
            break;
    }

    return newState;
}

export default reducer;