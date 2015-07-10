<img src="https://www.freethrowtrainer.com/uploads/2/8/6/6/2866261/2783335.jpg" />

# nbn
aka Nothing But Net

Lead Maintainer - [Shaun Berryman](https://github.com/sberryman)

## Dependencies
This awesome `thing` depends on the following:
* [Hapi](http://hapijs.com/)
* [Seneca](http://senecajs.org/)
* [RabbitMQ](http://www.rabbitmq.com/) (not technically required but used as the default seneca client & listen transports)

## Options
```js

module.exports = {
    services: '/.*/i',
    servicesPath: './services',
    plugins: '/.*/i',
    pluginsPath: './plugins',
    relativeTo: __dirname
};
```

## Examples
ToDo

## Docker
ToDo

## Heroku
Generate a Procfile which will automatically execute `./node_modules/.bin/nbn` with the correct command line options.

```bash
> npm run heroku-procfile

  Output??
```

### Example
```
web: npm run cli --web --hirefire

low: npm run cli --listen --services="/.*/i" --prefetch=$LISTEN_PREFETCH_LOW
l-find-customer: npm run cli --listen --services="find-customer" --prefetch=$LISTEN_PREFETCH_FIND_CUSTOMER
l-email-customer: npm run cli --listen --services="email-customer" --prefetch=$LISTEN_PREFETCH_EMAIL_CUSTOMER
```

## TCP Client Example
Left this here for ideas..

```bash
> npm run cli --listen --listen-type="" --services="/.*/i" --plugins="seneca-loadbalance-srv,seneca-logger"
```
