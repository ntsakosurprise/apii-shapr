# 🛣 Apii-Shapr Roadmap

This roadmap outlines the development plan for a **request/response mapper/shaper** system designed to normalize, transform, and validate API payloads in a consistent and developer-friendly way.

---

## **Vision**

Create a robust, extensible system for:

- Mapping, shaping, and normalizing requests and responses
- Enforcing consistency across APIs
- Reducing boilerplate
- Supporting complex nested objects and transformations

---

## **Phase 1 – Core Foundations (MVP)**

**Goal:** Build a minimal, working mapper/shaper for basic transformations.  

**Features:**

- `mapper`: Generic object mapping
  - Map flat objects
  - Rename keys
  - Simple value transformations (string, number, boolean)
- `requestMapper`: Normalize incoming requests
  - Filter unknown fields
  - Basic value transformations
- `responseMapperHelper`: Normalize outgoing responses
  - Wrap responses in `{ data, meta, errors }`
- Nested object support
- Basic configuration via `map` object
- Minimal TypeScript support

**Deliverables:**

- Initial npm package/module
- Unit tests for basic mapping
- README with simple usage examples

---

## **Phase 2 – Intermediate Features**

**Goal:** Add advanced functionality and improve developer ergonomics.  

**Features:**

- Support for `getValue` for dynamic/custom transformations
- `refine` option for post-processing
- Date/time formatting helpers
- Nested object mapping pipelines
- Default values for missing fields
- Custom error handling for invalid data
- Improved TypeScript typings for nested mapping
- Optional validation of input fields
- Helper utilities for common patterns (dates, booleans, enums)

**Deliverables:**

- Updated documentation with nested mapping examples
- Cookbook showing full `request → processing → response` pipelines
- Unit test coverage for nested transformations

---

## **Phase 3 – Advanced Features**

**Goal:** Make the shaper flexible, configurable, and production-ready for enterprise use.  

**Features:**

- Schema-driven mapping (mini JSON schema)
- Conditional mapping: map fields only if a condition is met
- Asynchronous transformations (`getValue` supports async)
- Custom error reporting and logging
- Middleware integration (Express, Fastify, Koa)
- Integration with validation libraries (e.g., `zod`, `yup`)
- Configurable output formats (snake_case, camelCase)
- Mapping for arrays and nested collections
- Internationalization (i18n) support
- Performance optimizations for large payloads

**Deliverables:**

- Enterprise-ready npm package
- Extensive usage examples and pipelines
- Benchmarking & performance report
- Full TypeScript type inference

---

## **Phase 4 – Ecosystem & Community Support**

**Goal:** Make the library robust, reusable, and community-friendly.  

**Features:**

- Plugin architecture for custom mappers
- CLI for testing mapping configurations
- Code generation from mapping schemas
- Integration guides (REST, GraphQL, serverless)
- Examples for common business use-cases (fintech, e-commerce, SaaS)
- Open-source contribution & issue tracking
- Automated tests and CI/CD pipelines

**Deliverables:**

- Plugin system documentation
- Templates and best-practice guides
- Versioning & release process
- Public npm package with README, examples, and TypeScript support

---

## **Roadmap Summary Table**

| Phase | Goal | Key Features |
|-------|------|--------------|
| 1 | MVP | Flat object mapping, basic request/response normalization, nested object support |
| 2 | Intermediate | `getValue`, `refine`, default values, nested pipelines, TypeScript typing |
| 3 | Advanced | Async transformations, conditional mapping, array/collection mapping, middleware integration, performance optimization |
| 4 | Ecosystem | Plugin architecture, CLI, code generation, community support, integration guides |

---

