export default {
	preset: 'ts-jest/presets/default-esm',
	extensionsToTreatAsEsm: ['.ts'],
	moduleNameMapper: {
	  '^(\\.{1,2}/.*)\\.js$': '$1',
	},
	transform: {
	  '^.+\\.tsx?$': [
		'ts-jest',
		{
		  useESM: true,
		},
	  ],
	},
	testEnvironment: 'node',
	roots: ['<rootDir>/src'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };