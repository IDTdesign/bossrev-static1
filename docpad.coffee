# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# ...
	templateData:
		site:
			# Site Production URL
			url: 'http://idtdesign.github.io/bossrev-static1'
		
			# The website's styles
			styles: [
					'/css/custom1.css'
					'/css/flags.css'
					'/css/freetrial.css'
					'/css/landing.css'
					'/css/moneytransfer.css'
					'/css/splash.css'
					'/inc/bossrevolution-en.css'
					'/debit/2.0/bossrevolution/css/Bossrev.css'
					'/debit/2.0/bossrevolution/css/jquery-ui-boss.css'
					'/debit/2.0/bossrevolution/css/jquery-ui.min.css'
					'/debit/2.0/bossrevolution/css/modal_overlay.css'
					'/debit/2.0/controls/inc/debit.css'

			]

			# The website's scripts
			scripts: [
					'/scripts/custom1.js'
					'/debit/2.0/controls/signup/js/signup.js'
					'/debit/2.0/controls/inc/debit.js'
			]

	# Plugins configurations

	plugins:
		ghpages:
			deployRemote: 'deploy'
			deployBranch: 'gh-pages'
	# =================================
	# Environments

	environments:
		development:
			templateData:
				site:
					url: 'http://localhost:9778'
}

# Export the DocPad Configuration
module.exports = docpadConfig