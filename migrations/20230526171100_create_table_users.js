module.exports = {    up: (pgm) => {        pgm.createExtension( "uuid-ossp");        pgm.createTable('users', {            id: { type: 'uuid',  primaryKey: true, default: new require('node-pg-migrate').PgLiteral('uuid_generate_v4()')},            username: { type: 'text', notNull: true },            password:{ type: 'text', notNull: true },            login: { type: 'text', notNull: true },        });        pgm.createTable('posts', {            id: { type: 'uuid',  primaryKey: true, default: new require('node-pg-migrate').PgLiteral('uuid_generate_v4()')},            user_id: { type: 'uuid', notNull: true, references: 'users'},            message: { type: 'text', notNull: true },            media_url:{ type: 'text' },            created_at: { type: 'timestamp', default: new require('node-pg-migrate').PgLiteral('current_timestamp') },        });    },    down: (pgm) => {        pgm.dropTable('users');        pgm.dropTable('posts');    },};