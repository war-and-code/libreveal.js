// libreveal.js v1.0

//jquery
if (typeof jQuery !== 'undefined' && typeof jQuery.fn !== 'undefined')
{
    console.log('libreveal.js: jquery @ ' + jQuery.fn.jquery);
}
else if (typeof $ !== 'undefined' && typeof $.fn !== 'undefined')
{
    console.log('libreveal.js: jquery @ ' + $.fn.jquery);
}
else if (typeof $j !== 'undefined' && typeof $j.fn !== 'undefined')
{
    console.log('libreveal.js: jquery @ ' + $j.fn.jquery);
}
else if (typeof $jq !== 'undefined' && typeof $jq.fn !== 'undefined')
{
    console.log('libreveal.js: jquery @ ' + $jq.fn.jquery);
}

// angularjs
if (typeof angular !== 'undefined' && typeof angular.version !== 'undefined')
{
    console.log('libreveal.js: angularjs @ ' + angular.version.full);
}

// bootstrap
if (typeof $ !== 'undefined' && typeof $.fn !== 'undefined' && typeof $.fn.tooltip !== 'undefined' && typeof $.fn.tooltip.Constructor !== 'undefined')
{
    console.log('libreveal.js: bootstrap @ ' + $.fn.tooltip.Constructor.VERSION);
}

// YUI
if (typeof YUI !== 'undefined')
{
    console.log('libreveal.js: YUI @ ' + YUI.version);
}