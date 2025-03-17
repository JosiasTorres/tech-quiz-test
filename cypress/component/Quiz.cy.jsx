import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  it('Debe renderizar correctamente el componente Quiz', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('Debe iniciar el quiz al hacer clic en "Start Quiz"', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.question-container').should('be.visible');
  });

  it('Debe avanzar a la siguiente pregunta al seleccionar una respuesta', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.answer-option').first().click();
    cy.get('.question-container').should('exist');
  });

  it('Debe mostrar el puntaje final al terminar el quiz', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.answer-option').each(($el) => {
      cy.wrap($el).click();
    });
    cy.contains('Your Score:').should('be.visible');
  });
});