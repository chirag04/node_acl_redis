#NODE ACL - Redis backend
This fork adds Redis backend support to [NODE ACL](https://github.com/OptimalBits/node_acl)

##Installation

Using npm:

```javascript
npm install acl-redis
```

##Usage
Create Redis instance at your node.js application.
Create acl module by requiring it and instantiating it with Redis backend instance:

```javascript
// require acl and create Redis backend
var acl = require('acl-redis');
acl = new acl(new acl.redisBackend(options));
```

##Documentation
See [NODE ACL documentation](https://github.com/OptimalBits/node_acl#documentation)

##License 

(The MIT License)

Copyright (c) 2014 Chirag Jain <jain_chirag04@yahoo.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
