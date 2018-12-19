// libreveal.js

// jQuery
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined" && typeof jQuery.fn.jquery !== "undefined")
{
	console.log("libreveal.js: jQuery @ " + jQuery.fn.jquery);
}
else if (typeof $ !== "undefined" && typeof $.fn !== "undefined" && typeof $.fn.jquery !== "undefined")
{
	console.log("libreveal.js: jQuery @ " + $.fn.jquery);
}
else if (typeof $jq !== "undefined" && typeof $jq.fn !== "undefined" && typeof $jq.fn.jquery !== "undefined")
{
	console.log("libreveal.js: jQuery @ " + $jq.fn.jquery);
}
else if (typeof $j !== "undefined" && typeof $j.fn !== "undefined" && typeof $j.fn.jquery !== "undefined")
{
	console.log("libreveal.js: jQuery @ " + $j.fn.jquery);
}
else if (typeof require !== "undefined" && typeof require('jquery').fn !== "undefined" && typeof require('jquery').fn.jquery !== "undefined")
{
	console.log("libreveal.js: jQuery @ " + require('jquery').fn.jquery);
}

// jquery-validator
if (typeof jQuery !== "undefined" && typeof jQuery.validation !== "undefined" && typeof jQuery.validation.version !== "undefined")
{
	console.log("libreveal.js: jquery-validator @ " + jQuery.validation.version);
}

// jquery-mobile
if (typeof jQuery !== "undefined" && typeof jQuery.mobile !== "undefined" && typeof jQuery.mobile.version !== "undefined")
{
	console.log("libreveal.js: jquery-mobile @ " + jQuery.mobile.version);
}

// jquery-ui
if (typeof jQuery !== "undefined" && typeof jQuery.ui !== "undefined" && typeof jQuery.ui.dialog !== "undefined" && typeof jQuery.ui.dialog.version !== "undefined")
{
	console.log("libreveal.js: jquery-ui @ " + jQuery.ui.dialog.version);
}
else if (typeof jQuery !== "undefined" && typeof jQuery.ui !== "undefined" && typeof jQuery.ui.autocomplete !== "undefined" && typeof jQuery.ui.autocomplete.version !== "undefined")
{
	console.log("libreveal.js: jquery-ui @ " + jQuery.ui.autocomplete.version);
}
else if (typeof jQuery !== "undefined" && typeof jQuery.ui !== "undefined" && typeof jQuery.ui.tooltip !== "undefined" && typeof jQuery.ui.tooltip.version !== "undefined")
{
	console.log("libreveal.js: jquery-ui @ " + jQuery.ui.tooltip.version);
}

// jquery-prettyPhoto
if (typeof jQuery !== "undefined" && typeof jQuery.prettyPhoto !== "undefined" && typeof jQuery.prettyPhoto.version !== "undefined")
{
	console.log("libreveal.js: jquery-prettyPhoto @ " + jQuery.prettyPhoto.version);
}

// jPlayer

// tinymce
if (typeof tinyMCE !== "undefined" && typeof tinyMCE.majorVersion !== "undefined")
{
	console.log("libreveal.js: tinymce @ " + tinyMCE.majorVersion + '.'+ tinyMCE.minorVersion);
}

// yui
if (typeof YUI !== "undefined" && typeof YUI.Version !== "undefined")
{
	console.log("libreveal.js: yui @ " + YUI.Version);
}
else if (typeof YAHOO !== "undefined" && typeof YAHOO.VERSION !== "undefined")
{
	console.log("libreveal.js: yui @ " + YAHOO.VERSION);
}

// prototypejs
if (typeof Prototype !== "undefined" && typeof Prototype.Version !== "undefined")
{
	console.log("libreveal.js: prototypejs @ " + Prototype.Version);
}

// ember
if (typeof Ember !== "undefined" && typeof Ember.VERSION !== "undefined")
{
	console.log("libreveal.js: ember @ " + Ember.VERSION);
}

// dojo
if (typeof dojo !== "undefined" && typeof dojo.version !== "undefined" && typeof dojo.version.toString() !== "undefined")
{
	console.log("libreveal.js: dojo @ " + dojo.version.toString());
}

// angularjs
if (typeof angular !== "undefined" && typeof angular.version !== "undefined" && typeof angular.version.full !== "undefined")
{
	console.log("libreveal.js: angularjs @ " + angular.version.full);
}

// backbonejs
if (typeof Backbone !== "undefined" && typeof Backbone.VERSION !== "undefined")
{
	console.log("libreveal.js: backbonejs @ " + Backbone.VERSION);
}

// mustache.js
if (typeof Mustache !== "undefined" && typeof Mustache.version !== "undefined")
{
	console.log("libreveal.js: mustache.js @ " + Mustache.version);
}

// handlebars
if (typeof Handlebars !== "undefined" && typeof Handlebars.VERSION !== "undefined")
{
	console.log("libreveal.js: handlebars @ " + Handlebars.VERSION);
}

// Plupload
if (typeof plupload !== "undefined" && typeof plupload.VERSION !== "undefined")
{
	console.log("libreveal.js: Plupload @ " + plupload.VERSION);
}

// dompurify
if (typeof DOMPurify !== "undefined" && typeof DOMPurify.version !== "undefined")
{
	console.log("libreveal.js: dompurify @ " + DOMPurify.version);
}

// react
if (typeof react !== "undefined" && typeof react.version !== "undefined")
{
	console.log("libreveal.js: react @ " + react.version);
}
else if (typeof require !== "undefined" && typeof require('react').version !== "undefined")
{
	console.log("libreveal.js: react @ " + require('react').version);
}

// DWR
if (typeof dwr !== "undefined" && typeof dwr.version !== "undefined")
{
	console.log("libreveal.js: DWR @ " + dwr.version);
}

// moment
if (typeof moment !== "undefined" && typeof moment.version !== "undefined")
{
	console.log("libreveal.js: moment @ " + moment.version);
}

// ckeditor
if (typeof CKEDITOR !== "undefined" && typeof CKEDITOR.version !== "undefined")
{
	console.log("libreveal.js: ckeditor @ " + CKEDITOR.version);
}

// vue
if (typeof Vue !== "undefined" && typeof Vue.version !== "undefined")
{
	console.log("libreveal.js: vue @ " + Vue.version);
}

// ExtJS
if (typeof Ext !== "undefined")
{
	console.log("libreveal.js: ExtJS @ " + Ext && Ext.versions && Ext.versions.extjs.version);
}
else if (typeof Ext !== "undefined")
{
	console.log("libreveal.js: ExtJS @ " + Ext && Ext.version);
}

// bootstrap
if (typeof $ !== "undefined" && typeof $.fn !== "undefined" && typeof $.fn.tooltip !== "undefined" && typeof $.fn.tooltip.Constructor !== "undefined" && typeof $.fn.tooltip.Constructor.VERSION !== "undefined")
{
	console.log("libreveal.js: bootstrap @ " + $.fn.tooltip.Constructor.VERSION);
}