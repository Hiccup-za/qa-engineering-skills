---
title: Equivalence Partitioning
impact: CRITICAL
impactDescription: Equivalence partitioning systematically divides input domain into classes, enabling efficient test case selection with fewer tests while maintaining good coverage of the input space.
tags: techniques, black-box, test-design
---

# Equivalence Partitioning

Equivalence partitioning divides the input domain into equivalence classes where all values in a class are expected to be handled the same way. Test cases are selected to cover each equivalence class, reducing the number of tests needed while maintaining coverage.

**Incorrect (what not to do):**

```markdown
Ad-hoc test case selection:
Test Case 1: Username = "test"
Test Case 2: Username = "user123"
Test Case 3: Username = "admin"
Test Case 4: Username = "abc"
Test Case 5: Username = "xyz"

Problems:
- No systematic approach
- Unclear why these specific values were chosen
- May miss important equivalence classes
- Wastes effort testing similar values
- No coverage of invalid inputs
- Difficult to maintain or explain rationale
```

**Explanation:** This ad-hoc approach lacks systematic coverage. Testing multiple similar valid values wastes effort, and invalid inputs are completely missed. There's no clear rationale for test case selection, making it hard to maintain or justify coverage.

**Correct (what to do):**

```markdown
Systematic equivalence partitioning:

Requirement: Username must be 3-20 alphanumeric characters

Step 1: Identify equivalence classes
- Valid: 3-20 alphanumeric characters
- Invalid: Less than 3 characters
- Invalid: More than 20 characters
- Invalid: Contains non-alphanumeric characters
- Invalid: Empty string
- Invalid: Null value

Step 2: Select test cases (one from each class)
- Valid: "user123" (valid length, valid characters)
- Invalid: "ab" (too short, < 3)
- Invalid: "verylongusernamethatexceedslimit" (too long, > 20)
- Invalid: "user@123" (invalid character: @)
- Invalid: "" (empty)
- Invalid: null (null value)

Benefits:
- Systematic coverage of input domain
- Clear rationale for each test case
- Fewer tests with better coverage
- Covers both valid and invalid inputs
- Easy to maintain and explain
- Reproducible approach
```

**Explanation:** This systematic approach divides the input domain into equivalence classes and selects one representative from each class. This provides comprehensive coverage with fewer tests, clear rationale, and includes both valid and invalid inputs.

## When to Apply

Apply equivalence partitioning when:
- Testing input validation
- Need systematic test case selection
- Want to reduce number of test cases
- Testing functions with input parameters
- Need clear rationale for test coverage
- Requirements specify input ranges or constraints

## Additional Context

### Process

1. **Identify input domain:** Understand all possible inputs
2. **Partition into classes:** Group inputs that should be handled the same way
3. **Select test cases:** Choose one representative from each class
4. **Document rationale:** Explain why each class is important

### Equivalence Class Types

**Valid Equivalence Classes:**
- Inputs that should be accepted and processed correctly
- Example: Valid username, valid age range, valid date format

**Invalid Equivalence Classes:**
- Inputs that should be rejected or cause errors
- Example: Invalid format, out of range, wrong data type

### Common Partitioning Criteria

- **Range:** Numbers within/outside valid range
- **Format:** Valid/invalid format (email, phone, date)
- **Type:** Correct/incorrect data type
- **Length:** String length within/outside limits
- **Value:** Specific valid/invalid values
- **State:** Valid/invalid system state

### Combining with Other Techniques

- **Boundary Value Analysis:** Test boundaries between equivalence classes
- **Decision Tables:** Use equivalence classes as conditions
- **State Transition:** Equivalence classes for states

### Best Practices

- **Cover all classes:** Ensure at least one test per equivalence class
- **Include invalid classes:** Don't forget to test invalid inputs
- **Document rationale:** Explain why each class matters
- **Review with team:** Validate classes are correct and complete
- **Update as needed:** Adjust classes if requirements change

## Related Rules

- `boundary-value-analysis` - Test boundaries between equivalence classes
- `decision-table-testing` - Use equivalence classes in decision tables
- `test-levels` - Apply at appropriate test levels
