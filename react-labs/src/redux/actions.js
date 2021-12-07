export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        item: item,
    };
};

export const removeFromCart = (itemId) => {
    return {
        type: "REMOVE_FROM_CART",
        itemId: itemId,
    };
};

export const increaseAmount = (itemId, amount) => {
    return {
        type: "INCREASE_AMOUNT",
        itemId: itemId,
        payload: amount,
    };
};

export const decreaseAmount = (itemId) => {
    return {
        type: "DECREASE_AMOUNT",
        itemId: itemId,
    };
};