---
title: State Transition Testing
impact: HIGH
impactDescription: State transition testing systematically tests state-based behavior and transitions, ensuring all valid and invalid state changes are covered, which is critical for systems with state-dependent behavior.
tags: techniques, black-box, test-design
---

# State Transition Testing

State transition testing is used for systems that exhibit state-based behavior, where the system's response depends on its current state and the input received. Test cases are designed to test valid and invalid state transitions, ensuring the system behaves correctly in all states.

**Incorrect (what not to do):**

```markdown
Ad-hoc state testing:
System: User account states (New, Active, Suspended, Closed)

Test Cases:
- Create account → New state
- Activate account → Active state
- Close account → Closed state

Problems:
- Doesn't test all state transitions
- Missing invalid transitions (e.g., Closed → Active)
- Doesn't test state-dependent behavior
- Unclear what transitions are valid/invalid
- May miss important state combinations
```

**Explanation:** This ad-hoc approach doesn't systematically test all state transitions. Invalid transitions are missed, and state-dependent behavior isn't fully tested. The complete state machine isn't documented, making it hard to verify coverage.

**Correct (what to do):**

```markdown
Systematic state transition testing:

System: User account with states: New, Active, Suspended, Closed

Step 1: Create state transition diagram/table

States: New, Active, Suspended, Closed

Valid Transitions:
- New → Active (activate)
- Active → Suspended (suspend)
- Active → Closed (close)
- Suspended → Active (reactivate)
- Suspended → Closed (close)

Invalid Transitions:
- New → Suspended (cannot suspend new account)
- New → Closed (must activate first)
- Active → New (cannot go backwards)
- Closed → Active (closed accounts cannot be reactivated)
- Closed → Suspended (closed accounts are final)

Step 2: Create test cases

Valid Transitions:
1. New → Activate → Active
2. Active → Suspend → Suspended
3. Active → Close → Closed
4. Suspended → Reactivate → Active
5. Suspended → Close → Closed

Invalid Transitions:
6. New → Suspend → Error (invalid transition)
7. New → Close → Error (invalid transition)
8. Closed → Activate → Error (invalid transition)

State-Dependent Behavior:
9. Active → Login → Success
10. Suspended → Login → Error (account suspended)
11. Closed → Login → Error (account closed)

Benefits:
- Complete coverage of all state transitions
- Tests both valid and invalid transitions
- Documents state machine clearly
- Tests state-dependent behavior
- Systematic and maintainable
```

**Explanation:** This systematic approach documents the complete state machine, identifies all valid and invalid transitions, and creates test cases to verify each transition. It also tests state-dependent behavior, ensuring the system behaves correctly in all states.

## When to Apply

Apply state transition testing when:
- System has distinct states
- Behavior depends on current state
- State transitions need to be verified
- Testing workflows or processes
- Testing state machines or finite state automata
- Need to verify invalid transitions are rejected
- Testing state-dependent functionality

## Additional Context

### State Transition Diagram Elements

**States:** Distinct conditions or modes the system can be in
**Transitions:** Changes from one state to another
**Events/Triggers:** Inputs or actions that cause transitions
**Actions:** Behaviors that occur during transitions or in states

### Creating State Transition Tests

1. **Identify states:** List all possible states
2. **Identify transitions:** List all possible state changes
3. **Identify events:** List inputs that trigger transitions
4. **Create diagram/table:** Document state machine
5. **Identify valid transitions:** Determine which transitions are allowed
6. **Identify invalid transitions:** Determine which transitions should be rejected
7. **Create test cases:** Test each valid and invalid transition
8. **Test state behavior:** Test functionality in each state

### Types of State Transitions

**Valid Transitions:**
- Transitions that should succeed
- Test that transition occurs correctly
- Verify system is in correct state after transition

**Invalid Transitions:**
- Transitions that should be rejected
- Test that transition is prevented
- Verify appropriate error handling

**State-Dependent Behavior:**
- Functionality that depends on current state
- Test that behavior is correct in each state
- Example: Login only works in Active state

### Common Applications

- **User accounts:** Registration, activation, suspension, closure
- **Workflows:** Approval processes, order processing
- **Sessions:** Login, active, timeout, logout
- **Resources:** Available, in-use, locked, released
- **Configuration:** Enabled, disabled, pending

### Best Practices

- **Document state machine:** Create clear diagram or table
- **Test all transitions:** Both valid and invalid
- **Test state behavior:** Verify functionality in each state
- **Consider concurrent access:** Test state transitions under load
- **Review with stakeholders:** Validate state model is correct
- **Maintain traceability:** Link states to requirements

## Related Rules

- `decision-table-testing` - For complex state transition logic
- `use-case-testing` - State transitions in user workflows
- `test-levels` - Apply at appropriate test levels
