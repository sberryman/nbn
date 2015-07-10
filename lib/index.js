var Joi = require('joi');

// to-do
// what is this sucker going to do?

// defaults?
var internals = {
    defaults: {
        services: Joi.object().default(null).description('Hmm, take a guess...'), // alts string, array, regex
        servicesPath: Joi.string().default('./services'),
        plugins: null,
        pluginsPath: Joi.string().default('./plugins'),
        relativeTo: Joi.string().default(__dirname)
    }
};

// how do we validate the options? (joi)
