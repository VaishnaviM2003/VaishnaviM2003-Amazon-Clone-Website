(function () {
    var app = angular.module('amazonApp', []);

    app.controller('MainController', function ($scope) {
      // Your data for boxes
      $scope.boxes = [
        { 
            title: 'Health & Personal care',
            image: '/images/box1_image.jpg',
            link: 'https://www.amazon.com/s/?_encoding=UTF8&i=specialty-aps&bbn=16225006011&rh=n%3A!16225006011%2Cn%3A3777891&ref=nav_em__nav_desktop_sa_intl_personal_care_0_2_11_9&pd_rd_w=jxt1Y&content-id=amzn1.sym.eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=a17td&pd_rd_r=adc4d922-27d6-4937-b34f-dac915a2abc7&ref_=pd_gw_un'
        },

        {
            title: 'Refresh your space',
            image: '/images/box2_image.jpg',
            link: 'https://www.amazon.com/gp/goldbox/?ie=UTF8&ref_=nav_cs_gb&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%2522957D18D8132C0FCBA2EA0F57FEB9A3F8%2522%252C%2522departments%2522%253A%255B%25221055398%2522%255D%252C%2522sorting%2522%253A%2522BY_SCORE%2522%257D&pd_rd_w=zNei6&content-id=amzn1.sym.c0480761-6b7c-400b-bca5-28ff417248d1&pf_rd_p=c0480761-6b7c-400b-bca5-28ff417248d1&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=a17td&pd_rd_r=adc4d922-27d6-4937-b34f-dac915a2abc7'
        },

        {
            title: 'Furniture',
            image: '/images/box3_image.jpg',
            link: 'https://www.amazon.com/s/?_encoding=UTF8&i=garden&srs=117030914011&bbn=1063306&rh=n%3A1055398%2Cn%3A1063306%2Cp_90%3A8308921011&s=price-desc-rank&ref_=roarr_gw_1023_Furniture_OD_bf_DSCC&pd_rd_w=4xZhC&content-id=amzn1.sym.664445f4-e24f-42c8-8613-1c15be2d6a54&pf_rd_p=664445f4-e24f-42c8-8613-1c15be2d6a54&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=KtXl3&pd_rd_r=449152da-81d7-4e0e-a6a5-8b8f79aed4c3'
        },

        {
            title: 'Electronics',
            image: '/images/box4_image.jpg',
            link: 'https://www.amazon.com/b/?_encoding=UTF8&node=16225009011&pd_rd_w=3ofsE&content-id=amzn1.sym.5232c45b-5929-4ff0-8eae-5f67afd5c3dc&pf_rd_p=5232c45b-5929-4ff0-8eae-5f67afd5c3dc&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=a17td&pd_rd_r=adc4d922-27d6-4937-b34f-dac915a2abc7&ref_=pd_gw_unk'
        },
        
        {
            title: 'Beauty pics',
            image: '/images/box5_image.jpg',
            link: 'https://www.amazon.com/b/?_encoding=UTF8&node=16225006011&pd_rd_w=WqAfC&content-id=amzn1.sym.4a5ac24a-2f14-4296-8a03-0c034c0a7904&pf_rd_p=4a5ac24a-2f14-4296-8a03-0c034c0a7904&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=a17td&pd_rd_r=adc4d922-27d6-4937-b34f-dac915a2abc7&ref_=pd_gw_unk'
        },

        {
            title: 'Home & Kitchen',
            image: '/images/box9.jpg',
            link: 'https://www.amazon.com/s/?_encoding=UTF8&k=home&i=garden&rh=n%3A1055398%2Cp_36%3A-3000&dc=&crid=12198XD9ZHIG6&qid=1663266142&rnid=386465011&sprefix=hom%2Caps%2C248&ref=sr_nr_p_36_5&pd_rd_w=X77De&content-id=amzn1.sym.f82a0c18-ae2a-47cf-82ad-c85f0a157136&pf_rd_p=f82a0c18-ae2a-47cf-82ad-c85f0a157136&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=a17td&pd_rd_r=adc4d922-27d6-4937-b34f-dac915a2abc7&ref_=pd_gw_unk'
        },

        {
            title: 'New arrivals in Toys',
            image: '/images/box7_image.jpg',
            link: 'https://www.amazon.com/s/?_encoding=UTF8&k=toys&s=date-desc-rank&qid=1632870778&ref=sr_st_date-desc-rank&pd_rd_w=A7teY&content-id=amzn1.sym.779cadfb-bc4d-465d-931f-0b68c1ba5cd5&pf_rd_p=779cadfb-bc4d-465d-931f-0b68c1ba5cd5&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=KtXl3&pd_rd_r=449152da-81d7-4e0e-a6a5-8b8f79aed4c3&ref_=pd_gw_unk'
        },

        {
            title: 'Discover fashion trends',
            image: '/images/box8_image.jpg',
            link: 'https://www.amazon.com/s/?_encoding=UTF8&k=spring%20fashion%20trends&crid=27JAPFCJF50YO&sprefix=spring%20fashion%20trends%2Caps%2C174&ref=nb_sb_noss_1&pd_rd_w=3rHeL&content-id=amzn1.sym.b14a5e39-de66-4033-bb36-c04fed7f5597&pf_rd_p=b14a5e39-de66-4033-bb36-c04fed7f5597&pf_rd_r=ZDWE5TTXHBSJCZH9144X&pd_rd_wg=KtXl3&pd_rd_r=449152da-81d7-4e0e-a6a5-8b8f79aed4c3&ref_=pd_gw_unk'
        }       
      ]
    });
})();
