---
title: Branch Coverage
impact: HIGH
impactDescription: Branch coverage ensures all decision outcomes (true/false branches) are tested, providing stronger coverage than statement coverage by verifying both paths of every decision are executed.
tags: techniques, white-box, code-coverage
---

# Branch Coverage

Branch coverage (also called decision coverage) measures the percentage of decision outcomes (branches) that have been executed by tests. Every decision (if, while, for, switch) has true and false outcomes, and branch coverage ensures both outcomes are tested.

**Incorrect (what not to do):**

```markdown
Only statement coverage, missing branches:
function processOrder(amount, hasDiscount) {
  if (amount > 100) {           // Decision 1
    if (hasDiscount) {          // Decision 2
      return amount * 0.9;      // Branch: true-true
    }
    return amount;              // Branch: true-false
  }
  return amount * 0.95;         // Branch: false
}

Test Cases (only statement coverage):
1. processOrder(150, true) → 135
   - Executes: true-true branch
   - Statement coverage: 100%
   - Branch coverage: 33% (only 1 of 3 branches)

Problems:
- Doesn't test false branch of Decision 1 (amount <= 100)
- Doesn't test false branch of Decision 2 (hasDiscount = false)
- Missing test cases for other branches
- Logic errors in untested branches may be missed
```

**Explanation:** Achieving 100% statement coverage doesn't guarantee branch coverage. This example tests only one branch path, leaving other decision outcomes untested. Logic errors in untested branches won't be found.

**Correct (what to do):**

```markdown
Systematic branch coverage:

function processOrder(amount, hasDiscount) {
  if (amount > 100) {           // Decision 1
    if (hasDiscount) {          // Decision 2
      return amount * 0.9;      // Branch 1: true-true
    }
    return amount;              // Branch 2: true-false
  }
  return amount * 0.95;         // Branch 3: false
}

Test Cases for 100% Branch Coverage:
1. processOrder(150, true) → 135
   - Tests: Decision 1 = true, Decision 2 = true (Branch 1)
2. processOrder(150, false) → 150
   - Tests: Decision 1 = true, Decision 2 = false (Branch 2)
3. processOrder(50, false) → 47.5
   - Tests: Decision 1 = false (Branch 3)

Coverage:
- Statement coverage: 100%
- Branch coverage: 100% (all 3 branches executed)

Benefits:
- Tests all decision outcomes
- Stronger than statement coverage
- Finds logic errors in branches
- Verifies both true and false paths
- More thorough than statement coverage alone
```

**Explanation:** This approach systematically tests all branch outcomes. By ensuring every decision's true and false outcomes are tested, we get stronger coverage than statement coverage alone. This helps find logic errors in all code paths.

## When to Apply

Apply branch coverage when:
- Need stronger coverage than statement coverage
- Testing decision logic and conditionals
- Want to verify all code paths are tested
- Component (unit) testing with decisions
- Setting coverage requirements above statement coverage
- Need to test both outcomes of every decision

## Additional Context

### Coverage Measurement

**Branch Coverage = (Executed Branches / Total Branches) × 100%**

- **100% coverage:** Every branch (true and false) executed at least once
- **Less than 100%:** Some branches never executed

### Branch vs. Statement Coverage

- **Statement coverage:** Every statement executed
- **Branch coverage:** Every branch outcome executed
- **Branch coverage is stronger:** 100% branch coverage implies 100% statement coverage
- **Statement coverage doesn't imply branch coverage:** Can have 100% statement but < 100% branch

### Types of Decisions

**If statements:**
- True branch: condition is true
- False branch: condition is false

**Loops (while, for):**
- True branch: loop executes (enters loop)
- False branch: loop doesn't execute (skips loop)

**Switch statements:**
- Each case is a branch
- Default case is a branch

### Common Scenarios

**Nested Decisions:**
- Multiple levels of if statements
- Need to test all combinations of branch outcomes
- Can result in many test cases

**Complex Logic:**
- Multiple conditions in one decision
- Branch coverage tests outcomes, not condition combinations
- May need condition coverage for complex boolean expressions

### Best Practices

- **Aim for 100%:** Test all branch outcomes
- **Use coverage tools:** Measure branch coverage automatically
- **Combine with statement coverage:** Start with statement, then branch
- **Don't stop at branch:** Consider condition coverage for complex logic
- **Review uncovered branches:** Understand why branches aren't tested

## Related Rules

- `statement-coverage` - Foundation level of coverage
- `condition-coverage` - For complex boolean expressions
- `test-levels` - Typically applied at component (unit) level
