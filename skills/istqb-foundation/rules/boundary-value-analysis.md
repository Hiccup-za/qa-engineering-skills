---
title: Boundary Value Analysis
impact: CRITICAL
impactDescription: Boundary value analysis focuses testing on boundary conditions where defects are most likely to occur, significantly improving defect detection with targeted test cases.
tags: techniques, black-box, test-design
---

# Boundary Value Analysis

Boundary value analysis focuses on testing boundary values - values at the edges of equivalence partitions. Defects often occur at boundaries, so testing boundary values is highly effective. For a range with boundaries, test the boundary values and values just inside and outside the boundaries.

**Incorrect (what not to do):**

```markdown
Missing boundary testing:
Requirement: Age must be 18-65

Test Cases:
- Age = 25 (valid, middle of range)
- Age = 30 (valid, middle of range)
- Age = 50 (valid, middle of range)

Problems:
- Doesn't test boundaries (18, 65)
- Doesn't test values just outside boundaries (17, 66)
- Misses most likely defect locations
- Incomplete coverage of edge cases
```

**Explanation:** This approach misses the boundaries where defects are most likely to occur. Testing only middle values doesn't verify that the boundaries are correctly implemented. Boundary conditions are common sources of defects (off-by-one errors, incorrect comparison operators).

**Correct (what to do):**

```markdown
Systematic boundary value analysis:

Requirement: Age must be 18-65

Boundary values to test:
- Minimum boundary: 18 (valid)
- Just below minimum: 17 (invalid)
- Just above minimum: 19 (valid)
- Maximum boundary: 65 (valid)
- Just below maximum: 64 (valid)
- Just above maximum: 66 (invalid)

Test Cases:
1. Age = 17 (invalid, just below minimum)
2. Age = 18 (valid, minimum boundary)
3. Age = 19 (valid, just above minimum)
4. Age = 64 (valid, just below maximum)
5. Age = 65 (valid, maximum boundary)
6. Age = 66 (invalid, just above maximum)

Benefits:
- Tests boundaries where defects are most likely
- Covers edge cases systematically
- Finds off-by-one errors
- Verifies boundary conditions are correct
- High defect detection rate
```

**Explanation:** This approach systematically tests boundary values and values immediately adjacent to boundaries. Since defects often occur at boundaries (off-by-one errors, incorrect operators), this focused testing is highly effective at finding defects.

## When to Apply

Apply boundary value analysis when:
- Testing input ranges or limits
- Requirements specify boundaries (min, max, limits)
- Need to verify boundary conditions
- Testing numeric inputs
- Testing string length limits
- Want to find boundary-related defects
- Complementing equivalence partitioning

## Additional Context

### Boundary Value Selection

For a range [min, max]:
- **Boundary values:** min, max
- **Just inside:** min+1, max-1
- **Just outside:** min-1, max+1

For a range (min, max) - exclusive boundaries:
- **Boundary values:** min+1, max-1
- **Just inside:** min+2, max-2
- **Just outside:** min, max

### Types of Boundaries

**Range Boundaries:**
- Minimum and maximum values
- Example: Age 18-65, length 3-20 characters

**Size Boundaries:**
- Empty, single item, maximum size
- Example: Empty list, single element, full capacity

**Time Boundaries:**
- Start time, end time, duration limits
- Example: Business hours, session timeout

**Numeric Boundaries:**
- Zero, negative, positive, very large numbers
- Example: Amount = 0, negative balance, maximum value

### Common Boundary Defects

- **Off-by-one errors:** Using < instead of <=, or > instead of >=
- **Incorrect operators:** Wrong comparison operator at boundary
- **Missing boundary checks:** Not checking boundary conditions
- **Inclusive vs. exclusive:** Confusion about whether boundary is included

### Combining Techniques

- **With Equivalence Partitioning:** Use BVA to test boundaries between partitions
- **With Decision Tables:** Test boundary conditions in decision logic
- **With State Transition:** Test boundary conditions for state changes

### Best Practices

- **Test all boundaries:** Don't skip any boundary values
- **Test adjacent values:** Include values just inside and outside
- **Document boundaries:** Clearly identify what boundaries are being tested
- **Consider data types:** Different boundaries for integers, floats, strings
- **Review with developers:** Ensure boundaries match implementation

## Related Rules

- `equivalence-partitioning` - Partition input domain first, then test boundaries
- `decision-table-testing` - Test boundary conditions in decision logic
- `test-levels` - Apply at appropriate test levels
