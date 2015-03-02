(function() {
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: '. . .',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'images/dodecahedron_full.png',
                    thumb: 'images/dodecahedron_thumb.jpg'
                }
            ]
        },

        {
            name: 'Pentagonal Prism',
            price: 6.66,
            description: '. . .',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'images/prism-pentagon_full.jpg',
                    thumb: 'images/pentagonal_prism_thumb.jpg'
                }
            ]
        },

        {
            name: 'Spherical Orb',
            price: 3.14,
            description: '. . .',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'images/sphere_full.png',
                    thumb: 'images/Green_sphere_thumb.png'
                }
            ]
        }


    ];

})();