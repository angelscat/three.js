import { LabelElement } from 'flow';
import { BaseNodeEditor } from '../BaseNodeEditor.js';
import { nodeObject, float } from 'three/nodes';
import { setInputAestheticsFromType } from '../DataTypeLib.js';

export class SplitEditor extends BaseNodeEditor {

	constructor() {

		super( 'Split', null, 175 );

		let node = null;

		const inputElement = setInputAestheticsFromType( new LabelElement( 'Input' ), 'node' ).onConnect( () => {

			node = inputElement.getLinkedObject();

			if ( node !== null ) {

				xElement.setObject( nodeObject( node ).x );
				yElement.setObject( nodeObject( node ).y );
				zElement.setObject( nodeObject( node ).z );
				wElement.setObject( nodeObject( node ).w );

			} else {

				xElement.setObject( float() );
				yElement.setObject( float() );
				zElement.setObject( float() );
				wElement.setObject( float() );

			}

		} );

		this.add( inputElement );

		const xElement = setInputAestheticsFromType( new LabelElement( 'x | r' ), 'Number' ).setObject( float() );
		const yElement = setInputAestheticsFromType( new LabelElement( 'y | g' ), 'Number' ).setObject( float() );
		const zElement = setInputAestheticsFromType( new LabelElement( 'z | b' ), 'Number' ).setObject( float() );
		const wElement = setInputAestheticsFromType( new LabelElement( 'w | a' ), 'Number' ).setObject( float() );

		this.add( inputElement )
			.add( xElement )
			.add( yElement )
			.add( zElement )
			.add( wElement );

	}

}
