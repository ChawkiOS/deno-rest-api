import { Drash } from 'https://deno.land/x/drash/mod.ts';

const server = new Drash.Http.Server({
	response_output: 'application/json',
	resources: [''],
});

server.run({
	hostname: 'localhost',
	port: 3000,
});

console.log('Server ready 🎉');
