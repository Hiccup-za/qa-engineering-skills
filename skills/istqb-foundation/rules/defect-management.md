---
title: Defect Management
impact: HIGH
impactDescription: Systematic defect management ensures defects are properly documented, tracked, prioritized, and resolved, enabling effective communication and ensuring critical issues are addressed promptly.
tags: management, defects, bug-tracking
---

# Defect Management

Defect management involves the process of identifying, documenting, classifying, tracking, and resolving defects. A systematic defect management process ensures defects are properly handled, prioritized, and resolved, enabling effective communication between testers, developers, and stakeholders.

**Incorrect (what not to do):**

```markdown
Informal defect reporting:
"We just tell developers about bugs verbally or in chat. 
We don't document them formally. If it's important, 
we'll remember to follow up."

Problems:
- Defects may be forgotten or lost
- No tracking of defect status
- Difficult to prioritize
- No history or metrics
- Poor communication
- Can't measure defect trends
- Critical defects may be missed
```

**Explanation:** Informal defect reporting leads to lost defects, poor tracking, and communication issues. Without proper documentation and tracking, defects may be forgotten, priorities unclear, and there's no way to measure progress or trends.

**Correct (what to do):**

```markdown
Systematic defect management:

Defect Lifecycle:
1. New: Defect discovered and logged
2. Assigned: Assigned to developer for fixing
3. Open: Developer is working on fix
4. Fixed: Developer has fixed the defect
5. Retest: Tester verifies the fix
6. Closed: Defect verified and closed
7. Reopened: Fix didn't work, defect reopened

Defect Information:
- ID: Unique identifier
- Title: Brief summary
- Description: Detailed description
- Steps to Reproduce: Clear steps
- Expected Result: What should happen
- Actual Result: What actually happens
- Severity: Impact level (Critical, High, Medium, Low)
- Priority: Urgency (P1, P2, P3, P4)
- Environment: Where defect was found
- Attachments: Screenshots, logs, files

Defect Classification:
- Severity (Impact):
  * Critical: System crash, data loss, security breach
  * High: Major functionality broken
  * Medium: Minor functionality issue
  * Low: Cosmetic, minor issue

- Priority (Urgency):
  * P1: Fix immediately (blocks release)
  * P2: Fix in current release
  * P3: Fix in next release
  * P4: Fix when time permits

Defect Tracking:
- Use defect tracking tool
- Update status regularly
- Link to test cases
- Track resolution time
- Monitor defect trends

Benefits:
- No defects lost or forgotten
- Clear status tracking
- Proper prioritization
- Effective communication
- Defect metrics and trends
- Historical data for analysis
```

**Explanation:** This systematic approach ensures defects are properly documented, tracked, and managed through their lifecycle. Clear classification enables prioritization, and tracking provides visibility and metrics. This enables effective communication and ensures critical defects are addressed.

## When to Apply

Apply defect management when:
- Defects are discovered during testing
- Need to track defect status and resolution
- Want to prioritize defects effectively
- Need defect metrics and reporting
- Want to communicate defects clearly
- Need historical defect data
- Want to measure defect trends

## Additional Context

### Defect Lifecycle States

**New:**
- Defect discovered and logged
- Initial state when defect is reported

**Assigned:**
- Defect assigned to developer
- Ready for developer to work on

**Open/In Progress:**
- Developer is working on fix
- Defect is being addressed

**Fixed:**
- Developer has completed fix
- Ready for retesting

**Retest:**
- Tester verifies the fix
- Confirmation testing

**Closed:**
- Defect verified as fixed
- No further action needed

**Reopened:**
- Fix didn't work
- Defect needs to be fixed again

**Deferred:**
- Defect postponed to later release
- Won't be fixed now

**Rejected:**
- Not a defect (by design, duplicate, etc.)
- Won't be fixed

### Defect Information

**Essential Information:**
- Clear title and description
- Steps to reproduce
- Expected vs. actual results
- Environment details
- Severity and priority

**Additional Information:**
- Screenshots or videos
- Log files or error messages
- Test data used
- Related test cases
- Workarounds if any

### Defect Classification

**Severity (Impact on System):**
- **Critical:** System unusable, data loss, security breach
- **High:** Major functionality broken, workaround available
- **Medium:** Minor functionality issue, workaround available
- **Low:** Cosmetic, minor issue, no workaround needed

**Priority (Urgency to Fix):**
- **P1:** Must fix immediately, blocks release
- **P2:** Fix in current release, high priority
- **P3:** Fix in next release, medium priority
- **P4:** Fix when time permits, low priority

### Defect Metrics

**Defect Counts:**
- Total defects found
- Defects by severity
- Defects by status
- Defects by component

**Defect Rates:**
- Defect density (defects per test case)
- Defect detection rate
- Defect resolution rate

**Defect Trends:**
- Defects found over time
- Defects fixed over time
- Open defects trend

### Best Practices

- **Document clearly:** Provide complete, clear information
- **Reproduce consistently:** Ensure steps are accurate
- **Classify correctly:** Use severity and priority appropriately
- **Update status:** Keep defect status current
- **Communicate:** Notify stakeholders of critical defects
- **Track metrics:** Monitor defect trends
- **Learn:** Use defect data to improve processes

## Related Rules

- `test-monitoring` - Monitor defect metrics
- `risk-based-testing` - Consider defect risk in testing
- `psychology-of-testing` - Communicate defects effectively
