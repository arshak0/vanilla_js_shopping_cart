var app_state = {
    price: [5, 20, 7.5],
    count: [2, 3, 0],
    discount: [-5, -3],
    luffy_change: function( change_var ) {
        this.count[2] += change_var;

        var summary_items = this.count[0] + this.count[1] + this.count[2];
        var summary_price = this.count[0]*this.price[0] + this.count[1]*this.price[1] + this.count[2]*this.price[2];
        var total_cost = summary_price + this.discount[0] + this.discount[1];
        update_html(summary_items, summary_price, total_cost);
    },
    naruto_change: function( change_var ) {
        this.count[1] += change_var;
        if ( this.count[1] >= 3 ) {
            this.discount[1] = - this.count[1];
        }
        else {
            this.discount[1] = 0;
        }

        var summary_items = this.count[0] + this.count[1] + this.count[2];
        var summary_price = this.count[0]*this.price[0] + this.count[1]*this.price[1] + this.count[2]*this.price[2];
        var total_cost = summary_price + this.discount[0] + this.discount[1];
        update_html(summary_items, summary_price, total_cost);
    },
    goku_change: function(change_var) {
        this.count[0] += change_var;

        if ( this.count[0] >= 2 ) {
            this.discount[0] = - (Math.floor(this.count[0]/2)*this.price[0]);
        }
        else {
            this.discount[0] = 0;
        }

        var summary_items = this.count[0] + this.count[1] + this.count[2];
        var summary_price = this.count[0]*this.price[0] + this.count[1]*this.price[1] + this.count[2]*this.price[2];
        var total_cost = summary_price + this.discount[0] + this.discount[1];
        update_html(summary_items, summary_price, total_cost);
    },
};

function update_html ( summary_items, summary_price, total_cost ) {
    //The function for updating the HTML elements
    document.getElementsByClassName('item_quantity')[0].textContent=app_state.count[0];
    document.getElementsByClassName('item_quantity')[1].textContent=app_state.count[1];
    document.getElementsByClassName('item_quantity')[2].textContent=app_state.count[2];
    document.getElementsByClassName('summary_items_span')[0].textContent=summary_items;
    document.getElementsByClassName('summary_price_span')[0].textContent=summary_price;
    document.getElementsByClassName('goku_discount_span')[0].textContent=app_state.discount[0];
    document.getElementsByClassName('naruto_discount_span')[0].textContent=app_state.discount[1];
    document.getElementsByClassName('total_cost_span')[0].textContent=total_cost;

    document.getElementsByClassName('item_price_span')[0].textContent=app_state.count[0]*app_state.price[0];
    document.getElementsByClassName('item_price_span')[1].textContent=app_state.count[1]*app_state.price[1];
    document.getElementsByClassName('item_price_span')[2].textContent=app_state.count[2]*app_state.price[2];
}


// Starting the code on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    //The initiall filling of HTML elements
    update_html( 5, 70, 62);

    //Click on "+" buttons
    document.getElementsByClassName('item_quantity_plus')[0].addEventListener('click', function() {
        app_state.goku_change(+1);
    });
    document.getElementsByClassName('item_quantity_plus')[1].addEventListener('click', function() {
        app_state.naruto_change(+1);
    });
    document.getElementsByClassName('item_quantity_plus')[2].addEventListener('click', function() {
        app_state.luffy_change(+1);
    });
    //---End of click on "+" buttons

    //Click on "-" buttons
    document.getElementsByClassName('item_quantity_minus')[0].addEventListener('click', function() {
        if ( document.getElementsByClassName('item_quantity')[0].textContent != 0 ) {
            app_state.goku_change(-1);
        }
    });
    document.getElementsByClassName('item_quantity_minus')[1].addEventListener('click', function() {
        if ( document.getElementsByClassName('item_quantity')[1].textContent != 0 ) {
            app_state.naruto_change(-1);
        }
    });
    document.getElementsByClassName('item_quantity_minus')[2].addEventListener('click', function() {
        if ( document.getElementsByClassName('item_quantity')[2].textContent != 0 ) {
            app_state.luffy_change(-1);
        }    
    });
    //---End of click on "-" buttons

    document.getElementsByClassName('checkout_btn')[0].addEventListener('click',function(e) {
        e.preventDefault();
    })

});