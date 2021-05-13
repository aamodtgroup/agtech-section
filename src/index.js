import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import Save from './save';
import icon from './icon';

registerBlockType( 'agtech/agtech-section', {
	apiVersion: 2,
	title: 'Section',
	icon: icon,
	supports: {
		align: [ 'wide', 'full' ],
	},
	edit: Edit,
	save: Save,
} );
