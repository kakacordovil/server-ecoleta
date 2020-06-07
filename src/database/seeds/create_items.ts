import Knex from 'knex';


export async function seed(knex: Knex){
    await knex('items').insert([
        { title: 'Lamps', image: 'lampadas.svg' },
        { title: 'Bateries', image: 'baterias.svg' },
        { title: 'Paper', image: 'papeis-papelao.svg' },
        { title: 'Eletronic', image: 'eletronicos.svg' },
        { title: 'Organic', image: 'organicos.svg' },
        { title: 'Oil', image: 'oleo.svg' },
    ]);
}