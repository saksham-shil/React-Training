// STICKY JS STARTS

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('#wide-nav').addClass('sticky');
    } else {
      $('#wide-nav').removeClass('sticky');
    }
  });

// STICKY JS ENDS



// STICKY JS STARTS

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.mobile-header').addClass('sticky');
    } else {
      $('.mobile-header').removeClass('sticky');
    }
  });

// STICKY JS ENDS




// HOME BANNER JS STARTS

    $(document).ready(function(){
        $('#home-banner').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsiveClass:true,
          items:1,
          responsive:{
            0:{
                items:1,
                nav:false
            },
            568:{
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME BANNER JS ENDS



// HOME BANNER JS STARTS

    $(document).ready(function(){
        $('#testimonial').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          dots: true,
          responsiveClass:true,
          items:1,
          responsive:{
            0:{
                items:1,
                nav:true
            },
            568:{
                items:1,
                nav:true
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME BANNER JS ENDS



// HOME DESIGNER BANNER JS STARTS

    $(document).ready(function(){
        $('#designer-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:4,
          center: true,
          responsive:{
            0:{
                nav:false,
                dots:true,
                items:1
            },
            568:{
                nav:false,
                dots:true,
                items:2
            },
            1000:{
                nav:true,
                dots:false
            }
          }
        });
    });

// HOME DESIGNER BANNER JS ENDS



// HOME NEW-ARRIVAL BANNER JS STARTS

    $(document).ready(function(){
        $('#new-arrival').owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:4,
          center: true,
          responsive:{
            0:{
                items:1,
                nav:false
            },
            568:{
                items:2,
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME NEW-ARRIVAL BANNER JS ENDS



// HOME ACCESSORIES MEN BANNER JS STARTS

    $(document).ready(function(){
        $('#men-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:3,
          responsive:{
            0:{
                items:2,
                nav:false
            },
            568:{
                items:3,
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME ACCESSORIES MEN BANNER JS ENDS



// HOME ACCESSORIES WOMEN BANNER JS STARTS

    $(document).ready(function(){
        $('#women-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:3,
          responsive:{
            0:{
                items:2,
                nav:false
            },
            568:{
                items:3,
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME ACCESSORIES WOMEN BANNER JS ENDS



// HOME ACCESSORIES FOOTWEAR BANNER JS STARTS

    $(document).ready(function(){
        $('#footwear-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:3,
          responsive:{
            0:{
                items:2,
                nav:false
            },
            568:{
                items:3,
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME ACCESSORIES FOOTWEAR BANNER JS ENDS



// HOME BEST-SELLER BRANDS BANNER JS STARTS

    $(document).ready(function(){
        $('#bestseller-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:3,
          responsive:{
            0:{
                items:2,
                nav:false
            },
            568:{
                items:3,
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME BEST-SELLER BRANDS BANNER JS ENDS



// HOME RECENT VIEWED BANNER JS STARTS

    $(document).ready(function(){
        $('#recent-viewed').owlCarousel({
          loop:true,
          margin:25,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:4,
          center: true,
          responsive:{
            0:{
                center: false,
                items:2,
                nav:false
            },
            568:{
                items:3,
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME RECENT VIEWED BANNER JS ENDS



// HOME RECENT VIEWED BANNER JS STARTS

    $(document).ready(function(){
        $('#recent-viewed_1').owlCarousel({
          loop:true,
          margin:15,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:4,
          responsive:{
            0:{
                items:2,
                nav:false
            },
            568:{
                nav:true
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME RECENT VIEWED BANNER JS ENDS



// HOME RECENT VIEWED BANNER JS STARTS

    $(document).ready(function(){
        $('#also-like').owlCarousel({
          loop:true,
          margin:15,
          dots: false,
          nav:true,
          responsiveClass:true,
          items:4,
          responsive:{
            0:{
                items:2,
                nav:false
            },
            568:{
                nav:true
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// HOME RECENT VIEWED BANNER JS ENDS



// BLOG BANNER JS STARTS

    $(document).ready(function(){
        $('#blog-banner').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          responsiveClass:true,
          items:1,
          responsive:{
            0:{
                items:1,
                nav:false
            },
            568:{
                nav:false
            },
            1000:{
                nav:false,
            }
          }
        });
    });

// BLOG BANNER JS ENDS




// PRODUCT IMAGE MAIN BANNER JS STARTS

    $(document).ready(function(){
        $('#product-image-main-banner').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          dots: true,
          responsiveClass:true,
          items:1,
          responsive:{
            0:{
                items:1,
                nav:false
            },
            568:{
                nav:false
            },
            1000:{
                nav:true,
            }
          }
        });
    });

// PRODUCT IMAGE MAIN BANNER JS ENDS




// $("#zoom_03").elevateZoom({gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'}); 

//pass the images to Fancybox
// $("#zoom_03").bind("click", function(e) {  
//   var ez =   $('#zoom_03').data('elevateZoom'); 
//     $.fancybox(ez.getGalleryList());
//   return false;
// });


// PRODUCT-PAGE SIZE JS STARTS

    function sizeFunction() {
        $("#main-size").css({"display":"none"});
        $("#inner-size").css({"display":"block"});
    }

// PRODUCT-PAGE SIZE JS ENDS


// SIZE GUIDE JS STARTS

    function sizeGuideFunction() {
        $("#size-guide-form").css({"display":"block"});
    }
    function sizeGuideCloseFunction() {
        $("#size-guide-form").css({"display":"none"});
    }


// SIZE GUIDE JS ENDS


// SIDE FILTER FUNCTION JS STARTS

    function filterswitchdesignFunction() {
        $("#design-filter-mobile").css({"display":"block"});
        $("#type-filter-mobile").css({"display":"none"});
        $("#size-filter-mobile").css({"display":"none"});
        $("#discount-filter-mobile").css({"display":"none"});
        $("#season-filter-mobile").css({"display":"none"});
        $("#price-filter-mobile").css({"display":"none"});
        $("#color-filter-mobile").css({"display":"none"});
    }
    function filterswitchtypeFunction() {
        $("#design-filter-mobile").css({"display":"none"});
        $("#type-filter-mobile").css({"display":"block"});
        $("#size-filter-mobile").css({"display":"none"});
        $("#discount-filter-mobile").css({"display":"none"});
        $("#season-filter-mobile").css({"display":"none"});
        $("#price-filter-mobile").css({"display":"none"});
        $("#color-filter-mobile").css({"display":"none"});
    }
    function filterswitchsizeFunction() {
        $("#design-filter-mobile").css({"display":"none"});
        $("#type-filter-mobile").css({"display":"none"});
        $("#size-filter-mobile").css({"display":"block"});
        $("#discount-filter-mobile").css({"display":"none"});
        $("#season-filter-mobile").css({"display":"none"});
        $("#price-filter-mobile").css({"display":"none"});
        $("#color-filter-mobile").css({"display":"none"});
    }
    function filterswitchdiscountFunction() {
        $("#design-filter-mobile").css({"display":"none"});
        $("#type-filter-mobile").css({"display":"none"});
        $("#size-filter-mobile").css({"display":"none"});
        $("#discount-filter-mobile").css({"display":"block"});
        $("#season-filter-mobile").css({"display":"none"});
        $("#price-filter-mobile").css({"display":"none"});
        $("#color-filter-mobile").css({"display":"none"});
    }
    function filterswitchseasonFunction() {
        $("#design-filter-mobile").css({"display":"none"});
        $("#type-filter-mobile").css({"display":"none"});
        $("#size-filter-mobile").css({"display":"none"});
        $("#discount-filter-mobile").css({"display":"none"});
        $("#season-filter-mobile").css({"display":"block"});
        $("#price-filter-mobile").css({"display":"none"});
        $("#color-filter-mobile").css({"display":"none"});
    }
    function filterswitchpriceFunction() {
        $("#design-filter-mobile").css({"display":"none"});
        $("#type-filter-mobile").css({"display":"none"});
        $("#size-filter-mobile").css({"display":"none"});
        $("#discount-filter-mobile").css({"display":"none"});
        $("#season-filter-mobile").css({"display":"none"});
        $("#price-filter-mobile").css({"display":"block"});
        $("#color-filter-mobile").css({"display":"none"});
    }
    function filterswitchcolorFunction() {
        $("#design-filter-mobile").css({"display":"none"});
        $("#type-filter-mobile").css({"display":"none"});
        $("#size-filter-mobile").css({"display":"none"});
        $("#discount-filter-mobile").css({"display":"none"});
        $("#season-filter-mobile").css({"display":"none"});
        $("#price-filter-mobile").css({"display":"none"});
        $("#color-filter-mobile").css({"display":"block"});
    }


// SIDE FILTER FUNCTION JS ENDS




// SIZE GUIDE FULL JS STARTS

    function sizeGuideFullFunction() {
        $("#size-guide-form").css({"display":"none"});
        $("#size-guide-full-form").css({"display":"block"});
    }
    function sizeGuideFullCloseFunction() {
        $("#size-guide-full-form").css({"display":"none"});
    }
    function sizeGuideFullBackFunction() {
        $("#size-guide-full-form").css({"display":"none"});
        $("#size-guide-form").css({"display":"block"});
    }


// SIZE GUIDE FULL JS ENDS


// EDIT FORM JS STARTS

    function editform() {
        if($("input").attr("disabled")){
            $("input").removeAttr("disabled");
            $("#state").removeAttr("disabled");
            $("button.dropdown-toggle.select-address").removeAttr("disabled");
            $("input").attr('style', 'color: #000 !important');
            $(".grey-edit").css({"display":"block"});
            $(".blck-edit").css({"display":"none"});
        } else{
            $("input").prop('disabled', true);
            $("#state").prop('disabled', true);
            $("button.dropdown-toggle.select-address").removeAttr("disabled");
            $("input").attr('style', 'color: #949494 !important');
            $(".grey-edit").css({"display":"none"});
            $(".blck-edit").css({"display":"block"});
        }
    }

// EDIT FORM JS ENDS


// DROPDOWN JS STARTS

    $(function () {
            function init () {
                $('#test').selectScroll({
                    data: [
                        [{
                          text: 'add new address',
                          id: 1
                        },{
                           text: 'Manish Kumar, 68-B, Laxmi Market, New Delhi',
                           id: 2
                        },{
                          text: 'Khyati, New Delhi',
                          id: 3
                        }]
                  ],  
                    selectedIndex: [0],
                    cancel: function () {
                        console.log('Canceld')
                    }
                })
            }
            var $doc = $(document)
            $doc.on('click', '#test', init)
        });

// DROPDOWN JS ENDS


// DROPDOWN JS STARTS

    $(function () {
            function init () {
                $('#size_prod').selectScroll({
                    data: [
                        [{
                          text: 'XXS',
                          id: 1
                        },{
                           text: 'XS',
                           id: 2
                        },{
                          text: 'S',
                          id: 3
                        },{
                          text: 'M',
                          id: 4
                        },{
                          text: 'L',
                          id: 5
                        },{
                          text: 'XL',
                          id: 6
                        },{
                          text: 'XXL',
                          id: 7
                        },{
                          text: 'XXXL',
                          id: 8
                        }]
                  ],  
                    selectedIndex: [0],
                    cancel: function () {
                        console.log('Canceld')
                    }
                })
            }
            var $doc = $(document)
            $doc.on('click', '#size_prod', init)
        });

// DROPDOWN JS ENDS


// DROPDOWN JS STARTS

    $(function () {
            function init () {
                $('#state').selectScroll({
                    data: [
                        [{
                          text: 'Delhi',
                          id: 1
                        },{
                           text: 'Punjab',
                           id: 2
                        },{
                          text: 'Haryana',
                          id: 3
                        },{
                          text: 'Kerala',
                          id: 3
                        },{
                          text: 'Uttar Pradesh',
                          id: 3
                        },{
                          text: 'Andhra Pradesh',
                          id: 3
                        }]
                  ],  
                    selectedIndex: [0],
                    cancel: function () {
                        console.log('Canceld')
                    }
                })
            }
            var $doc = $(document)
            $doc.on('click', '#state', init)
        });

// DROPDOWN JS ENDS


// DROPDOWN JS STARTS

    $(function () {
            function init () {
                $('#countrycode').selectScroll({
                    data: [
                        [{
                          text: '+91 India',
                          id: 1
                        },{
                           text: '+39 Italy',
                           id: 2
                        },{
                          text: '+1 USA',
                          id: 3
                        },{
                          text: '+49 Germanny',
                          id: 4
                        },{
                          text: '+92 Pakistan',
                          id: 5
                        }]
                  ],  
                    selectedIndex: [0],
                    cancel: function () {
                        console.log('Canceld')
                    }
                })
            }
            var $doc = $(document)
            $doc.on('click', '#countrycode', init)
        });

// DROPDOWN JS ENDS


// DROPDOWN JS STARTS

    $(function () {
            function init () {
                $('#issue').selectScroll({
                    data: [
                        [{
                          text: 'Genral query',
                          id: 1
                        },{
                           text: 'Order related query',
                           id: 2
                        },{
                          text: 'Account related query',
                          id: 3
                        },{
                          text: 'Product availablity',
                          id: 4
                        },{
                          text: 'Gift/promo related query',
                          id: 5
                        },{
                          text: 'Return/warranty related query',
                          id: 6
                        },{
                          text: 'Feedback',
                          id: 7
                        }]
                  ],  
                    selectedIndex: [0],
                    cancel: function () {
                        console.log('Canceld')
                    }
                })
            }
            var $doc = $(document)
            $doc.on('click', '#issue', init)
        });

// DROPDOWN JS ENDS


// DROPDOWN JS STARTS

    $(function () {
            function init () {
                $('#dob').selectScroll({
                    data: [
                        [{
                          text: '01',
                          id: 1
                        },{
                           text: '02',
                           id: 2
                        },{
                          text: '03',
                          id: 3
                        },{
                          text: '04',
                          id: 4
                        },{
                          text: '05',
                          id: 5
                        },{
                          text: '06',
                          id: 6
                        },{
                          text: '07',
                          id: 7
                        },{
                          text: '08',
                          id: 8
                        },{
                          text: '09',
                          id: 9
                        },{
                          text: '10',
                          id: 10
                        },{
                          text: '11',
                          id: 11
                        },{
                          text: '12',
                          id: 12
                        },{
                          text: '13',
                          id: 13
                        },{
                          text: '14',
                          id: 14
                        },{
                          text: '15',
                          id: 15
                        },{
                          text: '16',
                          id: 16
                        },{
                          text: '17',
                          id: 17
                        },{
                          text: '18',
                          id: 18
                        },{
                          text: '19',
                          id: 19
                        },{
                          text: '20',
                          id: 20
                        },{
                          text: '21',
                          id: 21
                        },{
                          text: '22',
                          id: 22
                        },{
                          text: '23',
                          id: 23
                        },{
                          text: '24',
                          id: 24
                        },{
                          text: '25',
                          id: 25
                        },{
                          text: '26',
                          id: 26
                        },{
                          text: '27',
                          id: 27
                        },{
                          text: '28',
                          id: 28
                        },{
                          text: '29',
                          id: 29
                        },{
                          text: '30',
                          id: 30
                        },{
                          text: '31',
                          id: 31
                        }],
                        [{
                          text: '01',
                          id: 1
                        },{
                           text: '02',
                           id: 2
                        },{
                          text: '03',
                          id: 3
                        },{
                          text: '04',
                          id: 4
                        },{
                          text: '05',
                          id: 5
                        },{
                          text: '06',
                          id: 6
                        },{
                          text: '07',
                          id: 7
                        },{
                          text: '08',
                          id: 8
                        },{
                          text: '09',
                          id: 9
                        },{
                          text: '10',
                          id: 10
                        },{
                          text: '11',
                          id: 11
                        },{
                          text: '12',
                          id: 12
                        }],
                        [{
                          text: '1990',
                          id: 1
                        },{
                           text: '1991',
                           id: 2
                        },{
                          text: '1992',
                          id: 3
                        },{
                          text: '1993',
                          id: 4
                        },{
                          text: '1994',
                          id: 5
                        },{
                          text: '1995',
                          id: 6
                        },{
                          text: '1996',
                          id: 7
                        },{
                          text: '1997',
                          id: 8
                        },{
                          text: '1998',
                          id: 9
                        },{
                          text: '1999',
                          id: 10
                        },{
                          text: '2000',
                          id: 11
                        },{
                          text: '2001',
                          id: 12
                        },{
                          text: '2002',
                          id: 13
                        },{
                          text: '2003',
                          id: 14
                        },{
                          text: '2004',
                          id: 15
                        },{
                          text: '2005',
                          id: 16
                        },{
                          text: '2006',
                          id: 17
                        },{
                          text: '2007',
                          id: 18
                        },{
                          text: '2008',
                          id: 19
                        },{
                          text: '2009',
                          id: 20
                        },{
                          text: '2010',
                          id: 21
                        },{
                          text: '2011',
                          id: 22
                        },{
                          text: '2012',
                          id: 23
                        },{
                          text: '2013',
                          id: 24
                        },{
                          text: '2014',
                          id: 25
                        },{
                          text: '2015',
                          id: 26
                        },{
                          text: '2016',
                          id: 27
                        },{
                          text: '2017',
                          id: 28
                        },{
                          text: '2018',
                          id: 29
                        },{
                          text: '2019',
                          id: 30
                        },{
                          text: '2020',
                          id: 31
                        },{
                          text: '2021',
                          id: 32
                        }]
                  ],  
                    selectedIndex: [0],
                    cancel: function () {
                        console.log('Canceld')
                    }
                })
            }
            var $doc = $(document)
            $doc.on('click', '#dob', init)
        });

// DROPDOWN JS ENDS