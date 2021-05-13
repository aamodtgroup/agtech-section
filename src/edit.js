import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

function Edit() {
	const blockProps = useBlockProps( {
		className: 'wp-block-section',
	} );

	return (
		<section { ...blockProps }>
			<InnerBlocks
				renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
			/>
		</section>
	);
}

export default Edit;
