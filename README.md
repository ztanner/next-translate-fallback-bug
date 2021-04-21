# Fallback Bug

To reproduce this bug, run the dev server (`yarn dev`), and visit http://localhost:3000/nested/3 - you'll see the i18n key (common:title) rendered on the page. This is a fallback page.

If you visit http://localhost:3000/nested/1, you will see the properly translated text, as this was not a fallback.