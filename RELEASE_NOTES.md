# 📦 Apii-Shapr Release Notes

This document outlines the release history, features, improvements, and fixes for the **Apii-Shapr** library.

---

## [v1.0.0] – 2025-11-24
**Initial Release – Core Foundations (MVP)**

**Features:**
- Generic `mapper` for flat object mapping and key renaming
- `requestMapper` for basic input normalization
- `responseMapperHelper` to wrap API responses with `{ data, meta, errors }`
- Nested object mapping support
- Minimal TypeScript support
- Unit tests for basic mapping
- Documentation with simple usage examples

---

## [v1.1.0] – 2025-12-22
**Intermediate Features**

**Features Added:**
- `getValue` for dynamic transformations
- `refine` for post-processing mapped values
- Nested object mapping pipelines
- Date/time formatting helpers
- Default values for missing fields
- Optional error handling for invalid fields
- Improved TypeScript typings for nested objects
- Updated README with full cookbook examples

**Improvements:**
- Better error messages for invalid mapping configurations
- Cleaner logging of mapped responses

---

## [v2.0.0] – 2026-01-26
**Advanced Features**

**Features Added:**
- Async transformations in `getValue`
- Conditional mapping (map fields only if condition met)
- Middleware integration for Express, Fastify, and Koa
- Array and nested collection mapping
- Configurable output formats: camelCase or snake_case
- Internationalization (i18n) support
- Performance optimizations for large payloads

**Improvements:**
- Full TypeScript type inference for complex nested maps
- Updated documentation for advanced pipelines
- Optimized internal mapping logic for performance

---

## [v2.1.0] – 2026-03-02
**Ecosystem & Community Support**

**Features Added:**
- Plugin architecture for custom mappers
- CLI tool for testing mapping configurations
- Code generation from mapping schemas
- Integration guides for REST, GraphQL, and serverless workflows
- Templates and best-practice guides

**Improvements:**
- CI/CD pipelines with automated tests
- Community contribution guidelines
- Comprehensive unit tests and coverage for all features

---

## Notes & Future Plans
- Support for real-time streaming data mapping
- Extended integration with validation libraries (`zod`, `yup`)  
- More prebuilt helper utilities for common business patterns (fintech, e-commerce, SaaS)  
- Expand plugin ecosystem for third-party custom mappers  

---

**Maintainers:**  
- [Your Name / Team Name]  
- [Repository / Contact Information]

