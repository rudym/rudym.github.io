module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      jade: {
        tasks: ["jade:debug"],
        files: ["**/*.jade", "**/*.md", "!views/*.jade"]
      }
    },
    jade: {
      options: {
        pretty: true,
        files: {
          "*": ["**/*.jade", "!views/*.jade"]
        }
      },
      debug: {
        options: {
          locals: {
            livereload: true
          }
        }
      },
      publish: {
        options: {
          locals: {
            livereload: false
          }
        }
      }
    },
    web: {
      options: {
        port: 8001
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jade-tasks');

  grunt.registerTask('default', ['jade:debug', 'web']);
  grunt.registerTask('publish', ['jade:publish']);

  grunt.registerTask('web', 'Start web server...', function() {
    var options = this.options();
    /*
    var connect = require('connect');
    connect.createServer(
        connect.static(__dirname)
    ).listen(options.port);
    */

    var connect = require('connect')
    var serveStatic = require('serve-static');
    var http = require('http')

    var app = connect()
    app.use(serveStatic(__dirname));

    // gzip/deflate outgoing responses
    //var compression = require('compression')
    //app.use(compression())

    // store session state in browser cookie
    //var cookieSession = require('cookie-session')
    //app.use(cookieSession({
    //    keys: ['secret1', 'secret2']
    //}))

    // parse urlencoded request bodies into req.body
    //var bodyParser = require('body-parser')
    //app.use(bodyParser.urlencoded())

    //create node.js http server and listen on port
    http.createServer(app).listen(options.port)
    console.log('http://localhost:%s', options.port);

    grunt.task.run(["watch:jade"]);
  });

};