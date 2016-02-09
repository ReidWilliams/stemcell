/* 
	Exports global history object so code can call
	history.replaceState in order to change browser route
*/

import { createHistory } from 'history'

export const history = createHistory()
