import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

function Save() {
	const blockProps = useBlockProps.save( {
		className: 'wp-block-section',
	} );

	return (
		<section { ...blockProps }>
			<div className="wp-block-section__inner-container">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}

export default Save;
