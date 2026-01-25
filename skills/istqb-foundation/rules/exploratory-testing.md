---
title: Exploratory Testing
impact: MEDIUM
impactDescription: Exploratory testing combines test design and execution with learning, allowing testers to adapt testing based on discoveries, making it effective for finding unexpected defects and understanding system behavior.
tags: techniques, experience-based, adaptive-testing
---

# Exploratory Testing

Exploratory testing is an approach to testing where test design and test execution occur simultaneously. Testers explore the system, learn about it, design tests based on what they discover, and execute those tests immediately. It's particularly effective for finding unexpected defects and understanding system behavior.

**Incorrect (what not to do):**

```markdown
Rigid, pre-scripted testing only:
"We only use pre-written test cases. We execute them exactly 
as written and don't deviate. We don't explore or experiment."

Problems:
- Doesn't adapt to discoveries
- Misses unexpected defects
- Doesn't leverage tester intuition
- Limited to pre-planned scenarios
- Can't respond to what's learned during testing
- May miss important issues not in test plan
```

**Explanation:** Rigid adherence to pre-scripted tests doesn't allow adaptation based on discoveries. If testers find something interesting or unexpected, they can't explore it further. This limits the ability to find unexpected defects and understand system behavior.

**Correct (what to do):**

```markdown
Structured exploratory testing:

Process:
1. Learn: Understand the feature/system
2. Design: Create test ideas based on learning
3. Execute: Run tests immediately
4. Interpret: Analyze results and learn more
5. Adapt: Adjust testing based on discoveries
6. Repeat: Continue exploring

Example Session:
- Start: Testing login feature
- Discover: Password field accepts 1000+ characters
- Explore: Test with very long password
- Find: System crashes with 2000+ character password
- Explore further: Test boundary around crash point
- Document: Found buffer overflow vulnerability
- Adapt: Add security testing to session plan

Session Charter:
- Time-boxed: 90-minute session
- Focus: Login and authentication
- Mission: Find security and usability issues
- Notes: Document findings and test ideas
- Debrief: Share findings with team

Benefits:
- Adapts to discoveries
- Finds unexpected defects
- Leverages tester skills and intuition
- Efficient use of testing time
- Good for learning system behavior
- Complements scripted testing
```

**Explanation:** This structured exploratory approach allows testers to learn, design, execute, and adapt simultaneously. When something interesting is discovered, testers can explore it immediately. This makes testing adaptive and effective at finding unexpected defects.

## When to Apply

Apply exploratory testing when:
- Need to learn system behavior quickly
- Want to find unexpected defects
- Limited documentation or specifications
- Need to adapt testing based on discoveries
- Complementing scripted testing
- Testing new or unfamiliar features
- Time-boxed testing sessions
- Want to leverage tester creativity and intuition

## Additional Context

### Exploratory Testing Characteristics

**Simultaneous Activities:**
- Test design and execution happen together
- Learning and testing occur simultaneously
- Adaptation based on discoveries

**Tester-Driven:**
- Tester controls what to test and when
- Uses tester skills, knowledge, and intuition
- Adapts approach based on findings

**Learning-Oriented:**
- Focus on understanding system behavior
- Learn about system while testing
- Use learning to guide further testing

### Session-Based Exploratory Testing

**Session Structure:**
- **Charter:** Mission and focus for the session
- **Time-boxed:** Fixed duration (e.g., 90 minutes)
- **Notes:** Document findings and test ideas
- **Debrief:** Share findings after session

**Session Charter Elements:**
- What to test (feature, area)
- Mission (what to find, learn)
- Time limit
- Starting point
- Questions to answer

### Types of Exploratory Testing

**Freestyle:**
- Unstructured exploration
- Tester follows intuition
- Good for initial learning

**Charter-Based:**
- Structured with session charter
- Focused mission and time-box
- More organized approach

**Scenario-Based:**
- Explore based on user scenarios
- Test realistic user workflows
- Good for acceptance testing

### Best Practices

- **Time-box sessions:** Set limits to focus effort
- **Document findings:** Take notes during exploration
- **Use charters:** Provide structure and focus
- **Debrief sessions:** Share findings with team
- **Combine with scripted:** Use both approaches
- **Learn continuously:** Use discoveries to guide testing
- **Focus on mission:** Stay aligned with testing objectives

### Combining with Other Techniques

- **With scripted testing:** Use exploratory to find gaps
- **With error guessing:** Use experience to guide exploration
- **With risk-based:** Focus exploration on high-risk areas
- **With use cases:** Explore user scenarios

### Limitations

- **Less repeatable:** Hard to exactly reproduce
- **Depends on tester:** Quality varies with tester skills
- **Less traceable:** Harder to link to requirements
- **May miss systematic coverage:** May miss areas

## Related Rules

- `error-guessing` - Another experience-based technique
- `use-case-testing` - Can combine with exploratory testing
- `risk-based-testing` - Focus exploration on high-risk areas
