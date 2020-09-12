export class FirebasePaths {
  static type = {
    TEST: 'TEST',
    CLIENT_REQUEST: 'CLIENT_REQUEST',
    SERVER_RESPONSE: 'SERVER_RESPONSE',
  };

  static get({pathType}) {
    switch (pathType) {
      case this.type.TEST: {
        return 'test/path';
      }

      case this.type.CLIENT_REQUEST: {
        return '/homeoseq/client/requests';
      }

      case this.type.SERVER_RESPONSE: {
        return '/homeoseq/server/responses';
      }

      default: {
        return null;
      }
    }
  }
}
