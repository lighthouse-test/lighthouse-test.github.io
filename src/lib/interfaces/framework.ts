import type ModeStatus from './mode-status';

export default interface Framework {
	name: string;
	path: string;
	web: string;
	modes: ModeStatus;
}
