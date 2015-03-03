# observ-remotemedia

This is an observable structure that can be used to fetch remote media
objects using [`binary-xhr`](https://github.com/maxogden/binary-xhr)
and convert them into local object urls for rendering.


[![NPM](https://nodei.co/npm/observ-remotemedia.png)](https://nodei.co/npm/observ-remotemedia/)



## Why?

This module exists as it is makes it possible to write your code in a
way that works for both simple webapp that will be rendered in the
browser and also in chrome applications that are
[not able to reference external resources](https://developer.chrome.com/apps/app_external#external).

## License(s)

### ISC

Copyright (c) 2015, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
