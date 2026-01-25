---
title: Test Types
impact: HIGH
impactDescription: Understanding and applying different test types ensures comprehensive testing coverage, addressing functional requirements, quality attributes, code structure, and changes systematically.
tags: levels, types, test-types
---

# Test Types

Test types are groups of test activities focused on verifying specific characteristics of a system. The main test types are: functional testing, non-functional testing, white-box testing, and change-related testing. Test types can be applied at different test levels.

**Incorrect (what not to do):**

```markdown
Only functional testing:
"We only test if the features work. We test the functionality 
and that's enough."

Problems:
- Misses non-functional requirements (performance, security, usability)
- Doesn't verify code quality or structure
- No regression testing after changes
- Incomplete test coverage
- System may work but be unusable or insecure
```

**Explanation:** Focusing only on functional testing misses critical aspects like performance, security, usability, and code quality. The system may function correctly but fail in production due to non-functional issues. This approach provides incomplete coverage.

**Correct (what to do):**

```markdown
Comprehensive test types:

1. Functional Testing
   - Verify system functions correctly
   - Test features and requirements
   - Verify inputs produce correct outputs
   - Examples: Login works, calculations are correct, data is saved

2. Non-Functional Testing
   - Verify quality attributes
   - Test how well the system performs
   - Examples: Performance, security, usability, reliability, portability

3. White-Box Testing
   - Verify code structure and logic
   - Test internal implementation
   - Achieve code coverage
   - Examples: Statement coverage, branch coverage, condition coverage

4. Change-Related Testing
   - Verify changes don't break existing functionality
   - Test after modifications
   - Examples: Regression testing, confirmation testing

Benefits:
- Comprehensive coverage of all system characteristics
- Functional requirements are met (what it does)
- Non-functional requirements are met (how well it does it)
- Code quality is verified (structure and logic)
- Changes are validated (regression prevention)
```

**Explanation:** This comprehensive approach tests all aspects of the system: what it does (functional), how well it does it (non-functional), code quality (white-box), and impact of changes (change-related). This provides complete coverage and ensures the system is fit for purpose.

## When to Apply

Apply test types when:
- Planning test coverage for a project
- Determining what aspects of the system to test
- Selecting appropriate test types for requirements
- Ensuring comprehensive test coverage
- Addressing different quality characteristics
- Testing after changes or modifications

## Additional Context

### Functional Testing

- **Purpose:** Verify system functions correctly according to requirements
- **Focus:** Features, inputs/outputs, business logic
- **Techniques:** Black-box techniques (equivalence partitioning, boundary value analysis, etc.)
- **Examples:** Login functionality, data validation, calculations, workflows
- **When:** Throughout development, at all test levels

### Non-Functional Testing

- **Purpose:** Verify quality attributes and how well the system performs
- **Focus:** Performance, security, usability, reliability, portability, efficiency
- **Types:**
  - **Performance:** Load, stress, volume, scalability
  - **Security:** Authentication, authorization, data protection
  - **Usability:** User interface, user experience, accessibility
  - **Reliability:** Availability, fault tolerance, recoverability
  - **Portability:** Compatibility, installability
- **When:** Usually at system and acceptance levels

### White-Box Testing

- **Purpose:** Verify code structure, logic, and implementation
- **Focus:** Code coverage, internal logic, code quality
- **Techniques:** Statement coverage, branch coverage, condition coverage
- **Who:** Usually developers during component testing
- **When:** During component (unit) testing, sometimes integration testing

### Change-Related Testing

- **Purpose:** Verify changes don't break existing functionality
- **Types:**
  - **Confirmation Testing (Re-testing):** Verify defects are fixed
  - **Regression Testing:** Verify unchanged functionality still works
- **Focus:** Impact of changes, existing functionality
- **When:** After fixes, enhancements, or any changes
- **Approach:** Can be full regression or selective regression

### Test Types at Different Levels

- **Component Level:** Functional, white-box, change-related
- **Integration Level:** Functional, white-box (sometimes), change-related
- **System Level:** Functional, non-functional, change-related
- **Acceptance Level:** Functional, non-functional (sometimes)

### Combining Test Types

- Test types are not mutually exclusive
- A test case may verify both functional and non-functional aspects
- Combine test types for comprehensive coverage
- Prioritize based on risk and requirements

## Related Rules

- `test-levels` - Applying test types at different levels
- `statement-coverage` - White-box testing techniques
- `equivalence-partitioning` - Functional testing techniques
