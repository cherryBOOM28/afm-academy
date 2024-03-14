


var LZString = (function() {
    // Функция для доступа к индексам символов
    function getCharIndex(charset, char) {
        if (!charIndexCache[charset]) {
            charIndexCache[charset] = {};
            for (var i = 0; i < charset.length; i++) {
                charIndexCache[charset][charset.charAt(i)] = i;
            }
        }
        return charIndexCache[charset][char];
    }

    // Функция для сжатия данных
    function compress(input, bitsPerChar, getCharFromInt) {
        if (input == null) return "";
        var dictionary = {},
            enlargeIn = 2,
            dictSize = 3,
            numBits = 2,
            entry = "",
            result = [],
            i,
            w,
            c,
            wc,
            wcx,
            dictId = 2,
            bits = 0,
            resb,
            maxpower,
            power,
            enw;
        for (i = 0; i < input.length; i += 1) {
            c = input.charAt(i);
            if (!Object.prototype.hasOwnProperty.call(dictionary, c)) {
                dictionary[c] = dictSize++;
                enlargeIn--;
            }
            wc = entry + c;
            if (Object.prototype.hasOwnProperty.call(dictionary, wc)) {
                entry = wc;
            } else {
                if (Object.prototype.hasOwnProperty.call(dictionary, entry)) {
                    if (entry.charCodeAt(0) < 256) {
                        for (w = 0; w < numBits; w++) {
                            bits <<= 1;
                            if (bitsPerChar == 16) {
                                bits |= 1;
                            }
                            if (bits >= enw) {
                                bits -= enw;
                                result.push(getCharFromInt(bits));
                                bits = 1;
                            }
                        }
                        wcx = entry.charCodeAt(0);
                        for (w = 0; w < 8; w++) {
                            bits = (bits << 1) | (wcx & 1);
                            if (bits >= enw) {
                                bits -= enw;
                                result.push(getCharFromInt(bits));
                                bits = 1;
                            }
                            wcx >>= 1;
                        }
                    } else {
                        wcx = 1;
                        for (w = 0; w < numBits; w++) {
                            bits = (bits << 1) | wcx;
                            if (bits >= enw) {
                                bits -= enw;
                                result.push(getCharFromInt(bits));
                                bits = 1;
                            }
                            wcx = 0;
                        }
                        wcx = entry.charCodeAt(0);
                        for (w = 0; w < 16; w++) {
                            bits = (bits << 1) | (wcx & 1);
                            if (bits >= enw) {
                                bits -= enw;
                                result.push(getCharFromInt(bits));
                                bits = 1;
                            }
                            wcx >>= 1;
                        }
                    }
                    enlargeIn--;
                    if (enlargeIn == 0) {
                        enlargeIn = Math.pow(2, numBits);
                        numBits++;
                    }
                    delete dictionary[entry];
                } else {
                    wcx = dictionary[entry];
                    for (w = 0; w < numBits; w++) {
                        bits = (bits << 1) | (wcx & 1);
                        if (bits >= enw) {
                            bits -= enw;
                            result.push(getCharFromInt(bits));
                            bits = 1;
                        }
                        wcx >>= 1;
                    }
                }
                enlargeIn--;
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
                dictionary[wc] = dictSize++;
                entry = String(c);
            }
        }
        if (entry !== "") {
            if (Object.prototype.hasOwnProperty.call(dictionary, entry)) {
                if (entry.charCodeAt(0) < 256) {
                    for (w = 0; w < numBits; w++) {
                        bits <<= 1;
                        if (bitsPerChar == 16) {
                            bits |= 1;
                        }
                        if (bits >= enw) {
                            bits -= enw;
                            result.push(getCharFromInt(bits));
                            bits = 1;
                        }
                    }
                    wc = entry.charCodeAt(0);
                    for (w = 0; w < 8; w++) {
                        bits = (bits << 1) | (wc & 1);
                        if (bits >= enw) {
                            bits -= enw;
                            result.push(getCharFromInt(bits));
                            bits = 1;
                        }
                        wc >>= 1;
                    }
                } else {
                    wc = 1;
                    for (w = 0; w < numBits; w++) {
                        bits = (bits << 1) | wc;
                        if (bits >= enw) {
                            bits -= enw;
                            result.push(getCharFromInt(bits));
                            bits = 1;
                        }
                        wc = 0;
                    }
                    wc = entry.charCodeAt(0);
                    for (w = 0; w < 16; w++) {
                        bits = (bits << 1) | (wc & 1);
                        if (bits >= enw) {
                            bits -= enw;
                            result.push(getCharFromInt(bits));
                            bits = 1;
                        }
                        wc >>= 1;
                    }
                }
                enlargeIn--;
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
                delete dictionary[entry];
            } else {
                wcx = dictionary[entry];
                for (w = 0; w < numBits; w++) {
                    bits = (bits << 1) | (wcx & 1);
                    if (bits >= enw) {
                        bits -= enw;
                        result.push(getCharFromInt(bits));
                        bits = 1;
                    }
                    wcx >>= 1;
                }
            }
            enlargeIn--;
            if (enlargeIn == 0) {
                numBits++;
            }
        }
        // Добавляем конечный символ, если есть оставшиеся биты
        if (bits > 0) {
            result.push(getCharFromInt(bits));
        }
        return result.join("");
    }

    // Функция для декомпрессии данных
    function decompress(input, getCharFromInt) {
        if (input == null) return "";
        if (input == "") return null;
        var dictionary = {},
            enlargeIn = 4,
            dictSize = 4,
            numBits = 3,
            entry = "",
            result = [],
            i,
            w,
            bits,
            resb,
            maxpower,
            power,
            c,
            data = { val: input.charCodeAt(0), position: 32768, index: 1 },
            val = data.val,
            position = data.position,


            index = data.index;
        for (i = 0; i < 3; i += 1) {
            dictionary[i] = i;
        }
        bits = 0;
        maxpower = Math.pow(2, 2);
        power = 1;
        while (power != maxpower) {
            resb = val & position;
            position >>= 1;
            if (position == 0) {
                position = 32768;
                val = input.charCodeAt(index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
        }
        switch ((bits += 1)) {
            case 0:
                bits = 0;
                maxpower = Math.pow(2, 8);
                power = 1;
                while (power != maxpower) {
                    resb = val & position;
                    position >>= 1;
                    if (position == 0) {
                        position = 32768;
                        val = input.charCodeAt(index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                c = getCharFromInt(bits);
                break;
            case 1:
                bits = 0;
                maxpower = Math.pow(2, 16);
                power = 1;
                while (power != maxpower) {
                    resb = val & position;
                    position >>= 1;
                    if (position == 0) {
                        position = 32768;
                        val = input.charCodeAt(index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                c = getCharFromInt(bits);
                break;
            case 2:
                return "";
        }
        dictionary[3] = c;
        w = c;
        result.push(c);
        while (true) {
            if (index > input.length) {
                return "";
            }
            bits = 0;
            maxpower = Math.pow(2, numBits);
            power = 1;
            while (power != maxpower) {
                resb = val & position;
                position >>= 1;
                if (position == 0) {
                    position = 32768;
                    val = input.charCodeAt(index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
            }
            switch ((c = bits)) {
                case 0:
                    bits = 0;
                    maxpower = Math.pow(2, 8);
                    power = 1;
                    while (power != maxpower) {
                        resb = val & position;
                        position >>= 1;
                        if (position == 0) {
                            position = 32768;
                            val = input.charCodeAt(index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    dictionary[dictSize++] = getCharFromInt(bits);
                    c = dictSize - 1;
                    enlargeIn--;
                    break;
                case 1:
                    bits = 0;
                    maxpower = Math.pow(2, 16);
                    power = 1;
                    while (power != maxpower) {
                        resb = val & position;
                        position >>= 1;
                        if (position == 0) {
                            position = 32768;
                            val = input.charCodeAt(index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    dictionary[dictSize++] = getCharFromInt(bits);
                    c = dictSize - 1;
                    enlargeIn--;
                    break;
                case 2:
                    return result.join("");
            }
            if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
            }
            if (dictionary[c]) {
                entry = dictionary[c];
            } else {
                if (c === dictSize) {
                    entry = w + w.charAt(0);
                } else {
                    return null;
                }
            }
            result.push(entry);
            // Добавляем новый элемент в словарь
            dictionary[dictSize++] = w + entry.charAt(0);
            enlargeIn--;
            w = entry;
            if (enlargeIn == 0) {
                enlargeIn = Math.pow(2, numBits);
                numBits++;
            }
        }
    }

    // Определение переменных и функций библиотеки
    var charIndexCache = {}; // Кэш индексов символов
    var LZString = {
        compressToBase64: function(input) {
            return compress(input, 6, function(a) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
            });
        },
        decompressFromBase64: function(input) {
            return decompress(input, function(index) {
                return getCharIndex("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", index);
            });
        },
        compressToUTF16: function(input) {
            return compress(input, 15, function(a) {
                return String.fromCharCode(a + 32);
            }) + " ";
        },
        decompressFromUTF16: function(input) {
            return decompress(input, function(index) {
                return input.charCodeAt(index) - 32;
            });
        },
        compressToEncodedURIComponent: function(input) {
            return compress(input, 6, function(a) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(a);
            });
        },
        decompressFromEncodedURIComponent: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            input = input.replace(/ /g, "+");
            return decompress(input, function(index) {
                return getCharIndex("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", index);
            });
        },
        compress: function(uncompressed) {
            return compress(uncompressed, 16, function(a) {
                return String.fromCharCode(a);
            });
        },
        decompress: function(compressed) {
            return decompress(compressed, function(index) {
                return compressed.charCodeAt(index);
            });
        }
    };

    return LZString;
})();

// Если доступен AMD, определяем модуль
// Если доступен CommonJS, экспортируем модуль
if (typeof module !== "undefined" && module.exports) {
    module.exports = LZString;
}

