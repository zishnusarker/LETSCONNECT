// //First, ipmorting schema creator is a must 
// import createSchema from 'part:@sanity/base/schema-crator'

// //Then import schema types frim any plugins that might expose them 
// import schemaTypes from 'all:part:@sanity/base/schema-type'

import user from './user';
import pin from './pin';
import comments from './comments';
import postedBy from './postedBy';
import save from './save';

//then we give our schema to the builder and provise the result to schema
export default createSchema({

    //we name our schema 
    name: 'default',
    types: schemaTypes.concat([
        /*the types are here*/

        user, pin, comments, postedBy, save

    ])
})