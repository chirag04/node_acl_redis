var Acl = require('../')
  , tests = require('../node_modules/acl/test/tests');


describe('Redis', function () {
  before(function (done) {
    var self = this
      , options = {
          host: '127.0.0.1',
          port: 6379,
          password: null
        }
      , Redis = require('redis')
        
        
    var redis = Redis.createClient(options.port, options.host,  {no_ready_check: true} )

    function start(){
      self.backend = new Acl.redisBackend(redis)
      done()
    }
    
    if (options.password) {
      redis.auth(options.password, start)
    } else {
      start()
    }
  })
  
  run()
})

function run() {
  Object.keys(tests).forEach(function (test) {
    tests[test]()
  })
}