const debugConsole = require("debug");
const Log = debugConsole("db:main");
function application( ){

}

function getExecutor( moduleName ){
  const list = {
    "mysql":  "mysql2",
    "sqlite": "sqlite3",
  }
  return require( list[ moduleName ] );
}

module.exports = application;