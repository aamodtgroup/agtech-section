import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';
import { group as icon } from '@wordpress/icons';

registerBlockType( 'agtech/agtech-section', {
	icon,
	supports: {
		align: [ 'wide', 'full' ],
	},
	edit: Edit,
	save: Save,
} );
