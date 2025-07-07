# Test Strategy

## Approach

This task was approached methodically to reflect how I would assess an unfamiliar system in a real-world setting.

I began with manual exploration of the site using Chrome on macOS (Desktop viewport). Using browser developer tools, I observed the inspector for any console errors, DOM changes, and network traffic during typical user interactions. This helped identify critical user flows and the structure of frontend-backend communication.

I manually documented initial UI/UX bugs and visual inconsistencies found during testing. These were noted with context and potential impact.

Next, I ran automated accessibility scans using the “Accessibility Insights for Web” Chrome extension, followed by a Lighthouse report to capture preliminary accessibility, performance, and best practice insights. This informed my focus for non-functional automation checks.

Based on this analysis, I selected areas of functionality that I considered core to system success. These formed the basis of my automated test coverage:

**Frontend – UI/UX:**

- Verified key page headings load and are visible to ensure critical content renders correctly
- Tested the “Check Availability” component to confirm it dynamically updates the visible rooms based on input dates
- Validated that the contact form blocks blank submissions and correctly displays success messages on valid input
- Verified contact form submissions appear in the Admin Panel’s message inbox
- Asserted these behaviours across three viewports: Desktop, Tablet, and Mobile

**API Testing – Performance and Contract Checks:**

**Tested the Branding API:**

- Returns HTTP 200
- Responds in under 1000ms
- Response contains all expected top-level keys

**Tested the Room API:**

- Returns HTTP 200 and valid structure for /api/room
- Responds in under 1000ms
- Returns 200 for individual room by ID
- Returns 200 for room availability queries using check-in/check-out query params
- Responses include expected keys per object

**Non-Functional Testing:**

**Accessibility:**

- Used Cypress-axe integration to scan for WCAG 2.1 AA-level violations
- Used checkA11y() assertions to confirm expected accessibility compliance

**Performance:**

- Used Cypress Lighthouse plugin to run audit within test suite
- Verified that performance score meets or exceeds a configurable threshold
- Threshold defined in codebase for future tuning as standards or regressions evolve

This structured approach ensures core functionality is tested across both the user interface and underlying APIs, while also integrating accessibility and performance checks critical for modern, inclusive web applications.


## Objective

The objective of this test strategy is to define a clear, effective approach to verifying the functionality, accessibility, and reliability of the website https://automationintesting.online. This strategy is intended to demonstrate best practices in automation while aligning with modern testing principles relevant to Companies House services, including a focus on usability, accessibility, and public trust.

## Scope

The scope of this testing includes both the public-facing frontend of the website and the authenticated admin panel. Testing will cover key user journeys, API interactions, component behaviour across multiple viewports, and basic accessibility and performance metrics.

## Tools and Frameworks

This project uses Cypress for test automation due to its expressive syntax, built-in retry logic, and support for both UI and API testing within the same runner. Initial exploratory testing was conducted using Chrome DevTools to observe network activity, DOM changes, and console output. Further analysis was done using “Accessibility Insights for Web” and Lighthouse to guide the scope of automated non-functional checks. The Cypress-audit and Cypress-axe plugins were then integrated to allow performance and accessibility testing to be run alongside functional checks.

Alternative tooling such as Playwright or Postman could replicate these tests if adopted in the broader stack.

**Test Types Covered:**

**Functional UI Testing**

Validation of key user-facing journeys was prioritised based on observed user flows. These include:
- The booking flow (Check Availability → Room selection → Book Now)
- Contact form validation and successful submission
- Verification that submitted messages are delivered to the Admin Panel inbox
- Headings, component presence, and visual rendering checks across Desktop, Tablet, and Mobile viewports
- Assertions on dynamic query parameters in URLs (e.g., check-in/check-out in booking links)

**API Testing**

API testing focused on core endpoints observed during user interaction and confirmed via Chrome’s Network tab. Tests include:
- Status code validation
- Response time thresholds (less than 1000ms)
- Schema or key presence assertions for /branding, /room, /booking, and /message endpoints
- Functional testing of POST/GET sequences to validate state changes (e.g., message submission, room availability queries)

**Accessibility Testing**

Automated audit using Lighthouse and axe-core to detect contrast issues, missing labels, improper structure, or keyboard navigation problems.

Basic WCAG 2.1 AA compliance checks performed across the homepage and major interactive forms.

**Responsive Design Checks**

UI tests are run against three common viewport sizes to validate component rendering and layout adaptability: Desktop (1920x1080), Tablet (iPad-2), and Mobile (iPhone-6).

Assertions ensure critical flows remain accessible and functional at all breakpoints.

**Non-Functional Testing**

Accessibility and performance audits were initially run manually using Lighthouse and Accessibility Insights to identify critical issues. These checks were later codified using automated tools:
- Accessibility testing via Cypress-axe, with checkA11y() assertions embedded into the suite
- Performance testing via Cypress-audit (Lighthouse), configured with threshold assertions for performance score
- The performance threshold is defined as a static constant within the test suite for future tuning and regression prevention

## Test Execution

Tests are structured to be repeatable and stateless where possible. Tests are grouped by domain (frontend or admin) and scenario (booking, messaging, rooms). Tests can be run locally via the Cypress GUI or in headless mode using the CLI for CI/CD integration.

## Out of Scope

Advanced security testing such as XSS or SQL injection

Load or stress testing on API endpoints

Full accessibility audit with screen reader technology

## Risks and Assumptions

The backend APIs are assumed to be stable and reflect expected RESTful conventions

Data created during testing is not persistent and may reset between sessions

Test assertions are based on the current implementation and may need refactoring if the UI changes

## Conclusion

This strategy demonstrates a structured and exploratory approach to testing, beginning with manual inspection and tool-led discovery, followed by targeted automation that reflects real-world user flows. It balances functional, API-level, accessibility, and performance testing to provide confidence in both the usability and technical health of the application. This mirrors the standards expected of public-facing services and is aligned with principles of inclusivity, maintainability, and quality at scale.
