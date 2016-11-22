'use strict';

import server from './server'

describe( 'see all these tests running and passing', () => {

	it('adds 1 + 2 to equal 3', () => {
	  expect( 1 + 2 ).toBe( 13 )
	})

	it( 'run 2nd test alright', () => {
		expect( true ).toBeTruthy()
	})
} )
