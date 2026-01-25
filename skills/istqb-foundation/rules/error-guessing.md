---
title: Error Guessing
impact: MEDIUM
impactDescription: Error guessing leverages tester experience and intuition to identify likely error locations and common defect patterns, complementing systematic techniques with experience-based test case selection.
tags: techniques, experience-based, test-design
---

# Error Guessing

Error guessing is an experience-based test technique where testers use their knowledge, experience, and intuition to identify likely locations of defects and design test cases accordingly. It complements systematic techniques by leveraging tester expertise to find defects that might be missed by formal methods.

**Incorrect (what not to do):**

```markdown
Relying only on systematic techniques:
"We use equivalence partitioning and boundary value analysis. 
That's all we need. We don't need to think about common errors."

Problems:
- Misses defects that systematic techniques don't cover
- Doesn't leverage tester experience
- May miss common error patterns
- Ignores lessons learned from past projects
- Doesn't use intuition about likely problem areas
```

**Explanation:** Relying only on systematic techniques misses opportunities to leverage tester experience. Common error patterns and likely defect locations identified through experience won't be tested. This approach doesn't use the valuable knowledge testers have gained from past projects.

**Correct (what to do):**

```markdown
Combining systematic techniques with error guessing:

Systematic Test Cases (from equivalence partitioning):
- Valid input: "user123"
- Invalid: too short, too long, invalid characters

Error Guessing Test Cases (based on experience):
1. SQL injection attempt: "user' OR '1'='1"
   - Common security vulnerability
2. Special characters: "user@#$%"
   - May cause parsing or validation issues
3. Unicode characters: "usér123"
   - May cause encoding problems
4. Very long input: 1000+ characters
   - May cause buffer overflow or performance issues
5. Null/undefined values
   - Common source of null pointer exceptions
6. Negative numbers for positive-only fields
   - Common logic error
7. Boundary + 1 more: 21 characters when limit is 20
   - Off-by-one errors are common

Benefits:
- Finds defects systematic techniques miss
- Leverages tester experience and knowledge
- Tests common error patterns
- Complements systematic approaches
- Uses lessons learned from past projects
```

**Explanation:** This approach combines systematic techniques with error guessing. Testers use their experience to identify likely error locations and common defect patterns, creating test cases that systematic techniques might miss. This provides more comprehensive coverage.

## When to Apply

Apply error guessing when:
- Complementing systematic test techniques
- Tester has relevant experience and domain knowledge
- Need to find common error patterns
- Limited time or resources for systematic testing
- Testing areas with known problem patterns
- Want to leverage lessons learned
- Need quick test case ideas

## Additional Context

### Common Error Patterns

**Input Validation Errors:**
- Missing validation for edge cases
- Incorrect validation logic
- Bypassing validation

**Boundary Errors:**
- Off-by-one errors
- Incorrect comparison operators
- Missing boundary checks

**State Errors:**
- Invalid state transitions
- State-dependent behavior issues
- Race conditions

**Integration Errors:**
- Interface mismatches
- Data format issues
- Communication failures

**Security Errors:**
- SQL injection
- Cross-site scripting (XSS)
- Authentication bypass

**Performance Errors:**
- Memory leaks
- Infinite loops
- Resource exhaustion

### Sources of Error Guessing

**Past Experience:**
- Defects found in previous projects
- Common error patterns observed
- Areas that frequently have issues

**Domain Knowledge:**
- Understanding of business rules
- Knowledge of user behavior
- Awareness of common mistakes

**Technical Knowledge:**
- Understanding of technology stack
- Known issues with frameworks/libraries
- Common programming errors

**Intuition:**
- Gut feeling about problem areas
- Suspicion about complex code
- Concerns about risky areas

### Best Practices

- **Document rationale:** Note why you suspect errors in certain areas
- **Combine with systematic techniques:** Don't replace, complement
- **Share knowledge:** Document common errors for team
- **Learn from defects:** Use past defects to improve error guessing
- **Review with team:** Discuss likely error locations
- **Prioritize:** Focus on high-risk or complex areas

### Limitations

- **Subjective:** Depends on tester experience
- **Incomplete:** May miss errors in unexpected places
- **Not systematic:** Can't guarantee coverage
- **Requires experience:** Less effective for inexperienced testers

## Related Rules

- `equivalence-partitioning` - Systematic technique to complement
- `boundary-value-analysis` - Systematic technique to complement
- `exploratory-testing` - Another experience-based technique
