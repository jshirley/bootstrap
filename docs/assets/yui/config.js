(function() {
    var filter  = (window.location.search.match(/[?&]filter=([^&]+)/) || [])[1] || 'min',
        gallery = 'gallery-2012.08.08-20-03';

    // YUI Config.
    YUI_config = {
        filter     : filter,
        combine    : filter === 'min',
        allowRollup: false,
        gallery    : gallery,
        groups : {
            customgallery : {
                combine   : false,
                root      : '/~jshirley/yui3-gallery/build/',
                base      : '/~jshirley/yui3-gallery/build/',
                patterns  : {
                    "gallery-"    : {},
                    "gallerycss-" : { type : "css" }
                }
            },
            customgallerycss : {
                combine   : false,
                root      : '/~jshirley/yui3-gallery/build/',
                base      : '/' + gallery + '/build/'
           }
       }
    };
}());

