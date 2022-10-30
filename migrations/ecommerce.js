const ecommerce = artifacts.require("ecommerce");

module.exports = function (deployer) {
  deployer.deploy(ecommerce);
};
