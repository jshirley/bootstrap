(function() {
    var filter  = (window.location.search.match(/[?&]filter=([^&]+)/) || [])[1] || 'min',
        gallery = 'gallery-blead', //'ii-gallery-2012.05.16',
        cdn     = 'http://cdn.prg.local:5006/combo?';

    // YUI Config.
    YUI_config = {
        filter     : filter,
        combine    : filter === 'min',
        allowRollup: false,
        gallery    : gallery,
        modules : {
            'gallery-bootstrap-misc' : {
                fullpath : 'http://localhost/~jshirley/yui3-gallery/build/gallery-bootstrap-misc/gallery-bootstrap-misc-debug.js'
            }
        },
        groups : {
            customgallery : {
                combine   : true,
                comboBase : cdn,
                root      : gallery + '/build/',
                base      : '/' + gallery + '/build/',
                patterns  : {
                    "gallery-"    : {},
                    "gallerycss-" : { type : "css" }
                }
            },
            customgallerycss : {
                combine   : true,
                comboBase : cdn,
                root      : gallery + '/build/',
                base      : '/' + gallery + '/build/'
           }
       }
    };
}());

