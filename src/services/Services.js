import {SurveillanceService} from './surveillance/SurveillanceService';

class ServicesInstance {
  serviceTypes = {
    SURVEILLANCE: 'SURVEILLANCE',
  };

  #surveillanceService;
  #className = 'ServicesInstance';

  constructor() {
    this.#surveillanceService = SurveillanceService;
  }

  async init() {
    await this.#surveillanceService.init();
  }

  get(serviceType) {
    switch (serviceType) {
      case this.serviceTypes.SURVEILLANCE: {
        return this.#surveillanceService;
      }

      default: {
        return undefined;
      }
    }
  }
}

const Services = new ServicesInstance();
Object.freeze(Services);

export default Services;
