
These are "test cases" for the function `get_js_existence_logic_from_function` from `compile.py`

---

In: `jQuery.fn.jquery`

Out: `(typeof jQuery !== 'undefined' && typeof jQuery.fn !== 'undefined')`

---

In: `$.fn.jquery`

Out: `(typeof $ !== 'undefined' && typeof $.fn !== 'undefined')`

---

In: `angular.version.full`

Out: `(typeof angular !== 'undefined' && typeof angular.version !== 'undefined')`

---

In: `$j.fn.jquery`

Out: `(typeof $j !== 'undefined' && typeof $j.fn !== 'undefined')`

---

In: `$jq.fn.jquery`

Out: `(typeof $jq !== 'undefined' && typeof $jq.fn !== 'undefined')`

---

In: `$.fn.tooltip.Constructor.VERSION`

Out: `(typeof $ !== 'undefined' && typeof $.fn !== 'undefined' && typeof $.fn.tooltip !== 'undefined' && typeof $.fn.tooltip.Constructor !== 'undefined')`

