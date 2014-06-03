# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# ...
	templateData:
		site:
			# Site Production URL
			url: 'http://anyarty.github.io'

	# -----------------------------

	# Plugins configurations

	plugins:
	    ghpages:
	        deployRemote: 'deploy'
	        deployBranch: 'master'
}

# Export the DocPad Configuration
module.exports = docpadConfig