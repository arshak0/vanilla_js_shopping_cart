let app_state = {
    goku_price: 5,
    naruto_price: 20,
    luffy_price: 7.5,
    goku_count: 2,
    naruto_count: 3,
    luffy_count: 0,
    goku_discount: -5,
    naruto_discount: -3,
    goku_increment: () => {
        app_state.goku_count++;
    }
};