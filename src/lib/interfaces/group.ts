import type Framework from './framework';

export default interface Group {
	name: string;
	path: string;
	web: string;
	frameworks: Framework[];
}
