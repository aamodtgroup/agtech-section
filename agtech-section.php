<?php
/**
 * Plugin Name:       Custom Gutenberg Blocks
 * Description:       Custom blocks made for the Gutenberg editor
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Kasper Aamodt
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       agtech-section
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create-block_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create-block_block_init' );
