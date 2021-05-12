import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


function save() { 
	return (
		<section className="wp-block-section">
			<div { ...useBlockProps.save( { className: 'wp-block-section__inner-content' } ) }>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}

export default save;