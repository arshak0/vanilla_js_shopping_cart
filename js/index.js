var app_state = {
    price: [5, 20, 7.5],
    count: [2, 3, 0],
    discount: [-5, -3],
    item_change: function( item, change_var ) {
        console.log(item)
        console.log(change_var)
        this.count[item] += change_var;

        //Check for GOKU
        if ( this.count[0] >= 2 ) {
            this.discount[0] = - (Math.floor(this.count[0]/2)*this.price[0]);
        }
        else {
            this.discount[0] = 0;
        }
        //--End of check of GOKU

        //Check for NARUTO
        if ( this.count[1] >= 3 ) {
            this.discount[1] = - this.count[1];
        }
        else {
            this.discount[1] = 0;
        }
        //--End of check of NARUTO

        var summary_items = this.count[0] + this.count[1] + this.count[2];
        var summary_price = this.count[0]*this.price[0] + this.count[1]*this.price[1] + this.count[2]*this.price[2];
        var total_cost = summary_price + this.discount[0] + this.discount[1];
        update_html(summary_items, summary_price, total_cost);
    }
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

    for(i=0; i<=2; i++) {
        let z = i;
        //Click on "+" buttons
        document.getElementsByClassName('item_quantity_plus')[z].addEventListener('click', function() {
            app_state.item_change(z, +1);
        });
        //---End of click on "+" buttons

        //Click on "-" buttons
        document.getElementsByClassName('item_quantity_minus')[z].addEventListener('click', function() {
            if ( document.getElementsByClassName('item_quantity')[z].textContent != 0 ) {
                app_state.item_change(z, -1);
            }
        });
        //---End of click on "-" buttons
    }

    document.getElementsByClassName('checkout_btn')[0].addEventListener('click',function(e) {
        e.preventDefault();
    })

});