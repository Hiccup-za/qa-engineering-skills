---
title: Statement Coverage
impact: HIGH
impactDescription: Statement coverage ensures every executable statement is executed at least once, providing basic code coverage that helps identify untested code and ensures minimum test coverage.
tags: techniques, white-box, code-coverage
---

# Statement Coverage

Statement coverage (also called line coverage) measures the percentage of executable statements that have been executed by tests. The goal is to achieve 100% statement coverage, ensuring every line of code is executed at least once.

**Incorrect (what not to do):**

```markdown
No coverage measurement:
function calculateDiscount(amount, isPremium) {
  if (isPremium) {
    return amount * 0.1;  // 10% discount
  }
  return amount * 0.05;  // 5% discount
}

Test Cases:
- calculateDiscount(100, true) → 10

Problems:
- Only tests one branch (isPremium = true)
- Doesn't test the else branch (isPremium = false)
- Statement coverage is only 50%
- Missing code is not identified
- No visibility into what's tested
```

**Explanation:** Without measuring coverage, it's unclear what code is tested. This example only tests one branch, leaving half the code untested. There's no visibility into coverage gaps, and untested code may contain defects.

**Correct (what to do):**

```markdown
Systematic statement coverage:

function calculateDiscount(amount, isPremium) {
  if (isPremium) {
    return amount * 0.1;  // Statement 1
  }
  return amount * 0.05;   // Statement 2
}

Test Cases for 100% Statement Coverage:
1. calculateDiscount(100, true) → 10
   - Executes: Statement 1 (if branch)
2. calculateDiscount(100, false) → 5
   - Executes: Statement 2 (else branch)

Coverage: 100% (both statements executed)

Benefits:
- Ensures all statements are executed
- Identifies untested code
- Provides basic coverage metric
- Helps find missing test cases
- Minimum level of code coverage
```

**Explanation:** This approach systematically ensures every statement is executed. By measuring coverage, we can identify what's tested and what's missing. 100% statement coverage ensures all code paths are executed at least once.

## When to Apply

Apply statement coverage when:
- Need basic code coverage metric
- Want to identify untested code
- Setting minimum coverage requirements
- Component (unit) testing
- Verifying test completeness
- Starting white-box testing (foundation for higher coverage)

## Additional Context

### Coverage Measurement

**Statement Coverage = (Executed Statements / Total Statements) × 100%**

- **100% coverage:** Every statement executed at least once
- **Less than 100%:** Some statements never executed (untested code)

### Coverage Tools

- **Code coverage tools:** Measure which statements are executed
- **IDE integration:** Real-time coverage feedback
- **CI/CD integration:** Coverage reports in build pipeline
- **Coverage reports:** Visualize covered and uncovered code

### Limitations

- **Doesn't test logic:** 100% statement coverage doesn't guarantee correct logic
- **Doesn't test branches:** May miss untested decision outcomes
- **Doesn't test conditions:** May miss untested condition combinations
- **Minimum coverage:** Statement coverage is the minimum, not sufficient alone

### Common Scenarios

**Unreachable Code:**
- Code that can never be executed
- May indicate dead code or logic errors
- Should be reviewed and potentially removed

**Uncovered Code:**
- Code that can be executed but isn't tested
- Indicates missing test cases
- Should be covered by additional tests

### Best Practices

- **Aim for 100%:** But don't sacrifice quality for coverage
- **Use as baseline:** Statement coverage is minimum, not sufficient
- **Combine with other techniques:** Use with branch and condition coverage
- **Review uncovered code:** Understand why code isn't covered
- **Don't game the metric:** Focus on meaningful coverage, not just numbers

## Related Rules

- `branch-coverage` - Higher level of coverage that tests decision outcomes
- `condition-coverage` - Tests condition combinations in boolean expressions
- `test-levels` - Typically applied at component (unit) level
