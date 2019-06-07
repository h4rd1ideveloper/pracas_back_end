'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PracaSchema extends Schema {
  up () {
    this.create('pracas', (table) => {
      table.increments()
      table.string('praca', 80).notNullable()
      table.string('sigla', 3)
      table.string('estado')
      table.timestamps()
    })
  }

  down () {
    this.drop('pracas')
  }
}

module.exports = PracaSchema
