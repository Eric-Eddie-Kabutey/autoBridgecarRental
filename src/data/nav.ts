export const navData = [
    {
        name: 'BUY NOW - PAY LATER',
        href: '/buy-now-pay-later',
        hasDropdown: true,
        dropdownData: {
            desktopLayout: 'buyers',
            sections: [
                {
                    heading: 'For Buyers',
                    items: [
                        { title: 'Purchaser Benefits', desc: '', href: '#' },
                        { title: 'Transportation with CarOnSale', desc: 'Safe and fast vehicle transport', href: '#' },
                        { title: 'Buy Now, Pay Later', desc: 'Flexible Payment Options for Your Car Purchase', href: '#' },
                    ]
                },
                {
                    heading: 'For Seller',
                    items: [
                        { title: 'Vehicle brands', desc: 'The CarOnSale used car guide', href: '#' },
                        { title: 'Trade-ins', desc: 'Everything about trade-ins for dealers', href: '#' },
                        { title: 'Buy leasing returns', desc: 'Everything about leasing returns for dealers', href: '#' },
                        { title: 'Accident cars', desc: 'Everything about accident vehicles for dealers', href: '#' },
                        { title: 'Glossary', desc: 'Everything about terms from the car trade', href: '#' },
                    ]
                }
            ]
        }
    },
    {
        name: 'OUR SERVICES',
        href: '/#services',
        hasDropdown: true,
        dropdownData: {
            desktopLayout: 'buyers',
            sections: [
                {
                    heading: 'For Buyers',
                    items: [
                        { title: 'Vehicle Brands', desc: '', href: '/services' },
                        { title: 'Purchaser Benefits', desc: '', href: '#' },
                        { title: 'Buy Now, Pay Later', desc: '', href: '#' },
                        { title: 'Rent', desc: '', href: '#' },
                    ]
                },
                {
                    heading: 'For Seller',
                    items: [
                        { title: 'Trade ins', desc: '', href: '/services' },
                        { title: 'Sell my car', desc: '', href: '#' },
                        { title: 'Glossary', desc: '', href: '#' },                        
                    ]
                }
            ]
        }
    },
    {
        name: 'ABOUT US',
        href: '/about-us',
        hasDropdown: true,
        dropdownData: {
            desktopLayout: 'about',
            sections: [
                {
                    heading: 'Overview',
                    items: [
                        { title: 'About us', desc: 'Find out more about CarOnSale!', href: '#' },
                        { title: 'Contact us', desc: 'Would you like to make a press inquiry?', href: '#' },
                        { title: 'Blog', desc: 'The CarOnSale Blog', href: '#' },
                        {
                            title: 'Career', desc: 'Become part of our team! (everything under the nav bar career should come inside career when you click on it.) ', href: '#' },
                    ]
                },                
                {
                    heading: 'Press News',
                    theme: 'gray', // Triggers gray backgrounds and lines instead of yellow
                    subtitle: 'The CarOnSale Newsroom',
                    type: 'cards',
                    items: [
                        {
                            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop",
                            title: "CarOnSale cooperates with Mercedes-Benz",
                            desc: "CarOnSale launches auction platform for lease...",
                            href: "#"
                        },
                        {
                            image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=300&auto=format&fit=crop",
                            title: "CarOnSale takes over Alpha Online",
                            desc: "From vehicle collection to B2B marketing - everything...",
                            href: "#"
                        }
                    ]
                }
            ]
        }
    },
    {
        name: 'OUR FLEET',
        href: '/cars',
        hasDropdown: false
    },
]

