"""
minify_js.py

JavaScript 'minifier' written in Python

"""

import re

def minify_js(js):
    minified_js = ''
    lines = js.split('\n')
    for line in lines:
        this_minified_js = line.split('//')[0]
        this_minified_js = this_minified_js.replace('\n','')
        this_minified_js = re.sub(r'\s+', ' ', this_minified_js).strip()
        this_minified_js = this_minified_js.replace('if (', 'if(')
        this_minified_js = this_minified_js.replace(' !==', '!==')
        minified_js += this_minified_js
    return minified_js
