//First, ipmorting schema creator is a must 
import createSchema from 'part:@sanity/base/schema-crator'

//Then import schema types frim any plugins that might expose them 
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user';

//then we give our schema to the builder and provise the result to schema
export default createSchema({

    //we name our schema 
    name: 'default',
    types: schemaTypes.concat([
        /*the types are here*/

        user

    ])
})

