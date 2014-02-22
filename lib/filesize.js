/**
 * filesize
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/filesize.js/master/LICENSE>
 * @link http://filesizejs.com
 * @module filesize
 * @version 2.0.0
 */
( function ( global ) {
"use strict";

var bite  = /^Б$/,
    radix = 10,
    right = /\.(.*)/,
    zero  = /^0$/;

/**
 * filesize
 *
 * @method filesize
 * @param  {Mixed}   arg        String, Int or Float to transform
 * @param  {Object}  descriptor [Optional] Flags
 * @param  {Object}  options    [Optional] Overrides default size options
 * @return {String}             Readable file size String
 */
function filesize ( arg, descriptor, options ) {
	var result = "",
	    skip   = false,
	    i      = 6,
	    base, bits, neg, num, round, size, sizes, unix, spacer, suffix, z;

	if ( isNaN( arg ) ) {
		throw new Error( "Invalid arguments" );
	}

	descriptor = descriptor || {};
	bits       = ( descriptor.bits === true );
	unix       = ( descriptor.unix === true );
	base       = descriptor.base   !== undefined ? descriptor.base   : unix ? 2  : 10;
	round      = descriptor.round  !== undefined ? descriptor.round  : unix ? 1  : 2;
	spacer     = descriptor.spacer !== undefined ? descriptor.spacer : unix ? "" : " ";
	num        = Number( arg );
	neg        = ( num < 0 );

	// Flipping a negative number to determine the size
	if ( neg ) {
		num = -num;
	}

  options = options || defaultOptions;

	// Zero is now a special case because bytes divide by 1
	if ( num === 0 ) {
		if ( unix ) {
			result = "0";
		}
		else {
			result = "0" + spacer + "Б";
		}
	}
	else {
		sizes = options[base][bits ? "биты" : "байты"];

		while ( i-- ) {
			size   = sizes[i][1];
			suffix = sizes[i][0];

			if ( num >= size ) {
				// Treating bytes as cardinal
				if ( bite.test( suffix ) ) {
					skip  = true;
					round = 0;
				}

				result = ( num / size ).toFixed( round );

				if ( !skip && unix ) {

					suffix = suffix.charAt( 0 );
					z      = right.exec( result );

					if ( !bits && suffix === "К" ) {
						suffix = "К";
					}

					if ( z !== null && z[1] !== undefined && zero.test( z[1] ) ) {
						result = parseInt( result, radix );
					}

					result += spacer + suffix;
				}
				else if ( !unix ) {
					result += spacer + suffix;
				}

				break;
			}
		}
	}

	// Decorating a 'diff'
	if ( neg ) {
		result = "-" + result;
	}

	return result;
}

/**
 * Size options
 *
 * @type {Object}
 */
var defaultOptions = {
	2 : {
		"биты"  : [["Б", 1], ["Кб", 128],  ["Мб", 131072],  ["Гб", 134217728],  ["Тб", 137438953472],  ["Пб", 140737488355328]],
		"байты" : [["Б", 1], ["КБ", 1024], ["МБ", 1048576], ["ГБ", 1073741824], ["ТБ", 1099511627776], ["ПБ", 1125899906842624]]
	},
	10 : {
		"биты"  : [["Б", 1], ["Кб", 125],  ["Мб", 125000],  ["Гб", 125000000],  ["Тб", 125000000000],  ["Пб", 125000000000000]],
		"байты" : [["Б", 1], ["КБ", 1000], ["МБ", 1000000], ["ГБ", 1000000000], ["ТБ", 1000000000000], ["ПБ", 1000000000000000]]
	}
};

// CommonJS, AMD, script tag
if ( typeof exports !== "undefined" ) {
	module.exports = filesize;
}
else if ( typeof define === "function" ) {
	define( function () {
		return filesize;
	} );
}
else {
	global.filesize = filesize;
}

} )( this );
