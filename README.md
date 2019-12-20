# `hugo-theme-carrd50`: A Port of Pro Template # 50 from [Carrd](https://carrd.co)

This theme is a port of [Pro Template # 50](https://template50.carrd.co) by
[Carrd](https://caard.co). This forms the basis for the "Coming Soon" page for
[TinyDevCRM](https://tinydevcrm.com).

## Environment

This theme was tested using Hugo v0.61:

```bash
Hugo Static Site Generator v0.61.0-9B445B9D darwin/amd64 BuildDate: 2019-12-11T08:26:39Z
```

## Getting Started

- Setup a Hugo site by following [the Hugo "Getting Started"
  guide](https://gohugo.io/getting-started/).

- `git` clone this repository into `themes/carrd50`:

```bash
git clone git@github.com:yingw787/hugo-theme-carrd50.git themes/carrd50
```

- Copy over `config.toml` from `exampleSite` into the root of your Hugo site
  directory:

```bash
cp themes/carrd50/exampleSite/config.toml .
```

- Test your site using `hugo server`:

```bash
hugo server -t carrd50
```

## Notes

- The custom-themed Mailchimp signup form only works if your audience has
  required FNAME, LNAME, and EMAIL fields.
