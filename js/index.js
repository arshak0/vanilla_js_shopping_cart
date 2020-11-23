var app_state = {
    goku_price: 5,
    naruto_price: 20,
    luffy_price: 7.5,
    goku_count: 2,
    naruto_count: 3,
    luffy_count: 0,
    goku_discount: -5,
    naruto_discount: -3,
    luffy_change: function( change_var ) {
        this.luffy_count += change_var;

        var summary_items = this.goku_count + this.naruto_count + this.luffy_count;
        var summary_price = this.goku_count*this.goku_price + this.naruto_count*this.naruto_price + this.luffy_count*this.luffy_price;
        var total_cost = summary_price + this.goku_discount + this.naruto_discount;
        update_html(summary_items, summary_price, total_cost);
    },
    naruto_change: function( change_var ) {
        this.naruto_count += change_var;
        if ( this.naruto_count >= 3 ) {
            this.naruto_discount = - this.naruto_count;
        }
        else {
            this.naruto_discount = 0;
        }

        var summary_items = this.goku_count + this.naruto_count + this.luffy_count;
        var summary_price = this.goku_count*this.goku_price + this.naruto_count*this.naruto_price + this.luffy_count*this.luffy_price;
        var total_cost = summary_price + this.goku_discount + this.naruto_discount;
        update_html(summary_items, summary_price, total_cost);
    },
    goku_change: function(change_var) {
        this.goku_count += change_var;

        if ( this.goku_count >= 2 ) {
            this.goku_discount = - (Math.floor(this.goku_count/2)*this.goku_price);
        }
        else {
            this.goku_discount = 0;
        }

        var summary_items = this.goku_count + this.naruto_count + this.luffy_count;
        var summary_price = this.goku_count*this.goku_price + this.naruto_count*this.naruto_price + this.luffy_count*this.luffy_price;
        var total_cost = summary_price + this.goku_discount + this.naruto_discount;
        update_html(summary_items, summary_price, total_cost);
    },
};

function update_html ( summary_items, summary_price, total_cost ) {
    //The function for updating the HTML elements
    document.getElementsByClassName('item_quantity')[0].textContent=app_state.goku_count;
    document.getElementsByClassName('item_quantity')[1].textContent=app_state.naruto_count;
    document.getElementsByClassName('item_quantity')[2].textContent=app_state.luffy_count;
    document.getElementsByClassName('summary_items_span')[0].textContent=summary_items;
    document.getElementsByClassName('summary_price_span')[0].textContent=summary_price;
    document.getElementsByClassName('goku_discount_span')[0].textContent=app_state.goku_discount;
    document.getElementsByClassName('naruto_discount_span')[0].textContent=app_state.naruto_discount;
    document.getElementsByClassName('total_cost_span')[0].textContent=total_cost;

    document.getElementsByClassName('item_price_span')[0].textContent=app_state.goku_count*app_state.goku_price;
    document.getElementsByClassName('item_price_span')[1].textContent=app_state.naruto_count*app_state.naruto_price;
    document.getElementsByClassName('item_price_span')[2].textContent=app_state.luffy_count*app_state.luffy_price;
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