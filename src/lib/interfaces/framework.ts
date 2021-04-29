import type ModeStatus from './mode-status';
import type Tag from './tag';

export default interface Framework {
	name: string;
	slug: string;
	web: string;
	techTag: Tag;
	designTag?: Tag;
	designImplementation?: string;
	implementationWeb?: string;
	modes: ModeStatus;
}
