# 🎩⚡ `setup-powerpack` action

![build](https://img.shields.io/github/workflow/status/extractions/setup-powerpack/build)

This GitHub Action will install a release of
[powerpack](https://github.com/rossmacarthur/powerpack) for you.

## Usage

### Examples

In most cases all you will need is the following in your workflow.

```yaml
- uses: extractions/setup-powerpack@v1
```

If you want a specific version of `powerpack` you can specify this by passing the
`powerpack-version` input.

```yaml
- uses: extractions/setup-powerpack@v1
  with:
    powerpack-version: 0.1
```

### Inputs

| Name                | Required | Description                             | Type   | Default |
| ------------------- | -------- | --------------------------------------- | ------ | ------- |
| `powerpack-version` | no       | A valid NPM-style semver specification. | string | *       |

The semver specification is passed directly to NPM's [semver
package](https://www.npmjs.com/package/semver). This GitHub Action will install
the latest matching release.

## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or
   http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.
