import type { JestConfigWithTsJest } from 'ts-jest'
import { jsWithTs as tsjPreset } from 'ts-jest/presets'

// Sync object
const config: JestConfigWithTsJest = {
	verbose: true,
	transform: {
		...tsjPreset.transform,
	},
	modulePathIgnorePatterns: [
		'<rootDir>/amplify/#current-cloud-backend/',
		'.build/',
	],
}
export default config
