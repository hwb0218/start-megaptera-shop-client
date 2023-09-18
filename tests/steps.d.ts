/// <reference types='codeceptjs' />

type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject {
    backdoor: backdoor;
    I: I;
  }

  interface Methods extends Playwright, REST, JSONResponse {
  }

  interface I extends WithTranslation<steps_file> {
  }

  namespace Translation {
    interface Actions {
    }
  }
}
