import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import { group as icon } from '@wordpress/icons'


registerBlockType( 'agtech/agtech-section', {
	title: 'Section',
	icon,
	supports: {
		align: true
	},
	/**
	 * @see ./edit.js
	 */
	 edit: Edit,
	/**
	 * @see ./save.js
	 */
	 save: save,
} );
