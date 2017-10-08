## clifton.io

The HTML / resources for the https://clifton.io landing page

This project uses the following technologies:
- [Grunt](https://gruntjs.com/): this is used for compiling and deploying
- [Handlebars.js](http://handlebarsjs.com/): used for templatizing the content

### Setup

Before you can build or deploy, you'll need to create a file `secret.json` at the root of the project. It has this format:
```json
{
  "emailTo": "address@domain.tld",
  "emailFrom": "anotherAddress@domain.tld",
  "production": {
    "host": "123.123.123.124",
    "port": 22,
    "username": "username"
  }
}
```

### Building

To get started, you'll need to install grunt:

```sh
npm install -g grunt-cli
```

You can then clone the repo and install dependencies:

``` sh
git clone git@github.com:clifton-io/clifton.io.git
cd clifton.io
npm install
grunt
```

### Deploying

Once you're happy with the output, you can deploy via SSH:
```sh
grunt deploy
```

The deployment will create a new directory and then update a symlink. If needed, old deploys will be removed. More information / configuration can be found in the `Gruntfile` under `environments`.
