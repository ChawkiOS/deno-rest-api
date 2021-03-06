import { Drash } from 'https://deno.land/x/drash/mod.ts';
import { Weights, WeightItem } from './weights.ts';

const server = new Drash.Http.Server({
	response_output: 'application/json',
	resources: [Weights, WeightItem],
	logger: new Drash.CoreLoggers.ConsoleLogger({
		enabled: true,
		level: 'all',
		tag_string: '{datetime} | {level} |',
		tag_string_fns: {
			datetime() {
				return new Date().toISOString().replace('T', ' ');
			},
		},
	}),
});

server.run({
	hostname: 'localhost',
	port: 3000,
});

console.log('Server ready 🎉');
