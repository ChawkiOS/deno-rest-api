import { Drash } from 'https://deno.land/x/drash/mod.ts';
import { Weights, WeightItem } from './weights.ts';

const server = new Drash.Http.Server({
	response_output: 'application/json',
	resources: [Weights, WeightItem],
});

server.run({
	hostname: 'localhost',
	port: 3000,
});

console.log('Server ready 🎉');
