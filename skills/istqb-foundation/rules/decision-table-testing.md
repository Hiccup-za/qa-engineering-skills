---
title: Decision Table Testing
impact: HIGH
impactDescription: Decision table testing systematically tests combinations of conditions and actions, ensuring complete coverage of business rules and complex logic with clear, traceable test cases.
tags: techniques, black-box, test-design
---

# Decision Table Testing

Decision table testing is used for testing business rules and complex logic where different combinations of conditions lead to different actions. A decision table lists all combinations of conditions and the corresponding actions, making it easy to identify test cases and ensure complete coverage.

**Incorrect (what not to do):**

```markdown
Ad-hoc testing of business rules:
Business Rule: Discount depends on customer type and order amount

Test Cases:
- Regular customer, $50 order → No discount
- Premium customer, $100 order → 10% discount
- VIP customer, $200 order → 20% discount

Problems:
- Doesn't test all combinations
- Missing test cases (e.g., regular customer with $200)
- Unclear what all the rules are
- May miss edge cases or invalid combinations
- No systematic coverage
```

**Explanation:** This ad-hoc approach doesn't systematically cover all combinations of conditions. Important test cases may be missed, and the complete set of business rules isn't clearly documented. This leads to incomplete coverage and potential missed defects.

**Correct (what to do):**

```markdown
Systematic decision table:

Business Rule: Discount depends on customer type and order amount
- Customer types: Regular, Premium, VIP
- Order amounts: < $100, $100-$200, > $200

Decision Table:

| Rule | Customer Type | Order Amount | Discount |
|------|---------------|--------------|----------|
| 1    | Regular       | < $100       | 0%       |
| 2    | Regular       | $100-$200    | 5%       |
| 3    | Regular       | > $200       | 10%      |
| 4    | Premium       | < $100       | 5%       |
| 5    | Premium       | $100-$200    | 10%      |
| 6    | Premium       | > $200       | 15%      |
| 7    | VIP           | < $100       | 10%      |
| 8    | VIP           | $100-$200    | 15%      |
| 9    | VIP           | > $200       | 20%      |

Test Cases (one per rule):
1. Regular, $50 → 0% discount
2. Regular, $150 → 5% discount
3. Regular, $250 → 10% discount
4. Premium, $50 → 5% discount
5. Premium, $150 → 10% discount
6. Premium, $250 → 15% discount
7. VIP, $50 → 10% discount
8. VIP, $150 → 15% discount
9. VIP, $250 → 20% discount

Benefits:
- Complete coverage of all combinations
- Clear documentation of business rules
- Easy to identify missing test cases
- Traceable from requirements to tests
- Systematic and maintainable
```

**Explanation:** This systematic approach creates a decision table that lists all combinations of conditions and their corresponding actions. Each row becomes a test case, ensuring complete coverage. The table clearly documents business rules and makes it easy to verify all combinations are tested.

## When to Apply

Apply decision table testing when:
- Testing business rules with multiple conditions
- Different combinations of conditions lead to different actions
- Need to ensure all combinations are tested
- Complex logic with multiple if-then-else conditions
- Business rules need clear documentation
- Want systematic coverage of condition combinations

## Additional Context

### Decision Table Structure

**Conditions:** Inputs or states that affect the outcome
**Actions:** Outputs or behaviors that result from condition combinations
**Rules:** Rows in the table, each representing one combination

### Creating Decision Tables

1. **Identify conditions:** List all conditions that affect the outcome
2. **Identify actions:** List all possible actions or outcomes
3. **Create combinations:** List all combinations of condition values
4. **Determine actions:** For each combination, determine the correct action
5. **Simplify (optional):** Remove impossible or redundant combinations
6. **Create test cases:** One test case per rule

### Types of Decision Tables

**Limited Entry Table:**
- Conditions have binary values (Yes/No, True/False)
- Simplest form, easy to create and understand

**Extended Entry Table:**
- Conditions can have multiple values
- More compact for conditions with multiple values
- Example: Customer type = Regular/Premium/VIP

**Mixed Entry Table:**
- Combination of limited and extended entries
- Use when some conditions are binary, others have multiple values

### Simplifying Decision Tables

- **Impossible combinations:** Remove rules that can't occur
- **Don't care conditions:** Mark conditions that don't affect the action
- **Default actions:** Identify rules with the same action that can be combined

### Common Applications

- **Business rules:** Discounts, pricing, eligibility
- **Validation logic:** Input validation with multiple conditions
- **Workflow rules:** Approval processes, state transitions
- **Configuration:** Feature flags, settings combinations

### Best Practices

- **Complete coverage:** Ensure all combinations are included
- **Clear conditions:** Make conditions specific and testable
- **Document assumptions:** Note any impossible combinations
- **Review with stakeholders:** Validate rules are correct
- **Maintain traceability:** Link rules to requirements
- **Keep updated:** Update table when requirements change

## Related Rules

- `equivalence-partitioning` - Use equivalence classes for condition values
- `boundary-value-analysis` - Test boundary values in conditions
- `state-transition-testing` - For state-based decision logic
