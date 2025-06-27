import * as Message from './Messages';

class Exception extends Error {
  public layer: string;
  public route: string;
  public message: string;

  constructor(
    getMessage: { [key: string]: (params?: any) => string },
    layer: string,
    route: string,
    params?: any,
  ) {
    const existExceptionMessage = getMessage[route];

    const message = existExceptionMessage
      ? existExceptionMessage(params)
      : Message.Unknown(layer, route);

    super(message);
    this.layer = layer;
    this.route = route;
    this.message = message;
  }

  public toJSON() {
    return {
      layer: this.layer,
      route: this.route,
      message: this.message,
    };
  }
}

export class Controller extends Exception {
  constructor(route: string, params?: any) {
    const getMessage = Message.Controller;
    const layer = 'Controller';

    super(getMessage, layer, route, params);
  }
}

export class Service extends Exception {
  constructor(route: string, params?: any) {
    const getMessage = Message.Service;
    const layer = 'Service';

    super(getMessage, layer, route, params);
  }
}

export class Repository extends Exception {
  constructor(route: string, params?: any) {
    const getMessage = Message.Repository;
    const layer = 'Repository';

    super(getMessage, layer, route, params);
  }
}

export class NotFound extends Exception {
  constructor(route: string, params?: any) {
    const getMessage = Message.NotFound;
    const layer = 'Not Found';

    super(getMessage, layer, route, params);
  }
}

export class AuthenticationFailed extends Exception {
  constructor(route: string, params?: any) {
    const getMessage = Message.AuthenticationFailed;
    const layer = 'Authentication';

    super(getMessage, layer, route, params);
  }
}

export class InvalidToken extends Exception {
  constructor(route: string, params?: any) {
    const getMessage = Message.InvalidToken;
    const layer = 'Token';

    super(getMessage, layer, route, params);
  }
}

export class RestrictWriteRoute extends Exception {
  constructor(route: string, params?: any) {
    const getMessage = Message.RestrictWriteRoute;
    const layer = 'RestrictWrite';

    super(getMessage, layer, route, params);
  }
}
