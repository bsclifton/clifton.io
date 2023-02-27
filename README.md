## clifton.io

The HTML / resources for the https://clifton.io landing page

This project uses [Jekyll](https://jekyllrb.com/) with a slightly customized
version of the default [minima](https://github.com/jekyll/minima) theme.

### Setup

Check out the [Quickstart](https://jekyllrb.com/docs/) guide on the Jekyll docs website.

I personally use Windows 10 and WSL2 for running this project on my machine (everything works great).

Once the pre-requisites are downloaded you can clone this repo and get started:
```sh
git clone git@github.com:bsclifton/clifton.io.git
cd clifton.io
bundle install
```

You can start serving the content so you can view it live. This will do
live reloads and you can browse by visiting http://localhost:4000
```sh
bundle exec jekyll serve
```

### Deploying

Manual for the moment. Steps so that I don't forget them:

```
cd _site/
tar -czf ../site.tar.gz .
ssh brian@clifton.io
cd /srv/clifton.io-releases/
mkdir YYYY-MM-DD
cd YYYY-MM-DD
tar -xzf ~brian/site.tar.gz .
cd /srv/
ln -s /srv/clifton.io-releases/YYYY-MM-DD ./clifton.io
```

