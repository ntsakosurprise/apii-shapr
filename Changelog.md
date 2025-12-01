# 📖 CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

**Planned Features:**
- Real-time streaming data mapping
- Extended integration with validation libraries (`zod`, `yup`)
- Additional prebuilt helper utilities for common business patterns
- Plugin ecosystem expansion for third-party custom mappers

---

## [v2.1.0] – 2026-03-02

**Added:**
- Plugin architecture for custom mappers  
- CLI tool for testing mapping configurations  
- Code generation from mapping schemas  
- Integration guides for REST, GraphQL, and serverless workflows  
- Templates and best-practice guides  

**Improved:**
- CI/CD pipelines with automated tests  
- Comprehensive unit tests and coverage for all features  
- Community contribution guidelines  

---

## [v2.0.0] – 2026-01-26

**Added:**
- Async transformations in `getValue`  
- Conditional mapping (fields mapped only if condition met)  
- Middleware integration (Express, Fastify, Koa)  
- Array and nested collection mapping  
- Configurable output formats (camelCase / snake_case)  
- Internationalization (i18n) support  
- Performance optimizations for large payloads  

**Improved:**
- Full TypeScript type inference for complex nested maps  
- Updated documentation for advanced pipelines  
- Optimized internal mapping logic for performance  

---

## [v1.1.0] – 2025-12-22

**Added:**
- `getValue` for dynamic transformations  
- `refine` for post-processing mapped values  
- Nested object mapping pipelines  
- Date/time formatting helpers  
- Default values for missing fields  
- Optional error handling for invalid fields  
- Improved TypeScript typings for nested objects  

**Improved:**
- Error messages for invalid mapping configurations  
- Logging of mapped responses  
- Updated README with full cookbook examples  

---

## [v1.0.0] – 2025-11-24

**Added:**
- Initial release (Core Foundations / MVP)  
- Generic `mapper` for flat object mapping and key renaming  
- `requestMapper` for input normalization  
- `responseMapperHelper` for standard response wrapping (`{ data, meta, errors }`)  
- Nested object mapping support  
- Minimal TypeScript support  
- Unit tests for basic mapping  
- README with simple usage examples  

---
