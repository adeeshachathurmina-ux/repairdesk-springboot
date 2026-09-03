# Architecture

## Boundaries
The React client handles presentation. The Spring Boot API owns authentication, authorisation, workflow and persistence. The FastAPI service owns the transparent recommendation calculation. MySQL is the system of record.

## Security decisions
- Passwords are BCrypt hashes.
- JWTs are stateless and expire after the configured duration.
- Public access is limited to authentication, health and API documentation.
- Business operations use method-level role checks.
- Secrets are environment variables and are excluded from Git.

## Recommendation design
Version 1 uses a deterministic, explainable score rather than pretending a synthetic model is trained. It can later be replaced with a validated model after enough labelled outcomes are collected.
