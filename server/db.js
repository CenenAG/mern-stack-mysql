import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    database: 'taskdb',
    user: 'root',
    password: 'Amsterdam2022.',
});


/*  DATABASE_URL='mysql://root:Amsterdam2022.@localhost:3306/test'*/