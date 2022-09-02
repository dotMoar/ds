module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: { 
        'footer-max-line-length': [1, 'always', 1000],
        'body-max-line-length': [1,'always',10000]
 },
    parserPreset: { parserOpts: { noteKeywords: ['\\[.+\\]:'] } },
    ignores: [(message) => /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)]
  }