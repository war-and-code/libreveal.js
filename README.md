
# libreveal.js

Reveals third-party JavaScript libraries in use.

Developed as a hacking tool. You should know what libraries are in use for your own apps, probably.

## Usage

Execute the contents of [**libreveal.min.js**](https://github.com/gingeleski/libreveal.js/blob/master/libreveal.min.js) on your target page via the developer tools console.

See the unminified [**libreveal.js**](https://github.com/gingeleski/libreveal.js/blob/master/libreveal.js) script if you're curious how this works and/or what checks are run.

## Supported libraries

Currently this will detect...

- jQuery
    - jQuery Validator
    - jQuery Mobile
    - jQuery UI
    - jQuery Pretty Photo
- tinymce
- YUI
- Prototype
- Ember
- Dojo
- Angular
- Backbone
- Mustache
- Handlebars
- Plupload
- dompurify
- React
- DWR
- Moment
- CKEditor
- Vue
- ExtJS
- Bootstrap

## Updating

Run the Python script `compile.py` that's in `src/` to sync this with RetireJS.

Integrate your own edits via the libreveal file in `src/json/`.

There are no dependencies - just `cd` into `src/` and run `python compile.py` (note Python 3.x is needed though).

## Credit

Derived in part from [**retire.js**](https://github.com/retirejs/retire.js/) identifiers - this stands on the shoulders of that project.
