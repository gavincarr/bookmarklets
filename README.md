
This is a collection of bookmarklets written by @gavincarr.

fill_form_from_url.js
---------------------

This bookmarklet fills out form fields based on the query parameter values
in your URL. This often allows you to create custom links to pages that do
not normally accept form values from query parameters, and force their
population. I use it, for instance, for bill payment links where I want to
pre-populate non-sensitive data in forms.

(Warning: you probably should NOT use this for sensitive data like
passwords or credit card numbers!)

To install, drag the link below to your to somewhere in your bookmarks toolbar.

<a href="javascript:(function(doc){var body = doc.getElementsByTagName('body')[0],script = doc.createElement('script');script.src = '//github.com/gavincarr/bookmarklets/blob/master/fill_form_from_url.js';body.appendChild(script);}(window.document));">Fill Form From URL</a>

