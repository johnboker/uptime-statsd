# uptime-statsd
A plugin to allow sending of ping stats to a statsd backend.

This plugin has a depencency on statsd-client@0.1.0

    $ npm install statsd-client@0.1.0

create directory **plugins/statsd/** and place **index.js** inside.

Enable the plugin in your config yaml:

    plugins:
        - ./plugins/statsd

Add your plugin configuration to your config yaml and you should be ready to go:

    statsd:
        host:    #your statsd host
        port:    #your statsd port
        prefix:  #your statsd prefix

Uptime: https://github.com/fzaninotto/uptime
