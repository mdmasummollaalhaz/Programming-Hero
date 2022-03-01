// JavaScript Object Notation
        //JSON
        const user = {
            id: 11,
            name: 'Akib',
            job: 'actor'
        };
        const stringified = JSON.stringify(user);

        // console.log(user);
        // console.log(stringified);



        const shop = {
            name: 'Alia Store',
            address: 'Dhaka',
            products: ['laptop', 'mobile', 'pepsi'],
            price: 1500,
            owner: {
                name: 'Alia',
                profession: 'actor'
            },
            isExpersice : false,
        }
        const shopStringified = JSON.stringify(shop);
        // console.log(shop);
        // console.log(shopStringified);
        const converted = JSON.parse(shopStringified);
        // console.log(converted);
        // console.log(converted.owner);