---
title: Static Testing Reviews
impact: HIGH
impactDescription: Conducting systematic reviews finds defects early when they're cheap to fix, improves document and code quality, and enables knowledge sharing across the team.
tags: static, reviews, early-testing
---

# Static Testing Reviews

Static testing involves examining software work products (requirements, design, code) without executing them. Reviews are a form of static testing where work products are examined by people to find defects, improve quality, and share knowledge. Review types include informal reviews, walkthroughs, technical reviews, and inspections.

**Incorrect (what not to do):**

```markdown
No reviews or ad-hoc reviews:
"We don't review documents or code. We just write it and move on. 
If there are issues, we'll find them during testing."

Problems:
- Defects found late are expensive to fix
- Requirements defects propagate to design and code
- Code defects found only during execution
- No early feedback on quality
- Knowledge not shared across team
- Quality issues discovered too late
```

**Explanation:** Skipping reviews means defects are found late when they're expensive to fix. Requirements defects propagate through design and code, multiplying the cost. Code defects are only found during execution, missing opportunities for early detection.

**Correct (what to do):**

```markdown
Systematic review process:

1. Informal Review
   - Quick, casual review
   - No formal process
   - Author asks colleague to review
   - Good for: Early feedback, simple documents

2. Walkthrough
   - Author presents work product
   - Participants ask questions and provide feedback
   - Led by author
   - Good for: Learning, early feedback, simple reviews

3. Technical Review
   - Formal review by technical experts
   - Focus on technical correctness
   - Led by moderator
   - Good for: Technical documents, architecture, code

4. Inspection
   - Most formal review type
   - Systematic process with defined roles
   - Focus on finding defects
   - Led by moderator, includes recorder
   - Good for: Critical documents, standards compliance

Review Process:
1. Planning: Select review type, assign roles, schedule
2. Kick-off: Distribute materials, explain objectives
3. Individual preparation: Reviewers examine work product
4. Review meeting: Discuss findings (for formal reviews)
5. Rework: Author fixes identified issues
6. Follow-up: Verify fixes are complete

Benefits:
- Finds defects early (cheap to fix)
- Improves document and code quality
- Shares knowledge across team
- Ensures standards compliance
- Prevents defect propagation
```

**Explanation:** This systematic approach finds defects early when they're cheap to fix. Different review types suit different needs, from informal quick checks to formal inspections for critical work products. The structured process ensures thoroughness and follow-up.

## When to Apply

Apply reviews when:
- Requirements or specifications are written
- Design documents are created
- Code is written (code reviews)
- Test plans or test cases are created
- Any work product needs quality check
- Need early defect detection
- Want to share knowledge across team
- Need to ensure standards compliance

## Additional Context

### Review Types

**Informal Review:**
- No formal process or documentation
- Quick feedback from colleagues
- Good for: Early drafts, simple documents, quick checks
- Low overhead, fast feedback

**Walkthrough:**
- Author presents work product
- Participants provide feedback and ask questions
- Led by author
- Good for: Learning, early feedback, simple reviews
- Less formal, collaborative

**Technical Review:**
- Formal review by technical experts
- Focus on technical correctness and quality
- Led by moderator (not author)
- Good for: Technical documents, architecture, code, test plans
- More formal, technical focus

**Inspection:**
- Most formal and rigorous
- Systematic process with defined roles
- Focus on finding defects
- Roles: Moderator, author, reviewer, recorder
- Good for: Critical documents, standards compliance, high-risk areas
- Most thorough, highest overhead

### Review Roles

- **Author:** Creator of the work product being reviewed
- **Moderator:** Leads the review (for formal reviews)
- **Reviewer:** Examines the work product and provides feedback
- **Recorder:** Documents findings (for inspections)
- **Manager:** Decides on review necessity and resources

### What to Review

- **Requirements:** Completeness, consistency, testability, clarity
- **Design:** Architecture, interfaces, algorithms, data structures
- **Code:** Logic, standards compliance, maintainability, security
- **Test Plans:** Coverage, completeness, testability
- **User Documentation:** Accuracy, completeness, usability

### Review Benefits

- **Early defect detection:** Find defects before they propagate
- **Cost savings:** Early fixes are much cheaper
- **Quality improvement:** Better documents and code
- **Knowledge sharing:** Team learns from each other
- **Standards compliance:** Ensures adherence to standards
- **Risk reduction:** Critical issues identified early

### Common Review Issues

- **Too formal:** Overhead exceeds benefits for simple documents
- **Too informal:** Missing important defects
- **No follow-up:** Issues not fixed
- **Wrong reviewers:** Not enough expertise or too many people
- **Poor preparation:** Reviewers not ready, waste time

## Related Rules

- `static-analysis` - Automated static testing tools
- `test-process` - Where reviews fit in the test process
- `testing-principles` - Early testing saves time and money
