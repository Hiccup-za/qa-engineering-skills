---
title: Condition Coverage
impact: MEDIUM
impactDescription: Condition coverage ensures all condition outcomes in boolean expressions are tested, providing thorough coverage for complex logical expressions with multiple conditions.
tags: techniques, white-box, code-coverage
---

# Condition Coverage

Condition coverage measures the percentage of condition outcomes in boolean expressions that have been executed by tests. For complex conditions with multiple boolean sub-expressions, condition coverage ensures each sub-expression is tested as both true and false.

**Incorrect (what not to do):**

```markdown
Only branch coverage, missing condition combinations:
function calculatePrice(amount, isPremium, isVIP) {
  if (amount > 100 && (isPremium || isVIP)) {
    return amount * 0.8;  // 20% discount
  }
  return amount;
}

Condition: amount > 100 && (isPremium || isVIP)
Sub-conditions:
- C1: amount > 100
- C2: isPremium
- C3: isVIP

Test Cases (only branch coverage):
1. calculatePrice(150, true, false) → 120
   - C1=true, C2=true, C3=false → Branch true
2. calculatePrice(50, false, false) → 50
   - C1=false, C2=false, C3=false → Branch false

Branch coverage: 100%
Condition coverage: 50% (C1 and C2 tested both ways, C3 only false)

Problems:
- C3 (isVIP) never tested as true
- Doesn't test all condition combinations
- May miss logic errors in condition evaluation
```

**Explanation:** Branch coverage tests the overall decision outcome but doesn't ensure all individual conditions are tested both ways. This example never tests isVIP as true, so condition coverage is incomplete. Logic errors in condition evaluation may be missed.

**Correct (what to do):**

```markdown
Systematic condition coverage:

function calculatePrice(amount, isPremium, isVIP) {
  if (amount > 100 && (isPremium || isVIP)) {
    return amount * 0.8;
  }
  return amount;
}

Condition: amount > 100 && (isPremium || isVIP)
Sub-conditions:
- C1: amount > 100
- C2: isPremium
- C3: isVIP

Test Cases for 100% Condition Coverage:
1. calculatePrice(150, true, false) → 120
   - C1=true, C2=true, C3=false
2. calculatePrice(150, false, true) → 120
   - C1=true, C2=false, C3=true
3. calculatePrice(50, true, false) → 50
   - C1=false, C2=true, C3=false
4. calculatePrice(150, false, false) → 150
   - C1=true, C2=false, C3=false

Coverage:
- Statement coverage: 100%
- Branch coverage: 100%
- Condition coverage: 100% (all conditions tested both ways)

Benefits:
- Tests all condition outcomes
- Stronger coverage for complex logic
- Finds errors in condition evaluation
- Verifies all boolean sub-expressions
- Most thorough white-box coverage
```

**Explanation:** This approach systematically tests each condition as both true and false. For complex boolean expressions, this ensures all condition combinations are considered, providing the most thorough white-box coverage and helping find logic errors in condition evaluation.

## When to Apply

Apply condition coverage when:
- Testing complex boolean expressions
- Multiple conditions in one decision
- Need thorough coverage of logical expressions
- Logic errors in conditions are a concern
- Setting high coverage requirements
- Component (unit) testing with complex conditions

## Additional Context

### Coverage Measurement

**Condition Coverage = (Executed Condition Outcomes / Total Condition Outcomes) × 100%**

- **100% coverage:** Every condition tested as both true and false
- **Less than 100%:** Some condition outcomes not tested

### Condition vs. Branch Coverage

- **Branch coverage:** Tests overall decision outcome (true/false)
- **Condition coverage:** Tests each condition in expression (true/false)
- **Condition coverage is stronger:** 100% condition coverage implies 100% branch coverage
- **Branch coverage doesn't imply condition coverage:** Can have 100% branch but < 100% condition

### Types of Conditions

**Simple conditions:**
- Single boolean expression
- Example: `amount > 100`

**Compound conditions:**
- Multiple boolean expressions with operators
- AND: `condition1 && condition2`
- OR: `condition1 || condition2`
- NOT: `!condition`

**Complex conditions:**
- Nested boolean expressions
- Example: `(A && B) || (C && D)`

### Common Scenarios

**Short-circuit evaluation:**
- Some conditions may not be evaluated due to short-circuiting
- Example: In `A && B`, if A is false, B is not evaluated
- Condition coverage should account for this

**Multiple conditions:**
- Many conditions in one expression
- Can result in many test cases
- May need to prioritize based on risk

### Best Practices

- **Use for complex logic:** Most valuable for complex boolean expressions
- **Combine with other techniques:** Use with statement and branch coverage
- **Consider risk:** May not need 100% for all code
- **Use coverage tools:** Measure condition coverage automatically
- **Review uncovered conditions:** Understand why conditions aren't tested

## Related Rules

- `statement-coverage` - Foundation level of coverage
- `branch-coverage` - Intermediate level of coverage
- `test-levels` - Typically applied at component (unit) level
