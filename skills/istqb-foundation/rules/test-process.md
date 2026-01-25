---
title: Test Process
impact: CRITICAL
impactDescription: Following a structured test process ensures systematic, complete, and effective testing activities, preventing ad-hoc approaches that miss critical testing activities.
tags: fundamentals, process, test-lifecycle
---

# Test Process

The test process provides a structured approach to testing activities, ensuring all necessary activities are performed systematically. The ISTQB test process consists of five main activities: test planning and control, test analysis and design, test implementation and execution, evaluating exit criteria and reporting, and test closure activities.

**Incorrect (what not to do):**

```markdown
Ad-hoc testing approach:
1. Write some test cases
2. Run the tests
3. Report bugs
4. Done

Problems:
- No planning or strategy
- No clear objectives or scope
- No entry/exit criteria
- No test analysis or design methodology
- No monitoring or control
- No closure activities or lessons learned
- Missing critical testing activities
- Unclear when testing is complete
```

**Explanation:** This ad-hoc approach misses critical activities like planning, analysis, monitoring, and closure. Without a structured process, testing becomes reactive and incomplete, leading to missed defects and unclear status.

**Correct (what to do):**

```markdown
Structured test process:

1. Test Planning and Control
   - Define test objectives and scope
   - Identify test levels and test types
   - Estimate effort and schedule
   - Define entry and exit criteria
   - Assign roles and responsibilities
   - Plan test environment and tools
   - Establish test monitoring and control mechanisms

2. Test Analysis and Design
   - Review test basis (requirements, specifications)
   - Identify test conditions
   - Design test cases using appropriate techniques
   - Identify test data requirements
   - Design test environment setup
   - Create traceability between test basis and test cases

3. Test Implementation and Execution
   - Develop and prioritize test cases
   - Create test suites
   - Prepare test data and test environment
   - Execute test cases
   - Log test results
   - Compare actual results with expected results
   - Report discrepancies as defects

4. Evaluating Exit Criteria and Reporting
   - Check test logs against exit criteria
   - Assess if more testing is needed
   - Write test summary report
   - Communicate test status and results

5. Test Closure Activities
   - Check that all planned deliverables are complete
   - Finalize and archive testware
   - Hand over testware to maintenance
   - Evaluate testing process and identify lessons learned
   - Document test completion report

Benefits:
- Systematic and complete coverage of testing activities
- Clear objectives and criteria for completion
- Better planning and resource allocation
- Traceability from requirements to test cases
- Effective monitoring and control
- Lessons learned for continuous improvement
```

**Explanation:** This structured approach ensures all necessary testing activities are performed systematically. Each phase has clear objectives and deliverables, providing visibility into test progress and ensuring nothing is missed.

## When to Apply

Apply the test process when:
- Starting a new testing project or phase
- Planning testing activities for a release
- Establishing testing practices for a team
- Ensuring complete coverage of testing activities
- Need structure and visibility into testing activities

## Additional Context

### Test Planning and Control

- **Planning:** Define what, when, how, and who for testing activities
- **Control:** Monitor progress, take corrective action, adjust plans as needed
- **Key outputs:** Test plan, test strategy, test schedule

### Test Analysis and Design

- **Analysis:** Identify what to test (test conditions) from test basis
- **Design:** Determine how to test (test cases) using test techniques
- **Key outputs:** Test conditions, test cases, test data requirements

### Test Implementation and Execution

- **Implementation:** Prepare testware (test cases, data, environment)
- **Execution:** Run tests, log results, report defects
- **Key outputs:** Test execution results, defect reports

### Evaluating Exit Criteria and Reporting

- **Evaluation:** Check if exit criteria are met
- **Reporting:** Communicate test status and results
- **Key outputs:** Test summary report, test status report

### Test Closure Activities

- **Closure:** Complete all activities, archive testware, document lessons learned
- **Key outputs:** Test completion report, archived testware, lessons learned

### Process Iteration

- The test process is iterative - activities may overlap or repeat
- In Agile, the process may be applied in shorter cycles
- Activities can be tailored based on project context

## Related Rules

- `test-planning` - Detailed guidance on test planning
- `test-monitoring` - Monitoring and control activities
- `testing-principles` - Fundamental principles that guide the process
