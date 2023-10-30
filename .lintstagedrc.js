export default {
  'src/*/.ts': () => 'tsc --project tsconfig.json --noEmit',
  '.ts': ['eslint --fix', 'prettier --write'],
  '.css': 'prettier --write',
}