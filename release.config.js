module.exports = {
  branches: [
    { name: 'main' },
    //{ name: 'pre/rc', channel: 'pre/rc', prerelease: 'rc' }, // `prerelease` is built with the template `${name.replace(/^pre\\//g, "")}`
    { name: 'beta', channel: 'beta', prerelease: true }, // `prerelease` is set to `beta` as it is the value of `name`
    //'main',
    //{
    //  name: 'beta',
    //  prerelease: true
    //}
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    ["@semantic-release/npm", {
      "npmPublish": false
    }],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'dist/**', 'package.json'],
        message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],

  ]
}