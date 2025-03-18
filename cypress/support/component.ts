import './commands'; 
import '@testing-library/cypress/add-commands'; 
import { mount } from '@cypress/react18'; // ⚠️ Cambio aquí

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);