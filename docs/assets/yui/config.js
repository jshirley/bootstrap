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
                filter    : 'debug',
                combine   : false,
                root      : 'http://yui.shirley.im/combo?blead-bootstrap/build/',
                base      : 'http://yui.shirley.im/combo?blead-bootstrap/build/',
                patterns  : {
                    "gallery-"    : {},
                    "gallerycss-" : { type : "css" }
                }
            },
            customgallerycss : {
                combine   : false,
                root      : 'http://yui.shirley.im/combo?blead-bootstrap/build/',
                base      : 'http://yui.shirley.im/combo?blead-bootstrap/build/',
           }
       }
    };
}());

