---
description: Create a comprehensive test plan following ISTQB Foundation standards. Use when users ask to "create test plan", "plan testing", "define test strategy", "organize test activities", or need structured test planning with scope, resources, schedule, and criteria.
---

Create a comprehensive test plan document that defines test strategy, scope, approach, resources, schedule, and risks for testing activities. This command guides through creating a structured test plan following ISTQB Foundation Level standards.

## Workflow

### Step 1: Load istqb-foundation skill

```
skill({ name: 'istqb-foundation' })
```

### Step 2: Define test scope and objectives

**Objective:** Establish what will be tested, what will not be tested, and what testing aims to achieve.

**Actions:**
1. Review project requirements, specifications, or user stories
2. Identify features and components to be tested:
   - List all features, modules, or components in scope
   - Consider functional and non-functional aspects
   - Include integration points and interfaces
3. Explicitly define what is out of scope:
   - Features not included in this release
   - Components tested elsewhere
   - Legacy systems or third-party components (if applicable)
4. Define test objectives:
   - What testing aims to achieve
   - Quality goals and success criteria
   - Business objectives for testing

**Output:** Documented test scope with in-scope items, out-of-scope items, and clear test objectives.

**References:**
- `test-planning` - Test scope and objectives structure
- `test-levels` - Understanding different test levels
- `test-types` - Understanding different test types

### Step 3: Identify test levels and types

**Objective:** Determine which test levels and types will be applied to achieve comprehensive coverage.

**Actions:**
1. Identify test levels to apply:
   - **Component (Unit) Testing**: Individual components in isolation
   - **Integration Testing**: Interfaces between components
   - **System Testing**: Complete integrated system
   - **Acceptance Testing**: User/business perspective
2. Identify test types for each level:
   - **Functional Testing**: Verify system functions correctly
   - **Non-Functional Testing**: Performance, security, usability, reliability
   - **White-Box Testing**: Code structure and logic (usually component level)
   - **Change-Related Testing**: Regression and confirmation testing
3. Map test levels to test types:
   - Component level: Functional, white-box, change-related
   - Integration level: Functional, change-related
   - System level: Functional, non-functional, change-related
   - Acceptance level: Functional, non-functional (sometimes)
4. Document the test approach:
   - Which levels will be executed
   - Which types will be applied at each level
   - Rationale for the approach

**Output:** Documented test levels and types with clear mapping and rationale.

**References:**
- `test-levels` - Understanding test levels and their objectives
- `test-types` - Understanding test types and their application

### Step 4: Estimate test effort

**Objective:** Predict the effort, time, and resources needed for testing activities.

**Actions:**
1. Select estimation techniques (use multiple for better accuracy):
   - **Expert Judgment**: Consult experienced testers, use similar project experience
   - **Metrics-Based**: Use historical data (test cases per day, defects per test case)
   - **Work Breakdown Structure (WBS)**: Break testing into tasks and estimate each
   - **Three-Point Estimation**: Optimistic, pessimistic, most likely estimates
2. Break down testing activities:
   - Test planning and preparation
   - Test design and documentation
   - Test environment setup
   - Test execution
   - Defect retesting and confirmation
   - Test reporting and closure
3. Estimate effort for each activity:
   - Consider complexity and scope
   - Factor in team experience and skills
   - Include buffer for uncertainty and risks
4. Consider factors affecting estimation:
   - Test scope and complexity
   - Number of test cases (estimated)
   - Test environment setup time
   - Expected defect count and retesting effort
   - Team experience and availability
   - Project risks and dependencies
5. Calculate total estimate:
   - Sum individual activity estimates
   - Add contingency buffer (typically 10-20%)
   - Document assumptions made during estimation

**Output:** Test effort estimate with breakdown by activity, total effort, and documented assumptions.

**References:**
- `test-estimation` - Estimation techniques and factors
- `test-planning` - Integration of estimation into planning

### Step 5: Allocate resources

**Objective:** Identify and assign team members, skills, tools, and infrastructure needed for testing.

**Actions:**
1. Identify test team members and roles:
   - Test manager/lead
   - Test analysts/designers
   - Test executors
   - Test automation engineers (if applicable)
   - Specialists (performance, security, etc.)
2. Assess skills and training needs:
   - Required skills for the project
   - Current team capabilities
   - Training needs and timeline
   - External resources if needed
3. Identify tools and infrastructure:
   - Test management tools
   - Test automation tools
   - Defect tracking tools
   - Test environment requirements
   - Test data requirements
4. Allocate resources by test level/phase:
   - Who will work on which test level
   - Resource allocation timeline
   - Dependencies and availability
5. Consider budget and costs:
   - Tool licenses
   - Infrastructure costs
   - Training costs
   - External resources

**Output:** Resource allocation plan with team members, roles, skills, tools, and timeline.

**References:**
- `test-planning` - Resource allocation and organization
- `test-tool-selection` - Selecting appropriate tools

### Step 6: Define entry and exit criteria

**Objective:** Establish measurable conditions that determine when testing can begin and when it can be considered complete.

**Actions:**
1. Define entry criteria (conditions to start testing):
   - **Component Testing**: Code complete, unit test framework ready
   - **Integration Testing**: Components ready, interfaces defined
   - **System Testing**: System integrated, test environment ready, test data prepared
   - **Acceptance Testing**: System testing complete, acceptance criteria defined
2. Make entry criteria measurable:
   - Specific, quantifiable conditions
   - Example: "80% of components unit tested", "Test environment available and stable"
3. Define exit criteria (conditions to complete testing):
   - **Coverage criteria**: Requirement coverage, test case coverage, code coverage
   - **Defect criteria**: All critical defects fixed, defect density acceptable
   - **Quality criteria**: Performance targets met, security requirements verified
4. Make exit criteria measurable:
   - Specific metrics and thresholds
   - Example: "100% requirement coverage", "All P1 and P2 defects fixed", "Zero critical security vulnerabilities"
5. Document criteria for each test level:
   - Entry criteria per level
   - Exit criteria per level
   - Overall project exit criteria

**Output:** Documented entry and exit criteria for each test level with measurable conditions.

**References:**
- `test-planning` - Entry and exit criteria definition
- `test-monitoring` - Using criteria for progress tracking

### Step 7: Conduct risk analysis and define mitigation

**Objective:** Identify testing risks and define strategies to mitigate them.

**Actions:**
1. Identify product risks (software quality risks):
   - Areas with high probability of defects
   - Areas with high impact if defects occur
   - Complex functionality, new technology, frequent changes
2. Identify project risks (testing activity risks):
   - Schedule risks (delays, dependencies)
   - Resource risks (availability, skills)
   - Environment risks (stability, availability)
   - Tool risks (availability, compatibility)
3. Assess risk level for each identified risk:
   - **Risk = Probability × Impact**
   - High Risk: High probability and high impact
   - Medium Risk: Medium probability or medium impact
   - Low Risk: Low probability and low impact
4. Prioritize risks:
   - Focus on high-risk areas first
   - Allocate more testing effort to high-risk areas
5. Define mitigation strategies:
   - How to reduce probability
   - How to reduce impact
   - Contingency plans
6. Allocate testing effort based on risk:
   - High-risk areas: Comprehensive testing (60%+ effort)
   - Medium-risk areas: Standard testing (30% effort)
   - Low-risk areas: Basic testing (10% effort)

**Output:** Risk analysis document with identified risks, risk levels, prioritization, and mitigation strategies.

**References:**
- `risk-based-testing` - Risk identification, assessment, and prioritization
- `test-planning` - Integrating risk analysis into test planning

### Step 8: Create test schedule

**Objective:** Define test phases, milestones, timeline, and dependencies.

**Actions:**
1. Define test phases:
   - Test planning and preparation
   - Test design and documentation
   - Test environment setup
   - Test execution (by level)
   - Defect retesting
   - Test reporting and closure
2. Identify milestones:
   - Key deliverables and checkpoints
   - Phase completion dates
   - Go/no-go decision points
3. Create timeline:
   - Start and end dates for each phase
   - Duration for each activity
   - Dependencies on development activities
   - Buffer time for uncertainty
4. Map resources to timeline:
   - When resources are needed
   - Resource allocation over time
   - Resource dependencies
5. Identify dependencies:
   - Dependencies on development deliverables
   - Dependencies on other teams
   - External dependencies (tools, environments)
6. Document schedule assumptions:
   - Assumptions about development timeline
   - Assumptions about resource availability
   - Assumptions about environment readiness

**Output:** Test schedule with phases, milestones, timeline, dependencies, and assumptions.

**References:**
- `test-planning` - Test schedule and timeline
- `test-estimation` - Using estimates for scheduling

### Step 9: Define test deliverables

**Objective:** Identify all documents, reports, and artifacts that will be produced during testing.

**Actions:**
1. List test planning deliverables:
   - Test plan document
   - Test strategy document (if separate)
2. List test design deliverables:
   - Test cases
   - Test scripts
   - Test data
   - Test design specifications
3. List test execution deliverables:
   - Test execution results
   - Defect reports
   - Test logs
4. List test reporting deliverables:
   - Test progress reports
   - Test summary reports
   - Test completion reports
5. Define deliverable formats and standards:
   - Document templates
   - Naming conventions
   - Storage locations
   - Review and approval process

**Output:** List of test deliverables with formats, standards, and approval process.

**References:**
- `test-planning` - Test deliverables documentation

### Step 10: Document the test plan

**Objective:** Compile all information into a comprehensive, structured test plan document.

**Actions:**
1. Organize test plan sections:
   - **Introduction**: Purpose, scope, objectives
   - **Test Scope and Objectives**: From Step 2
   - **Test Approach**: Test levels and types from Step 3
   - **Test Schedule**: Timeline from Step 8
   - **Resources**: Allocation from Step 5
   - **Entry and Exit Criteria**: From Step 6
   - **Risks and Mitigation**: From Step 7
   - **Test Deliverables**: From Step 9
   - **Test Effort Estimate**: From Step 4
2. Ensure consistency:
   - All sections align with each other
   - Resources match schedule
   - Criteria match approach
   - Estimates match activities
3. Review and validate:
   - Check completeness
   - Verify accuracy
   - Ensure measurability of criteria
   - Confirm realism of estimates and schedule
4. Get stakeholder approval:
   - Review with project manager
   - Review with development team
   - Review with business stakeholders
   - Incorporate feedback

**Output:** Complete, approved test plan document ready for execution.

**References:**
- `test-planning` - Test plan structure and best practices

### Step 11: Final review

**Objective:** Verify the test plan is complete, realistic, and ready for execution.

**Checklist:**

1. **Completeness:**
   - [ ] Test scope clearly defined (in-scope and out-of-scope)
   - [ ] Test objectives documented
   - [ ] Test levels and types identified
   - [ ] Test effort estimated
   - [ ] Resources allocated
   - [ ] Entry/exit criteria defined and measurable
   - [ ] Risks identified and mitigation planned
   - [ ] Schedule created with dependencies
   - [ ] Deliverables identified

2. **Realism:**
   - [ ] Estimates are realistic and achievable
   - [ ] Schedule accounts for dependencies and buffers
   - [ ] Resources are available when needed
   - [ ] Entry criteria are achievable
   - [ ] Exit criteria are measurable and realistic

3. **Consistency:**
   - [ ] Resources match schedule requirements
   - [ ] Estimates align with activities
   - [ ] Criteria align with approach
   - [ ] Risk mitigation aligns with risk assessment
   - [ ] Deliverables match activities

4. **Alignment:**
   - [ ] Test plan aligns with project objectives
   - [ ] Test approach aligns with project methodology
   - [ ] Schedule aligns with development timeline
   - [ ] Resources align with project budget

5. **ISTQB Standards:**
   - [ ] Follows ISTQB Foundation Level practices
   - [ ] Uses standard terminology
   - [ ] Covers all required test plan elements
   - [ ] References relevant rules and techniques

**If any issues are found:**
- Address gaps or inconsistencies
- Revise estimates or schedule if unrealistic
- Update resource allocation if needed
- Re-validate with stakeholders

**Output:** Verified and approved test plan ready for execution.

## Summary

```
=== Test Plan Creation Complete ===

Test Scope: <brief description>
Test Levels: <levels identified>
Test Types: <types identified>
Estimated Effort: <total effort>
Resources: <team size and roles>
Schedule: <timeline>
Risks Identified: <count>
Deliverables: <count>

<brief summary of test plan>
```

## Related Rules

- `test-planning` - Comprehensive test planning guidance
- `test-estimation` - Estimation techniques and factors
- `risk-based-testing` - Risk analysis and prioritization
- `test-levels` - Understanding test levels
- `test-types` - Understanding test types
- `test-monitoring` - Monitoring progress against plan
