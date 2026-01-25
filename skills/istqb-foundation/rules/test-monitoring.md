---
title: Test Monitoring
impact: HIGH
impactDescription: Test monitoring tracks test progress against plan, identifies issues early, and enables corrective action, ensuring testing stays on track and objectives are met.
tags: management, monitoring, control
---

# Test Monitoring

Test monitoring involves tracking test progress, metrics, and status against the test plan. Monitoring enables early identification of issues and taking corrective action to keep testing on track. Key metrics include test progress, coverage, defects, and execution status.

**Incorrect (what not to do):**

```markdown
No monitoring or tracking:
"We just test and report when we're done. We don't track 
progress or metrics. We'll know if we're behind when the 
deadline arrives."

Problems:
- No visibility into progress
- Issues discovered too late
- Can't take corrective action
- Unclear if objectives will be met
- No early warning of problems
- Can't adjust plans proactively
```

**Explanation:** Without monitoring, there's no visibility into test progress or issues. Problems are discovered only when deadlines are missed or objectives aren't met. There's no opportunity for early intervention or corrective action.

**Correct (what to do):**

```markdown
Systematic test monitoring:

Key Metrics to Monitor:

1. Test Progress
   - Planned vs. actual test cases executed
   - Test execution rate (test cases per day)
   - Percentage of tests completed
   - Example: 150/200 test cases executed (75%)

2. Test Coverage
   - Requirements coverage
   - Code coverage (statement, branch)
   - Risk coverage
   - Example: 18/20 requirements covered (90%)

3. Defect Metrics
   - Defects found (total, by severity)
   - Defect density (defects per test case)
   - Defect detection rate
   - Defect resolution rate
   - Example: 25 defects found, 20 fixed, 5 open

4. Test Execution Status
   - Passed, failed, blocked, skipped
   - Test execution trends
   - Example: 120 passed, 15 failed, 10 blocked, 5 skipped

5. Schedule and Effort
   - Planned vs. actual effort
   - Schedule variance
   - Remaining effort estimate
   - Example: 40 hours planned, 35 hours spent, 10 hours remaining

Monitoring Activities:
- Daily/weekly status updates
- Progress dashboards
- Metrics collection and analysis
- Trend analysis
- Issue identification
- Corrective action planning

Benefits:
- Early identification of issues
- Visibility into progress
- Data-driven decision making
- Ability to take corrective action
- Better communication with stakeholders
- Improved planning accuracy
```

**Explanation:** This systematic approach tracks key metrics and provides visibility into test progress. By monitoring regularly, issues are identified early, enabling corrective action. This keeps testing on track and ensures objectives are met.

## When to Apply

Apply test monitoring when:
- Need visibility into test progress
- Want to track against test plan
- Need to identify issues early
- Want data for decision making
- Need to report status to stakeholders
- Want to improve future planning
- Need to take corrective action

## Additional Context

### Key Metrics

**Test Progress Metrics:**
- Test cases planned vs. executed
- Test execution rate
- Percentage complete
- Remaining test cases

**Coverage Metrics:**
- Requirements coverage
- Code coverage (statement, branch)
- Risk coverage
- Test type coverage

**Defect Metrics:**
- Total defects found
- Defects by severity
- Defect density
- Defect detection rate
- Defect resolution rate
- Defect trends

**Execution Metrics:**
- Pass/fail/blocked/skipped counts
- Test execution trends
- Execution rate
- Blocking issues

**Schedule Metrics:**
- Planned vs. actual effort
- Schedule variance
- Remaining effort
- Milestone status

### Monitoring Frequency

**Daily:**
- Test execution status
- Defect counts
- Blocking issues

**Weekly:**
- Progress against plan
- Coverage metrics
- Trend analysis
- Status reports

**Per Phase:**
- Phase completion review
- Overall progress assessment
- Lessons learned

### Test Control

**Corrective Actions:**
- Adjust test plan if needed
- Reallocate resources
- Change test approach
- Update schedule
- Address blocking issues

**When to Take Action:**
- Progress behind schedule
- Coverage below target
- Defect rate higher than expected
- Blocking issues identified
- Resources unavailable

### Best Practices

- **Monitor regularly:** Daily or weekly depending on project
- **Use dashboards:** Visual representation of metrics
- **Track trends:** Look for patterns over time
- **Compare to plan:** Actual vs. planned
- **Take action:** Don't just monitor, act on findings
- **Communicate:** Share status with stakeholders
- **Learn:** Use data to improve future planning

## Related Rules

- `test-planning` - Monitor progress against plan
- `test-estimation` - Compare actual vs. estimated
- `defect-management` - Monitor defect metrics
