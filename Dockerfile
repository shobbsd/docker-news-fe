FROM cypress/included:3.2.0

COPY /cypress /cypress
COPY /app/package.json .
COPY /app/cypress.json .

EXPOSE 3000

CMD ["cypress", "run"]