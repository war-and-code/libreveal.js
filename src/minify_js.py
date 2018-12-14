"""
minify_js.py

JavaScript 'minifier' written in Python

"""

import re

def minify_js(js):
    minified_js = js.replace('\n', ' ')
    minified_js = re.sub(r'\s+', ' ', minified_js).strip()
    return minified_js
