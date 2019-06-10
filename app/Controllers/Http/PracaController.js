'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
// eslint-disable-next-line no-undef
const Praca = use('App/Models/Praca');
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
		const { ...props } = request.post();
		if (!props.hasOwnProperty('praca'))
			return response.send({ err: true, msg: 'Falta propiedade nome para salvar esta praça' });
		if (props.hasOwnProperty('estado')) {
			const res = await Praca.query()
				.where({ estado: props.estado, praca: props.praca })
				.getCount();
			if (res !== 0)
				return response.send({ err: true, msg: 'Existe uma praça com este Nome e Estado' });
		}
		const newPraca = await Praca.create(props);
		return newPraca;
	}

	/**
   * Update praca details.
   * PUT or PATCH pracas/:id
   * @param {Request} ctx.request
   * @param {params} ctx.params
   */
	async update({ request, params }) {
		const { ...props } = request.post();
    const praca = await Praca.findOrFail(params.id);
    //merge content to check after
    praca.merge(props);
    //check if future praca already exists before save
    const res = await Praca.query()
    .where({ estado: praca.estado, praca: praca.praca })
    .getCount();
		
    res === 0 && praca.save()
    return  res === 0 ? praca:{ err: true, msg: 'Existe uma praça com o mesmo Nome e Estado'};
	}

	/**
   * Delete a praca with id.
   * DELETE pracas/:id
   * @param {params} ctx.params
   */
	async destroy({ params }) {
		const pracaToDelete = await Praca.findOrFail(params.id);
		pracaToDelete.delete();
	}
}

module.exports = PracaController;
