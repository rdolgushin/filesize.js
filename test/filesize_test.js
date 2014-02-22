var filesize = require("../lib/filesize.js");

exports["filesize"] = {
	setUp: function (done) {
		this.kilobit  = 500;
		this.kilobyte = 1024;
		this.neg      = -1024;
		this.byte     = 1;
		this.zero     = 0;
		this.invld    = "abc";
		done();
	},
	base2: function (test) {
		test.expect(35);

		test.equal(filesize(this.kilobit, {base: 2}),                           "500 Б",    "Should be '500 Б'");
		test.equal(filesize(this.kilobit, {base: 2, round: 1}),                 "500 Б",    "Should be '500 Б'");
		test.equal(filesize(this.kilobit, {base: 2, round: 1, spacer: ""}),     "500Б",     "Should be '500Б'");
		test.equal(filesize(this.kilobit, {base: 2, unix: true}),               "500",      "Should be '500'");
		test.equal(filesize(this.kilobit, {base: 2, bits :true}),               "3.91 Кб",  "Should be '3.91 Кб'");
		test.equal(filesize(this.kilobit, {base: 2, round: 1, bits: true}),     "3.9 Кб",   "Should be '3.9 Кб'");
		test.equal(filesize(this.kilobit, {base: 2, unix: true, bits: true}),   "3.9К",     "Should be '3.9К'");

		test.equal(filesize(this.kilobyte, {base: 2}),                          "1.00 КБ",  "Should be '1.00 КБ'");
		test.equal(filesize(this.kilobyte, {base: 2, round: 1}),                "1.0 КБ",   "Should be '1.0 КБ'");
		test.equal(filesize(this.kilobyte, {base: 2, round: 1, spacer: ""}),    "1.0КБ",    "Should be '1.0КБ'");
		test.equal(filesize(this.kilobyte, {base: 2, unix: true}),              "1К",       "Should be '1К'");
		test.equal(filesize(this.kilobyte, {base: 2, bits :true}),              "8.00 Кб",  "Should be '8.00 Кб'");
		test.equal(filesize(this.kilobyte, {base: 2, round: 1, bits: true}),    "8.0 Кб",   "Should be '8.0 Кб'");
		test.equal(filesize(this.kilobyte, {base: 2, unix: true, bits: true}),  "8К",       "Should be '8К'");

		test.equal(filesize(this.neg, {base: 2}),                               "-1.00 КБ", "Should be '-1.00 КБ'");
		test.equal(filesize(this.neg, {base: 2, round: 1}),                     "-1.0 КБ",  "Should be '-1.0 КБ'");
		test.equal(filesize(this.neg, {base: 2, round: 1, spacer: ""}),         "-1.0КБ",   "Should be '-1.0КБ'");
		test.equal(filesize(this.neg, {base: 2, unix: true}),                   "-1К",      "Should be '-1К'");
		test.equal(filesize(this.neg, {base: 2, bits :true}),                   "-8.00 Кб", "Should be '-8.00 Кб'");
		test.equal(filesize(this.neg, {base: 2, round: 1, bits: true}),         "-8.0 Кб",  "Should be '-8.0 Кб'");
		test.equal(filesize(this.neg, {base: 2, unix: true, bits: true}),       "-8К",      "Should be '-8К'");

		test.equal(filesize(this.byte, {base: 2}),                              "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {base: 2, round: 1}),                    "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {base: 2, round: 1, spacer: ""}),        "1Б",       "Should be '1Б'");
		test.equal(filesize(this.byte, {base: 2, unix: true}),                  "1",        "Should be '1'");
		test.equal(filesize(this.byte, {base: 2, bits :true}),                  "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {base: 2, round: 1, bits: true}),        "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {base: 2, unix: true, bits: true}),      "1",        "Should be '1'");

		test.equal(filesize(this.zero, {base: 2, base: 2}),                     "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {base: 2, round: 1}),                    "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {base: 2, round: 1, spacer: ""}),        "0Б",       "Should be '0Б'");
		test.equal(filesize(this.zero, {base: 2, unix: true}),                  "0",        "Should be '0'");
		test.equal(filesize(this.zero, {base: 2, bits :true}),                  "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {base: 2, round: 1, bits: true}),        "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {base: 2, unix: true, bits: true}),      "0",        "Should be '0'");

		test.done();
	},
	base10: function (test) {
		test.expect(35);

		test.equal(filesize(this.kilobit),                             "500 Б",    "Should be '500 Б'");
		test.equal(filesize(this.kilobit, {round: 1}),                 "500 Б",    "Should be '500 Б'");
		test.equal(filesize(this.kilobit, {round: 1, spacer: ""}),     "500Б",     "Should be '500Б'");
		test.equal(filesize(this.kilobit, {unix: true}),               "500",      "Should be '500'");
		test.equal(filesize(this.kilobit, {bits :true}),               "4.00 Кб",  "Should be '4.00 Кб'");
		test.equal(filesize(this.kilobit, {round: 1, bits: true}),     "4.0 Кб",   "Should be '4.0 Кб'");
		test.equal(filesize(this.kilobit, {unix: true, bits: true}),   "3.9К",     "Should be '3.9К'");

		test.equal(filesize(this.kilobyte),                            "1.02 КБ",  "Should be '1.02 КБ'");
		test.equal(filesize(this.kilobyte, {round: 1}),                "1.0 КБ",   "Should be '1.0 КБ'");
		test.equal(filesize(this.kilobyte, {round: 1, spacer: ""}),    "1.0КБ",    "Should be '1.0КБ'");
		test.equal(filesize(this.kilobyte, {unix: true}),              "1К",       "Should be '1К'");
		test.equal(filesize(this.kilobyte, {bits :true}),              "8.19 Кб",  "Should be '8.19 Кб'");
		test.equal(filesize(this.kilobyte, {round: 1, bits: true}),    "8.2 Кб",   "Should be '8.2 Кб'");
		test.equal(filesize(this.kilobyte, {unix: true, bits: true}),  "8К",       "Should be '8К'");

		test.equal(filesize(this.neg),                                 "-1.02 КБ", "Should be '-1.02 КБ'");
		test.equal(filesize(this.neg, {round: 1}),                     "-1.0 КБ",  "Should be '-1.0 КБ'");
		test.equal(filesize(this.neg, {round: 1, spacer: ""}),         "-1.0КБ",   "Should be '-1.0КБ'");
		test.equal(filesize(this.neg, {unix: true}),                   "-1К",      "Should be '-1К'");
		test.equal(filesize(this.neg, {bits :true}),                   "-8.19 Кб", "Should be '-8.19 Кб'");
		test.equal(filesize(this.neg, {round: 1, bits: true}),         "-8.2 Кб",  "Should be '-8.2 Кб'");
		test.equal(filesize(this.neg, {unix: true, bits: true}),       "-8К",      "Should be '-8К'");

		test.equal(filesize(this.byte),                                "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {round: 1}),                    "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {round: 1, spacer: ""}),        "1Б",       "Should be '1Б'");
		test.equal(filesize(this.byte, {unix: true}),                  "1",        "Should be '1'");
		test.equal(filesize(this.byte, {bits :true}),                  "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {round: 1, bits: true}),        "1 Б",      "Should be '1 Б'");
		test.equal(filesize(this.byte, {unix: true, bits: true}),      "1",        "Should be '1'");

		test.equal(filesize(this.zero),                                "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {round: 1}),                    "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {round: 1, spacer: ""}),        "0Б",       "Should be '0Б'");
		test.equal(filesize(this.zero, {unix: true}),                  "0",        "Should be '0'");
		test.equal(filesize(this.zero, {bits :true}),                  "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {round: 1, bits: true}),        "0 Б",      "Should be '0 Б'");
		test.equal(filesize(this.zero, {unix: true, bits: true}),      "0",        "Should be '0'");

		test.done();
	},
	invalid: function (test) {
		test.expect(1);
		test.throws(function () { filesize(this.invld) }, Error, "Should match");
		test.done();
	}
};
