import { Drash } from 'https://deno.land/x/drash/mod.ts';

let weights = [
	{
		id: 1,
		weight: 63.3,
		date: '12/03/2020',
	},
	{
		id: 2,
		weight: 63.9,
		date: '23/03/2020',
	},
];

export class Weights extends Drash.Http.Resource {
	static paths = ['/weights'];

	public GET() {
		this.response.body = weights;
		return this.response;
	}

	public POST() {
		const item = {
			id: Math.floor(Math.random() * Math.floor(321321)),
			weight: this.request.getBodyParam('weight'),
			date: this.request.getBodyParam('date'),
		};
		weights.push(item);

		this.response.body = item;
		return this.response;
	}
}

export class WeightItem extends Drash.Http.Resource {
	static paths = ['/weights/:id'];

	public GET() {
		const URL_param = this.request.getPathParam('id');
		const item = weights.find((t) => t.id == URL_param);
		if (!item) {
			throw new Drash.Exceptions.HttpException(
				404,
				`Item with id ${URL_param} not found`
			);
		}
		this.response.body = item;
		return this.response;
	}

	public DELETE() {
		const URL_param = this.request.getPathParam('id');
		const item = weights.find((t) => t.id == URL_param);
		if (!item) {
			throw new Drash.Exceptions.HttpException(
				404,
				`Item with id ${URL_param} not found`
			);
		}
		weights = weights.filter((i) => i.id != URL_param);
		this.response.body = 'DELETED OK';
		return this.response;
	}

	public PUT() {
		const URL_param = this.request.getPathParam('id');
		const item = weights.find((t) => t.id == URL_param);
		if (!item) {
			throw new Drash.Exceptions.HttpException(
				404,
				`Item with id ${URL_param} not found`
			);
		}
		item.date = this.request.getBodyParam('date');
		this.response.body = item;
		return this.response;
	}
}
