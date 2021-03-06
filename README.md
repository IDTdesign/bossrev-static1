# Static templates for BossRevolution

## Platform & Components

To run this site locally you should have installed:

* [Node.js](http://nodejs.org/)

* [GIT](http://git-scm.com/download)

    **IMPORTANT.** When installing GIT on Windows, make sure you install with the option of making git available to the windows command line.

See also [instruction](http://bevry.me/learn/node-install) for setting up Node.js environment under Mac Os and Linux.

### Install / update DocPad

On Windows:

1. Run 'Node.js command promt' as Administrator.  
2. Type `npm install -g npm` and press «Enter» to update Node Package Manager.
3. Type `npm install -g docpad@6.63` and press «Enter» to install DocPad globally.
4. Close Node.js command promt, run Windows command promt (cmd) as regular user and navigate to your folder with project.
5. Run `docpad update` inside your project directory to ensure that your local installations of DocPad and its plugins are updated to their latest compatible versions.

For other systems check [manual](http://docpad.org/docs/install) at official site.

## Running DocPad locally

`docpad run` in **cmd** inside your project directory to compile the site, start the webserver and watch for changes.

To preview site in browser open [http://localhost:9778](http://localhost:9778)

[Full list](http://docpad.org/docs/cli) of commands.

## Developing

`src/document` — content pages  
`src/layout`   — template of the site  
`src/partials` — includes used in templates  
`src/files`    — resources

More docs at [DocPad site](http://docpad.org/docs/overview).

## Deploy

### Deploy Setting

Open command promt and run `git remote add deploy https://USERNAME:PASSWORD@github.com/IDTdesign/bossrev-static1.git` where *USERNAME* , *PASSWORD* is your github credentials.

### Deploying Site

Run `grunt` to create inlined versions of emails.

Run `docpad deploy-ghpages --env static` inside your project directory to compile the site and push it to [http://idtdesign.github.io/bossrev-static1/](http://idtdesign.github.io/bossrev-static1/).

You should be collaborator in this repository to be able to deploy.

## Troubleshooting

In case of any problems try first to [update DocPad](#install--update-docpad).


## License
IDT &copy; 2014+ All rights reserved.
