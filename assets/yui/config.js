(function() {
    var filter = (window.location.search.match(/[?&]filter=([^&]+)/) || [])[1] || 'min';

    // YUI Config.
    YUI_config = {
        filter     : filter,
        combine    : filter === 'min',
        allowRollup: false,
        gallery    : 'ii-gallery-2012.05.16',
        groups : {
            customgallery : {
                combine   : true,
                comboBase : 'http://yui.shirley.im/combo?',
                root      : 'ii-gallery-2012.05.16/build/',
                base      : '/ii-gallery-2012.05.16/build/',
                patterns  : {
                    "gallery-"    : {},
                    "gallerycss-" : { type : "css" }
                }
            },
            customgallerycss : {
                combine   : true,
                comboBase : 'http://yui.shirley.im/combo?',
                root      : 'ii-gallery-2012.05.16/build/',
                base      : '/ii-gallery-2012.05.16/build/'
           }
       }
    };
}());

