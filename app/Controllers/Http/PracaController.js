'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
const Praca = use('App/Models/Praca');
const Database = use('Database')
/**
 * Resourceful controller for interacting with praças
 */
class PracaController {
  /**
   * Show a list of all praças.
   * GET pracas
   */
  async index() {
    const pracas = await Praca.all();
    return pracas;
  }

  /**
   * Create/save a new praça.
   * POST praças
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const {
      ...props
    } = request.post();
    if (!props.hasOwnProperty('praca'))
      return response.status(406).send()
    if (props.hasOwnProperty('estado')) {
      const res = await Praca.query().where({ estado: props.estado, pracas: props.praca })
        .getCount() === 0 ? await Praca.create({ ...props }) : response.status(409).send();
      return res;
    }
    return await Praca.create({ ...props });
  }

  /**
   * Update praca details.
   * PUT or PATCH pracas/:id
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ request, response }) {

  }

  /**
   * Delete a praca with id.
   * DELETE pracas/:id
   * @param {Request} ctx.request
   */
  async destroy({ request, response }) {
    const {
      ...props
    } = request.post();
    if (!props.hasOwnProperty('praca'))
      return response.status(406).send()
    let objectToSearch = { ...props };
    if (!props.hasOwnProperty('estado'))
      objectToSearch = { ...objectToSearch, estado: null }
    if (!props.hasOwnProperty('sigla'))
      objectToSearch = { ...objectToSearch, sigla: null }
    await Praca
      .query()
      .where({ ...objectToSearch })
      .delete()
      return response.send('deletado')
  }
}

module.exports = PracaController
