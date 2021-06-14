<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isHexString

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test whether a string contains only hexadecimal digits.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-hex-string
```

</section>

<section class="usage">

## Usage

```javascript
var isHexString = require( '@stdlib/assert-is-hex-string' );
```

#### isHexString( value )

Tests whether a string contains only hexadecimal digits.

```javascript
var bool = isHexString( '0123456789abcdefABCDEF' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For non-string values, the function returns `false`.
-   The function does **not** recognize `x` (as in the standard `0x` prefix).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isHexString = require( '@stdlib/assert-is-hex-string' );

var out = isHexString( '0123456789abcdefABCDEF' );
// returns true

out = isHexString( '' );
// returns false

out = isHexString( '0xffffff' );
// returns false

out = isHexString( 123 );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-is-hex-string
```

</section>

<section class="usage">

### Usage

```text
Usage: is-hex-string [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-hex-string 0123456789abcdefABCDEF
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '0123456789abcdefABCDEF' | is-hex-string
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-hex-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-hex-string

[test-image]: https://github.com/stdlib-js/assert-is-hex-string/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-hex-string/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-hex-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-hex-string?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-hex-string
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-hex-string/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-hex-string/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
