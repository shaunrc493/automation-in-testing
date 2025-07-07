# Bug Reporting

## Project

**Project:** Automation In Testing

**URL:**     automationintesting.online

**UID:**     AIT

## Bugs

**ID:**             AIT-1

**Issue:**          Amenities navlink is redundant

**Description:**    Amenities link does not appear to lead to any section in the site.

**Replication:**    Visit homepage, click Amenities navlink, observe no action is performed.

**Proposal:**       Remove redundant navlink.

**Context:**        Discovered on Chrome/Mac, confirmed on Safari, Firefox, Edge. Desktop and Mobile.

**Tags/Labels:**    UI, Nav

**Severity:**       Trivial - None working navlink, not causing any severe issues

---

**ID:**             AIT-2

**Issue:**          Check Availablity dates can be reversed

**Description:**    There is no validation on the Check Availability date inputs,
                allowing Check In to be after Check Out.

**Replication:**    Visit homepage, observe pre-set date inputs in Check Availability component,
                update Check In to be greater than Check Out, click Check Availability button,
                hover on room Book Now buttons to observe unvalidated dates are being used in
                URL variables (e.g., `/reservation/1?checkin=2025-07-31&checkout=2025-07-07`)

**Proposal:**       Implement client side validation to ensure Check Out is greater than or
                equal to Check In date

**Context:**        Discovered on Chrome/Mac, confirmed on Safari, Firefox, Edge. Desktop and Mobile.

**Tags/Labels:**    UI, Form Inputs, Validation

**Severity:**       Minor - Available rooms do not appear to fully respect availability dates, so
                presence of this bug is not causing a critical error

---

**ID:**             AIT-3

**Issue:**          Navbar overlaps top of Booking section

**Description:**    When using the navlinks or the Book Now CTA, the page scrolls to the Booking section.
                The page will stop with the top of the Booking section behind the navbar regardless
                of scroll direction. This obstructs the heading and inputs and requires user
                interaction to scroll to see the start of the section.
                This can have negative impacts on both human UX due to additional scrolling needed,
                and automated e2e testability if the framework can't "see" or click obstructed
                elements.

**Replication:**    Visit homepage, scroll to any point on the screen, click Booking navlink, observe
                page scroll functionality, observe much of the Booking section is obstructed.

**Proposal:**       Review component structure and rendering, considering impact on frontend functionality,
                for non-functional requirements.

**Context:**        Discovered on Chrome/Mac, confirmed on Safari, Firefox, Edge. Desktop is most severe
                but also occurs on Mobile.

**Tags/Labels:**    UI, Navbar, Sections, UX

**Severity:**       Minor - Resolved with limited user interaction

---

**ID:**             AIT-4

**Issue:**          Map inappropriately displayed on non-desktop views.

**Description:**    When viewing the site on a desktop device, the Location Map section shows the map view
                appropriately. When viewing the site on a mobile or tablet device (or changing viewport
                dimensions - all screens below 992px width), the map view shows with a height of 24px
                making it unusable.

**Replication:**    Visit the homepage, scroll the Contact section, resize window to 991px width or less,
                observe map area. Alternatively, visit site on mobile or tablet device.

**Proposal:**       Ensure map view is styled to be usable across all screensizes and device types.

**Context:**        Discovered on Chrome/Mac, confirmed on Safari, Firefox, Edge. Tablet and Mobile.

**Tags/Labels:**    UI, UX, Location

**Severity:**       Minor - Additional contact information still visible and usable
