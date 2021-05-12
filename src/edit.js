import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';


function Edit() {
	return (
		<section className="wp-block-section">
			<div { ...useBlockProps( { className: 'wp-block-section__inner-content' } ) }>
				<InnerBlocks />
			</div>
		</section>
	);
}

export default Edit;
