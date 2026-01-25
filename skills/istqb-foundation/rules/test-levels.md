---
title: Test Levels
impact: HIGH
impactDescription: Applying appropriate test levels systematically ensures defects are found at the right stage, reduces cost of fixing defects, and provides comprehensive coverage across different system perspectives.
tags: levels, strategy, test-levels
---

# Test Levels

Test levels are groups of test activities organized and managed together. Each test level has specific objectives and focuses on different aspects of the system. The main test levels are: component (unit) testing, integration testing, system testing, and acceptance testing.

**Incorrect (what not to do):**

```markdown
Single-level testing approach:
"We do all our testing at the system level after everything is integrated. 
We test the complete application end-to-end."

Problems:
- Defects found late are expensive to fix
- Difficult to isolate defects (which component has the issue?)
- Integration issues discovered after components are "complete"
- No early feedback on component quality
- All testing happens at one stage
- Misses defects that are easier to find at component level
```

**Explanation:** Testing only at the system level means defects are found late when they're expensive to fix. It's also harder to isolate defects, and integration issues are discovered after components are already built. This approach misses the benefits of early testing at different levels.

**Correct (what to do):**

```markdown
Multi-level testing approach:

1. Component (Unit) Testing
   - Test individual components in isolation
   - Verify component functionality and logic
   - Find defects early when they're cheap to fix
   - Usually done by developers
   - Objectives: Verify component meets design, find defects in component

2. Integration Testing
   - Test interfaces between components
   - Verify data flow and communication
   - Find interface mismatches and integration issues
   - Can be done by developers or testers
   - Objectives: Verify interfaces work correctly, find integration defects

3. System Testing
   - Test complete, integrated system
   - Verify system meets requirements
   - Test end-to-end workflows
   - Usually done by testers
   - Objectives: Verify system meets requirements, find system-level defects

4. Acceptance Testing
   - Test from user/business perspective
   - Verify system meets business needs
   - Usually done by users or business analysts
   - Objectives: Verify system is fit for purpose, gain user confidence

Benefits:
- Defects found early are cheaper to fix
- Easier defect isolation (know which level/component has issue)
- Early feedback on quality
- Different perspectives catch different types of defects
- Comprehensive coverage across system layers
```

**Explanation:** This multi-level approach finds defects at the appropriate stage when they're cheaper to fix. Each level provides a different perspective and catches different types of defects. Early levels provide feedback before integration, making defect isolation easier.

## When to Apply

Apply test levels when:
- Planning test strategy for a project
- Determining what to test and when
- Organizing test activities
- Allocating test resources
- Defining test objectives
- Understanding test coverage across system layers

## Additional Context

### Component (Unit) Testing

- **Scope:** Individual components (functions, classes, modules)
- **Who:** Usually developers
- **When:** During development
- **Focus:** Component functionality, logic, interfaces
- **Techniques:** White-box techniques (statement, branch coverage)
- **Benefits:** Early defect detection, cheap to fix, fast feedback

### Integration Testing

- **Scope:** Interfaces between components
- **Who:** Developers or testers
- **When:** After components are developed
- **Focus:** Data flow, interfaces, communication
- **Approaches:** Big-bang, top-down, bottom-up, sandwich
- **Benefits:** Finds interface mismatches, integration issues

### System Testing

- **Scope:** Complete, integrated system
- **Who:** Testers
- **When:** After integration is complete
- **Focus:** System requirements, end-to-end workflows
- **Types:** Functional, non-functional, regression
- **Benefits:** Verifies system meets requirements, finds system-level defects

### Acceptance Testing

- **Scope:** System from user/business perspective
- **Who:** Users, business analysts, or testers
- **When:** After system testing
- **Focus:** Business needs, user requirements, fit for purpose
- **Types:** User acceptance testing (UAT), operational acceptance testing
- **Benefits:** Confirms system meets business needs, gains user confidence

### Test Level Relationships

- Test levels are typically executed sequentially (component → integration → system → acceptance)
- In Agile, levels may overlap or be executed in shorter cycles
- Each level has different objectives and finds different types of defects
- Coverage at one level doesn't replace coverage at another level

## Related Rules

- `test-types` - Different types of testing at each level
- `test-planning` - Planning test activities across levels
- `statement-coverage` - White-box techniques for component testing
