/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
	sassOptions: {
		additionalData: `@import "src/assets/styles/variables.scss"; @import "src/assets/styles/mixins.scss";`,
	}
};
