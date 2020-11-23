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

        //Summarizing the items count, items price and total price to pass into the function that will do DOM-changes
        var summary_array = [];
        summary_array[0] = this.count[0] + this.count[1] + this.count[2];
        summary_array[1] = this.count[0]*this.price[0] + this.count[1]*this.price[1] + this.count[2]*this.price[2];
        summary_array[2] = summary_array[1] + this.discount[0] + this.discount[1];
        update_html( summary_array ); //Function for changing the DOM and displaying the actual cart info
    }
};

function update_html ( summary_array ) {
    //The function for updating the HTML elements
    for ( i=0; i<=2; i++) {
        document.getElementsByClassName('item_quantity')[i].textContent=app_state.count[i];
        document.getElementsByClassName('item_price_span')[i].textContent=app_state.count[i]*app_state.price[i];
        document.getElementsByClassName('summary_span')[i].textContent=summary_array[i];
    }

    for ( i=0; i<2; i++) {
        document.getElementsByClassName('discount_span')[i].textContent=app_state.discount[i];
    }
}


// Starting the code on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    //The initiall filling of HTML elements
    update_html( 5, 70, 62);

    for(i=0; i<=2; i++) {
        let z = i;
        //Click on "+" buttons
        document.getElementsByClassName('item_quantity_plus')[z].addEventListener('click', function() {
            app_state.item_change(z, +1);
        });

        //Click on "-" buttons
        document.getElementsByClassName('item_quantity_minus')[z].addEventListener('click', function() {
            if ( document.getElementsByClassName('item_quantity')[z].textContent != 0 ) {
                app_state.item_change(z, -1);
            }
        });
    }

    document.getElementsByClassName('checkout_btn')[0].addEventListener('click',function(e) {
        e.preventDefault();
    })

});