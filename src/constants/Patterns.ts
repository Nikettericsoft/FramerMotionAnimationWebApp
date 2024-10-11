const POSITIVE_INTEGERS_PARTIAL = /^(\d+)?(\.)?(\d+)?$/;
const POSITIVE_INTEGERS = /^\d+(\.\d+)?$/;
const POSITIVE_INTEGERS_WITH_DECIMALS = /^(\d+)?(\.\d{0,2})?$/;
const POSITIVE_WHOLE_NUMBERS = /^\d+?$/;
const NEGATIVE_WHOLE_NUMBERS = /^-?(\d+)?$/;
const FLOATING_WHOLE_NUMBERS = /^[+-]?\d+(\.\d+)?$/;
const NINE_DIGITS_ONLY = /^\d{0,9}$/;
const THREE_DIGITS_ONLY = /^\d{0,3}$/;
const ALPHA_NUMERIC_ONLY = /^[a-z0-9]+$/i;
const ALPHA_CHARS_ONLY = /^[a-z]+$/i;
const ALPHA_CHARS_WITH_SPACE = /^[a-zA-Z\s]*$/;

const Patterns = {
    POSITIVE_INTEGERS,
    POSITIVE_INTEGERS_PARTIAL,
    POSITIVE_WHOLE_NUMBERS,
    NEGATIVE_WHOLE_NUMBERS,
    FLOATING_WHOLE_NUMBERS,
    POSITIVE_INTEGERS_WITH_DECIMALS,
    NINE_DIGITS_ONLY,
    THREE_DIGITS_ONLY,
    ALPHA_NUMERIC_ONLY,
    ALPHA_CHARS_ONLY,
    ALPHA_CHARS_WITH_SPACE
}

export default Patterns;



